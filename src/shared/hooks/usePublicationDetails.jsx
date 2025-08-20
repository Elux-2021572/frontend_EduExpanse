import { useState, useCallback } from "react";
import { getPublicDetails } from "../../services";

export const usePublicationDetails = () => {
    const [publication, setPublicationDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getPublicationDetails = useCallback(async (id) => {
        setIsLoading(true);
        setError(null);
        try {
        const res = await getPublicDetails(id);
        if (!res.error) {
            console.log("Respuesta de getPublicDetails:", res);
            setPublicationDetails(res.publication);

        } else {
            setError(res.message);
        }
        } catch (err) {
        setError(err.message);
        } finally {
        setIsLoading(false);
        }
    }, []);

    return { publication, isLoading, error, getPublicationDetails };
};
