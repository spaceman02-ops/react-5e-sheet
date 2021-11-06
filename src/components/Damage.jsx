const Damage = ({ dice, type, id, updateDamage }) => {
    const handleUpdateDamage =
        (action, part = 0) =>
        (e) => {
            let newValue = e.target.value;
            updateDamage(action, id, part, newValue);
        };

    return (
        <div className="damageHolder">
            <input
                id="dice"
                type="text"
                placeholder="Damage Dice"
                value={dice}
                onChange={handleUpdateDamage("update", "dice")}
            />
            <input
                id="type"
                type="text"
                placeholder="Damage Type"
                value={type}
                onChange={handleUpdateDamage("update", "type")}
            />
            <div className="iconButton" onClick={handleUpdateDamage("delete")}>
                <i className="fas fa-trash-alt"></i>
            </div>
        </div>
    );
};

export default Damage;
