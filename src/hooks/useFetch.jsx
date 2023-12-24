import axios from 'axios';
import { useState, useEffect } from 'react';
import { PUBLIC_KEY, HASH, TS } from '../config';

const useMarvelAPI = (endpoint, defaultParams = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async (params = {}) => {
        try {
            setLoading(true);
            setError(null);

            const response = await axios.get(endpoint, {
                params: {
                    limit: 32,
                    apikey: PUBLIC_KEY,
                    ts: TS,
                    hash: HASH,
                    ...defaultParams,
                    ...params,
                },
            });

            setData(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const search = async (searchTerm) => {
        await fetchData({ nameStartsWith: searchTerm });
    };

    return { data, loading, error, fetchData, search };
};

export default useMarvelAPI;
