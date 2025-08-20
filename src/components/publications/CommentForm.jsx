import { useState } from "react";
import PropTypes from "prop-types";

export const CommentForm = ({ onSubmit }) => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !comment.trim()) return;
        onSubmit({ name: name.trim(), comment: comment.trim(), date: new Date().toISOString() });
        setName("");
        setComment("");
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md w-full mt-4 md:mt-0 md:ml-6 p-4 border border-gray-300 rounded bg-white shadow-sm">
        <div className="mb-3">
            <label htmlFor="name" className="block font-semibold mb-1">
            Usuario
            </label>
            <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>

        <div className="mb-3">
            <label htmlFor="comment" className="block font-semibold mb-1">
            Comentario
            </label>
            <textarea
            id="comment"
            rows="4"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>

        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out cursor-pointer">
            Publicar Comentario
        </button>
        </form>
    );
};

CommentForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
