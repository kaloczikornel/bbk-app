import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useAuth } from './useAuth';

const BASE_URL = 'http://localhost:4000';
export const AXIOS_METHOD = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE',
};

export function doApiCall(
    method,
    uri,
    accessToken,
    onSuccess,
    onFailure = false,
    data = undefined
) {
    axios({
        method,
        url: `${BASE_URL}${uri}`,
        data,
        headers: accessToken ? { authorization: `Bearer ${accessToken}` } : {},
    })
        .then((res) => {
            onSuccess(res.data);
        })
        .catch((err) => {
            console.error(err);
            if (onFailure === false) {
                return;
            }
            onFailure(err?.response?.data?.error, err);
        });
}

export function useApi(method, uri, postData = undefined, deps = []) {
    const [data, setData] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { getAccessTokenSilently, getAccessTokenWithPopup } = useAuth();
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const token = await getAccessTokenSilently({
                    audience: 'https://bbk-app.hu',
                    scope: 'read:events',
                });
                setAccessToken(token);
            } catch (e) {
                try {
                    const token = await getAccessTokenWithPopup({
                        audience: 'https://bbk-app.hu',
                        scope: 'read:events',
                    });
                    setAccessToken(token);
                } catch (err) {
                    console.log(err);
                }
            }
        })();
    }, [setAccessToken, getAccessTokenSilently, getAccessTokenWithPopup]);

    const apiCallCallback = useCallback(
        (apiPostData) => {
            setLoading(true);
            doApiCall(
                method,
                uri,
                accessToken,
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
        [
            method,
            setData,
            setError,
            setLoading,
            uri,
            accessToken,
            getAccessTokenSilently,
            setAccessToken,
        ]
    );

    useEffect(() => {
        apiCallCallback(postData);
    }, [apiCallCallback, JSON.stringify(postData), ...deps, postData]);

    return [data, loading, error, apiCallCallback];
}
