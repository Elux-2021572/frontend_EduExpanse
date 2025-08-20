import axios from "axios"

const ApiClient = axios.create({
    baseURL: "http://localhost:3000/blog/v1",
    timeout: 5000,
    httpAgent: false
})

// Interceptor para manejar errores de conexión
ApiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.code === 'ECONNREFUSED' || error.code === 'ERR_NETWORK') {
            console.error('Error de conexión: El servidor backend no está disponible en http://localhost:3000');
        }
        return Promise.reject(error);
    }
);

export const getPublicDetails = async(id) =>{
    try {
        const {data} = await ApiClient.get(`/publication/${id}`)
        return data
    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}

export const getPostFilter = async (filters) => {
    try {
        const { data } = await ApiClient.get("/publication/filter", {
            params: {
                course: filters.course || undefined,
                title: filters.title || undefined,
                sortByDate: filters.order || undefined,
                startDate: filters.startDate || undefined,
                endDate: filters.endDate || undefined,
            },
        })
        return { data }
    } catch (e) {
        return {
            error: true,
            message: e.response?.data?.message || e.message,
        }
    }
}
export const getPublics = async() =>{
    try {
        const response = await ApiClient.get("/publication/")
        return {
            data: response.data,
            error: false
        }
    } catch (error) {
        console.error('Error al obtener publicaciones:', error.message);
        if (error.code === 'ECONNREFUSED' || error.code === 'ERR_NETWORK') {
            return {
                error: true,
                message: 'No se puede conectar al servidor. Asegúrate de que el backend esté ejecutándose en http://localhost:3000'
            }
        }
        return {
            error: true,
            message: error.response?.data?.message || error.message
        }
    }
}

export const createComment = async (id, {name, comment}) => {
    try {
        const {data} = await ApiClient.patch(`/publication/${id}`, {
            name,
            comment
        })
        return data
    } catch (e) {
        return {
            error: true,
            message: e.response?.data?.message || e.message,

        }
    }
}

