import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useAuth } from './useAuth';
import { BASE_URL } from '../config';

export const AXIOS_METHOD = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE',
    PATCH: 'PATCH',
};
let localAccessToken = null;

export async function doApiCall(method, uri, onSuccess, onFailure = false, data = undefined) {
    try {
        const res = await axios({
            method,
            url: `${BASE_URL}${uri}`,
            data,
            headers: localAccessToken ? { authorization: `Bearer ${localAccessToken}` } : {},
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
    const { accessToken } = useAuth();

    useEffect(() => {
        localAccessToken = accessToken;
    }, [accessToken]);

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
