import { useState } from "react";

const Spell = ({ el, abilities, updateSpell, pb }) => {
    let {
        title,
        save,
        components,
        concentration,
        castingTime,
        range,
        duration,
        school,
        level,
        description,
        id,
    } = el;
    const [collapse, setcollapse] = useState({ open: false });
    const toggleCollapse = () => {
        setcollapse({ open: !collapse.open });
    };
    function createAbilitySelect() {
        let selectOptions = abilities.map((i) => {
            return <option value={i.name}>{i.name}</option>;
        });
        return selectOptions;
    }

    const selectOptions = createAbilitySelect();
    const handleUpdateSpell =
        (action, part = 0) =>
        (e) => {
            let newValue = e.target.value;
            updateSpell(action, id, part, newValue);
        };
    return (
        <div className="spellHolder">
            <h3>{title}</h3>
            <div className="editButtons">
                <div className="iconButton" onClick={toggleCollapse}>
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                </div>
                <div
                    className="iconButton"
                    onClick={handleUpdateSpell("delete")}
                >
                    <i className="fas fa-trash-alt"></i>
                </div>
            </div>
            {collapse.open && (
                <div className="spell">
                    <div className="spellInputs">
                        <div className="formWrapper">
                            <div className="label">Spell Title:</div>
                            <input
                                type="text"
                                placeholder="Spell Name"
                                value={title}
                                onChange={handleUpdateSpell("update", "title")}
                            />
                        </div>
                        <div className="formWrapper">
                            <div className="label">Saving Throw:</div>
                            <select
                                name="abilityMod"
                                id="abilityMod"
                                value={save}
                                onChange={handleUpdateSpell("update", "save")}
                            >
                                {selectOptions}
                            </select>
                        </div>
                        <div className="formWrapper">
                            <div className="label">Components:</div>
                            <input
                                type="text"
                                placeholder="Components"
                                value={components}
                                onChange={handleUpdateSpell("update", "components")}
                            />
                        </div>
                        <div className="formWrapper">
                            <div className="label">Casting Time:</div>
                            <input
                                type="text"
                                placeholder="Casting Time"
                                value={castingTime}
                                onChange={handleUpdateSpell(
                                    "update",
                                    "castingTime"
                                )}
                            />
                        </div>
                        <div className="formWrapper">
                            <div className="label">Range:</div>
                            <input
                                type="text"
                                placeholder="Range"
                                value={range}
                                onChange={handleUpdateSpell("update", "range")}
                            />
                        </div>
                        <div className="formWrapper">
                            <div className="label">Duration:</div>
                            <input
                                type="text"
                                placeholder="Duration"
                                value={duration}
                                onChange={handleUpdateSpell("update", "duration")}
                            />
                        </div>
                        <div className="formWrapper">
                            <div className="label">School:</div>
                            <input
                                type="text"
                                placeholder="School"
                                value={school}
                                onChange={handleUpdateSpell("update", "school")}
                            />
                        </div>
                        <div className="formWrapper">
                            <div className="label">Spell Level:</div>
                            <input
                                type="text"
                                placeholder="Spell Level"
                                value={level}
                                onChange={handleUpdateSpell("update", "level")}
                            />
                        </div>
                    </div>
                    <div
                        className="prof"
                    >
                        Concentration:{" "}
                        <div className="iconButton" onClick={handleUpdateSpell("toggle")}>
                            {concentration ? (
                                <i className="fas fa-check"></i>
                            ) : (
                                <i className="fas fa-times"></i>
                            )}
                        </div>
                    </div>
                    Description:
                    <textarea
                        placeholder="Spell Description..."
                        value={description}
                        onChange={handleUpdateSpell("update", "description")}
                    ></textarea>
                </div>
            )}
        </div>
    );
};

export default Spell;
