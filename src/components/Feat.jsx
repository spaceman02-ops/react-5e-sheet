import { useState } from "react";

const Feat = ({ title, content, id, deleteFeat, updateFeat }) => {
    const [collapse, setcollapse] = useState({ open: false });

    const toggleCollapse = () => {
        setcollapse({ open: !collapse.open });
    };

    const handleDelete = () => {
        deleteFeat(id);
    };

    const handleUpdateTitle = (e) => {
        let newTitle = e.target.value;
        updateFeat(id, "title", newTitle);
    };

    const handleUpdateContent = (e) => {
        let newContent = e.target.value;
        updateFeat(id, "content", newContent);
    };

    return (
        <div className="featContainer">
            <div className="featTop">
                <div className="iconButton" onClick={toggleCollapse}>
                    <i className="fas fa-chevron-down"></i>
                </div>
                <input
                    type="text"
                    placeholder="Feat Title"
                    value={title}
                    onChange={handleUpdateTitle}
                    onSubmit={(e) => e.preventDefault()}
                />{" "}
                <div className="iconButton" onClick={handleDelete}>
                    <i className="fas fa-trash-alt"></i>
                </div>
            </div>

            <div className="featBottom">
                {collapse.open && (
                    <textarea
                        placeholder="Feat Description..."
                        value={content}
                        onChange={handleUpdateContent}
                        onSubmit={(e) => e.preventDefault()}
                    ></textarea>
                )}
            </div>
        </div>
    );
};

export default Feat;
