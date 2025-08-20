import PropTypes from "prop-types";

export const PublicationCard = ({ title, course, image, onClick }) => {
    console.log("Render image:", image);

    const imageUrl = image
        ? `http://localhost:3001/public/uploads/publications/${image}`
        : null;

    return (
        <div
        onClick={onClick}
        className="cursor-pointer border rounded-xl shadow-sm hover:shadow-md transition p-4 bg-white"
        >
        {imageUrl ? (
            <img
            src={imageUrl}
            alt={title}
            className="w-full aspect-video object-cover rounded-md mb-3"
            onError={(e) => {
                e.target.onerror = null;
                e.target.src = "../../../public/default-image.jpg"; 
            }}
            />
        ) : (
            <p className="text-gray-400 italic text-center">No hay imagen disponible</p>
        )}

        <h2 className="text-xl font-semibold mb-1 mb-1 text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500">Curso: {course}</p>
        </div>
    );
};

PublicationCard.propTypes = {
    title: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
    image: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};
