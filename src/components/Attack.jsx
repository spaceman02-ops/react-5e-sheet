import { useState } from "react";
import Damage from "./Damage";

const Attack = ({ el, abilities, updateAttack, pb }) => {
    let { title, damage, ability, accuracyBonus, damageBonus, id, proficient } =
        el;
    const [damages, setdamages] = useState(damage);
    const [collapse, setcollapse] = useState({ open: false });

    const toggleCollapse = () => {
        setcollapse({ open: !collapse.open });
    };

    function updateDamage(action, id, part, n) {
        let y = [...damages];
        let index = y.findIndex((i) => i.id === id);
        if (action === "delete") {
            y.splice(index, 1);
        }
        if (action === "update") {
            y[index][part] = n;
        }
        setdamages(y);
    }

    function addDamage() {
        let y = [...damages];
        let id = Date.now();
        let newDamage = {
            type: "",
            dice: "",
            id: id,
        };
        y.push(newDamage);
        setdamages(y);
    }

    const damageArray = damages.map((i, v) => {
        return (
            <Damage
                id={i.id}
                type={i.type}
                key={v}
                dice={i.dice}
                updateDamage={updateDamage}
            ></Damage>
        );
    });
    const handleUpdateAttack =
        (action, part = 0) =>
        (e) => {
            let newValue = e.target.value;
            updateAttack(action, id, part, newValue);
        };

    function createAbilitySelect() {
        let selectOptions = abilities.map((i) => {
            return <option value={i.name}>{i.name}</option>;
        });
        return selectOptions;
    }

    const selectOptions = createAbilitySelect();
    function createAttackRoll() {
        const abilityValue = Math.floor(
            abilities.find((i) => i.name === ability)?.score / 4
        );
        let attackString = `Attack Roll: 1d20 + `;
        attackString += `${abilityValue} + `;
        proficient && (attackString += `${pb} + `);
        attackString += `${accuracyBonus}`;
        return attackString;
    }

    function createDamageRoll() {
        const abilityValue = Math.floor(
            abilities.find((i) => i.name === ability)?.score / 4
        );
        let damageString = `Damage Roll: `;
        let damageDice = damages.map((i) => i.dice);
        damageDice.forEach((el) => {
            damageString += `${el} + `;
        });
        damageString += `${abilityValue?.toString()} + `;
        damageString += damageBonus;
        return damageString;
    }
    let damageRoll = createDamageRoll();
    let attackRoll = createAttackRoll();
    return (
        <div className="attackHolder">
            <h3>{title}</h3>
            {attackRoll}
            <br />
            {damageRoll}
            <div className="editButtons">
                <div className="iconButton" onClick={toggleCollapse}>

                        <i className="fa fa-pencil" aria-hidden="true"></i>

                </div>
                <div
                    className="iconButton"
                    onClick={handleUpdateAttack("delete")}
                >
                    <i className="fas fa-trash-alt"></i>
                </div>
            </div>
            {collapse.open && (
                <div className="attack">
                    Weapon Title:
                    <input
                        type="text"
                        placeholder="Weapon Name"
                        value={title}
                        onChange={handleUpdateAttack("update", "title")}
                    />
                    Ability Used:
                    <select
                        name="abilityMod"
                        id="abilityMod"
                        value={ability}
                        onChange={handleUpdateAttack("update", "ability")}
                    >
                        {selectOptions}
                    </select>
                    Damage Dice:{" "}
                    <div className="iconButton" onClick={addDamage}>
                        <i className="fas fa-plus" />
                    </div>
                    {damageArray}
                    Accuracy Bonus:
                    <input
                        type="text"
                        placeholder="Accuracy Bonus"
                        value={accuracyBonus}
                        onChange={handleUpdateAttack("update", "accuracyBonus")}
                    />
                    Damage Bonus:
                    <input
                        type="text"
                        placeholder="Damage Bonus"
                        value={damageBonus}
                        onChange={handleUpdateAttack("update", "damageBonus")}
                    />
                    <div
                        className="prof"
                        onClick={handleUpdateAttack("toggle")}
                    >
                        Proficient:{" "}
                        <div className="iconButton">
                            {proficient ? (
                                <i className="fas fa-check"></i>
                            ) : (
                                <i className="fas fa-times"></i>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Attack;
