import { useEffect } from "react";
import { useState } from "react";

const useDataFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
            .then(error => setError(error))
        setLoading(false);
    }, [url])

    return { data, loading, error }
};

export default useDataFetch;