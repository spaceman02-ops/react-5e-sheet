const Armor = ({ title, value, id, updateArmor, deleteArmor }) => {
    const handleUpdateTitle = (e) => {
        let newTitle = e.target.value;
        updateArmor(id, "title", newTitle);
    };

    const handleUpdateValue = (e) => {
        let newValue = e.target.value;
        updateArmor(id, "value", newValue);
    };

    const handleDelete = () => {
        deleteArmor(id);
    };

    return (
        <div className="armor">
            <input
                className="armorTitle"
                type="text"
                placeholder="Armor Title"
                value={title}
                onChange={handleUpdateTitle}
            />
            <input
                className="armorBonus"
                type="text"
                placeholder="+/-"
                value={value}
                onChange={handleUpdateValue}
            />
            <div className="iconButton" onClick={handleDelete}>
                <i className="fas fa-trash-alt"></i>
            </div>
        </div>
    );
};

export default Armor;
