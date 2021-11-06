import { useState } from "react";
import Attack from "./Attack";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { initAttacks } from "../data/data";
const WrapAttacks = ({ abilities, pb }) => {
    const [attacks, setattacks] = useState(initAttacks);

    function updateAttack(action, id, part, n) {
        let y = [...attacks];
        let index = y.findIndex((i) => i.id === id);
        if (action === "delete") {
            y.splice(index, 1);
        }
        if (action === "update") {
            y[index][part] = n;
        }

        if (action === "toggle") {
            y[index]["proficient"] = !y[index]["proficient"];
        }
        setattacks(y);
    }

    function addAttack() {
        let y = [...attacks];
        let id = Date.now();
        let newAttack = {
            title: "New Weapon",
            damage: [{ type: "slashing", dice: "1d8" }],
            ability: "Strength",
            accuracyBonus: 0,
            damageBonus: 0,
            id: id,
            proficient: true,
        };
        y.push(newAttack);
        setattacks(y);
    }

    const displayAttacks = attacks.map((i, v) => {
        return (
            <CSSTransition key={v} timeout={500} classNames="item">
                <Attack
                    el={i}
                    key={i.id}
                    abilities={abilities}
                    updateAttack={updateAttack}
                    pb={pb}
                ></Attack>
            </CSSTransition>
        );
    });
    return (
        <div className="WrapAttacks">
            <div className="attackHeader">
                <h2>Attacks</h2>
                <div className="iconButton" onClick={addAttack}>
                    <i className="fas fa-plus plus"></i>
                </div>
            </div>
            <TransitionGroup component={null}>{displayAttacks}</TransitionGroup>
        </div>
    );
};

export default WrapAttacks;
