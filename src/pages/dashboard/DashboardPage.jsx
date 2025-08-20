import { useState, useEffect } from "react";
import { Navbar } from "../../components/nav/NavbarPage";
import { getPostFilter, getPublics } from "../../services";
import { RiseLoader } from "react-spinners";
import { Publications } from "../../components/publications/Publications";

export const DashboardPage = () => {
    const [publications, setPublications] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchPublications = async (filters) => {
        setLoading(true);
        setError(null);

        try {
            let response;
            if (filters) {
                response = await getPostFilter(filters);
            } else {
                response = await getPublics();
            }

            if (response.error) {
                console.error("Error en la respuesta:", response.message);
                setError(response.message);
                setPublications([]);
                return;
            }

            // Manejar diferentes estructuras de respuesta
            let publicationsData = [];
            if (filters) {
                // Para filtros, la estructura puede ser diferente
                publicationsData = response.data?.publications || response.data || [];
            } else {
                // Para getPublics, revisar ambas estructuras posibles
                publicationsData = response.data?.publications || response.data || [];
            }

            console.log("Datos recibidos:", publicationsData);
            
            if (Array.isArray(publicationsData)) {
                setPublications(publicationsData);
            } else {
                console.warn("No se recibió un array de publicaciones:", publicationsData);
                setPublications([]);
            }
        } catch (error) {
            console.error("Error al obtener publicaciones:", error);
            setError("Error al cargar las publicaciones");
            setPublications([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPublications();
    }, []);

    const handleFilter = (filters) => {
        fetchPublications(filters);
    };

    return (
        <div className="min-h-screen p-4 bg-gray-50">
            <Navbar onFilter={handleFilter} />
            {loading ? (
                <div className="flex justify-center items-center h-60">
                    <RiseLoader color="#36d7b7" />
                </div>
            ) : (
                <div className="mt-6">
                    {error ? (
                        <div className="text-center text-red-500 text-lg bg-red-50 p-4 rounded-lg">
                            <p>{error}</p>
                            <button 
                                onClick={() => fetchPublications()}
                                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Reintentar
                            </button>
                        </div>
                    ) : publications.length === 0 ? (
                        <p className="text-center text-gray-500 text-lg">No hay publicaciones.</p>
                    ) : (
                        <Publications publications={publications} />
                    )}
                </div>
            )}
        </div>
    );
};
