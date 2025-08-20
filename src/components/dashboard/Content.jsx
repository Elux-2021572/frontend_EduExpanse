import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";
import { Publications } from "../publications/Publications";
import { PublicationView } from "../publications/PublicationView";

export const DashboardContent = ({ publications, fetchPublications }) => {
    return (
        <div className="p-4">
            <Routes>
                <Route path="/" element={<Publications publications={publications} />} />
                <Route path="/:id" element={<PublicationView fetchPublications={fetchPublications} />} />
            </Routes>
        </div>
    );
};

DashboardContent.propTypes = {
    publications: PropTypes.array.isRequired,
    fetchPublications: PropTypes.func.isRequired,
};
