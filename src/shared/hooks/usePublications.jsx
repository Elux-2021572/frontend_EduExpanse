import { useState, useEffect, useCallback } from "react";
import { getPublics } from "../../services/api";

export const usePublications = () => {
    const [publications, setPublications] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchPublications = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const res = await getPublics();
            if (!res.error) {
                // Asegurar que estamos obteniendo el array correcto
                const publicationsData = res.data?.publications || res.data || [];
                setPublications(Array.isArray(publicationsData) ? publicationsData : []);
            } else {
                setError(res.message);
                setPublications([]);
            }
        } catch (err) {
            setError(err.message);
            setPublications([]);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchPublications();
    }, [fetchPublications]);

    return { publications, isLoading, error, fetchPublications };
};
