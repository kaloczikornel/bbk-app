import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useAuth } from './useAuth';

export const BASE_URL = 'http://localhost:4000';
export const AXIOS_METHOD = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE',
    PATCH: 'PATCH',
};
let accessToken = null;

export async function doApiCall(method, uri, onSuccess, onFailure = false, data = undefined) {
    try {
        const res = await axios({
            method,
            url: `${BASE_URL}${uri}`,
            data,
            headers: accessToken ? { authorization: `Bearer ${accessToken}` } : {},
        });

        onSuccess(res.data);
    } catch (err) {
        console.error(err);
        if (onFailure === false) {
            return;
        }
        onFailure(err?.response?.data?.error, err);
    }
}

export function useApi(method, uri, postData = undefined, deps = []) {
    const [data, setData] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { getAccessTokenSilently, getAccessTokenWithPopup } = useAuth();

    useEffect(() => {
        (async () => {
            try {
                accessToken = await getAccessTokenSilently({
                    audience: 'https://bbk-app.hu',
                    scope: 'read:events',
                });
            } catch (e) {
                console.log(e);
            }
        })();
    }, [getAccessTokenSilently, getAccessTokenWithPopup]);

    const apiCallCallback = useCallback(
        async (apiPostData) => {
            setLoading(true);
            await doApiCall(
                method,
                uri,
                (responseData) => {
                    setData(responseData);
                    setError(false);
                    setLoading(false);
                },
                (errorMessage) => {
                    setError(errorMessage);
                    setData(false);
                    setLoading(false);
                },
                apiPostData
            );
        },
        [method, setData, setError, setLoading, uri, accessToken]
    );

    useEffect(() => {
        apiCallCallback(postData);
    }, [apiCallCallback, JSON.stringify(postData), ...deps, postData]);

    return [data, loading, error, apiCallCallback];
}
