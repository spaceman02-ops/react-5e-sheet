import Spell from "./Spell";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { initSpells } from "../data/data";
import { useStickyState } from "../utilities/functions";

const WrapSpells = ({ abilities, pb }) => {
    const [spells, setspells] = useStickyState(initSpells, "spells");

    function updateSpell(action, id, part, n) {
        let y = [...spells];
        let index = y.findIndex((i) => i.id === id);
        if (action === "delete") {
            y.splice(index, 1);
        }
        if (action === "update") {
            y[index][part] = n;
        }

        if (action === "toggle") {
            y[index]["concentration"] = !y[index]["concentration"];
        }
        setspells(y);
    }

    function addSpell() {
        let y = [...spells];
        let id = Date.now();
        let newSpell = {
            title: "Fireball",
            save: "Dexterity",
            components: "V, S, M",
            castingTime: "1 action",
            concentration: false,
            range: "150 ft.",
            duration: "instantaneous",
            school: "Evocation",
            level: "3",
            description: `A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one. The fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried. When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.
        `,
            id: id,
        };
        y.push(newSpell);
        setspells(y);
    }

    const displaySpells = spells.map((i, v) => {
        return (
            <CSSTransition key={v} timeout={500} classNames="item">
                <Spell
                    el={i}
                    key={i.id}
                    abilities={abilities}
                    updateSpell={updateSpell}
                    pb={pb}
                ></Spell>
            </CSSTransition>
        );
    });
    return (
        <div className="WrapSpells">
            <div className="spellHeader">
                <h2>Spells</h2>
                <div className="iconButton" onClick={addSpell}>
                    <i className="fas fa-plus plus"></i>
                </div>
            </div>
            <TransitionGroup component={null}>{displaySpells}</TransitionGroup>
        </div>
    );
};

export default WrapSpells;
