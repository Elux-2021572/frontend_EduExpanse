import PropTypes from "prop-types";

export const PublicationDescription = ({ publication }) => {
    const { title, content, course, comments, date } = publication;

    return (
        <div>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="mb-4 text-gray-700">{content}</p>
        <p className="mb-2 font-semibold text-blue-800">Curso: {course}</p>
        <p className="mb-4 text-sm text-gray-500">Fecha: {new Date(date).toLocaleDateString()}</p>

        <div>
            <h2 className="text-2xl font-semibold mb-2">Comentarios</h2>
            {comments.length === 0 ? (
            <p className="text-gray-500 italic">No hay comentarios aún. Sé el primero en comentar!</p>
            ) : (
            comments.map((c, i) => (
                <div key={i} className="border border-gray-200 bg-gray-50 rounded-md p-3 mb-3 shadow-sm">
                <p className="font-semibold text-blue-600">{c.name} <span className="text-gray-500 font-normal">dijo:</span></p>
                <p className="text-gray-700">{c.comment}</p>
                <p className="text-xs text-gray-400 mt-1">{new Date(c.date).toLocaleString()}</p>
                </div>
            ))
            )}
        </div>
        </div>
    );
};

PublicationDescription.propTypes = {
    publication: PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        course: PropTypes.string.isRequired,
        comments: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            comment: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
        })
        ).isRequired,
        date: PropTypes.string.isRequired,
    }).isRequired,
};
