import { ClipLoader } from 'react-spinners';

export const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center h-64">
        <ClipLoader
            color="#4F46E5" // Indigo-600 de Tailwind, para que vaya con el diseño
            size={60}
            aria-label="loading-spinner"
            data-testid="loader"
        />
        </div>
    );
};
