import React, { useEffect, useRef, useState } from "react";
import Armor from "./Armor";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const WrapAC = () => {
    //initiate the entities
    const initArmor = [
        {
            title: "Unarmored Defense",
            value: 10,
            id: 123,
        },
    ];
    //useState
    const [armorClass, setarmorClass] = useState(initArmor);

    //CRUD
    function addArmor() {
        let y = [...armorClass];
        let id = Date.now();
        let newArmor = {
            title: "",
            value: "",
            id: id,
            key: id,
        };
        y.push(newArmor);
        setarmorClass(y);
    }

    function updateArmor(t, part, n) {
        let y = [...armorClass];
        let index = y.findIndex((i) => i.id === t);
        y[index][part] = n;
        setarmorClass(y);
    }

    function deleteArmor(t) {
        let y = [...armorClass];
        let index = y.findIndex((i) => i.id === t);
        y.splice(index, 1);
        setarmorClass(y);
    }

    //specific function
    function getArmorClass() {
        const arr = armorClass.map((i) => i.value);
        return arr.reduce((a, b) => {
            return Number(a) + Number(b);
        }, 0);
    }

    const bottomRef = useRef(null);

    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
        return () => {};
    }, [armorClass]);

    const ac = getArmorClass(armorClass);

    //map all elements
    const displayArmor = armorClass.map((i, v) => {
        return (
            <CSSTransition key={v} timeout={500} classNames="item">
                <Armor
                    title={i.title}
                    value={i.value}
                    id={i.id}
                    key={i.id}
                    updateArmor={updateArmor}
                    deleteArmor={deleteArmor}
                ></Armor>
            </CSSTransition>
        );
    });

    return (
        <div className="WrapAC">
            <div className="armorHeading">
                <h2>Armor Class: {ac}</h2>
                <div className="iconButton" onClick={addArmor} ref={bottomRef}>
                    <i className="fas fa-plus plus"></i>
                </div>
            </div>

            <TransitionGroup component={null}>{displayArmor}</TransitionGroup>
        </div>
    );
};

export default WrapAC;
