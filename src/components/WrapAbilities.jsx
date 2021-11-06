import Ability from "./Ability";

const Stats = ({ abilities, adjustScore, pb, toggleSaveProf }) => {
    const showAbilities = abilities.map((i, v) => {
        return (
            <Ability
                name={i.name}
                score={i.score}
                profSave={i.profSave}
                adjustScore={adjustScore}
                toggleSaveProf={toggleSaveProf}
                key={`stats${v}`}
                pb={pb}
            />
        );
    });

    return (
        <>
            <div className="Stats">{showAbilities}</div>
        </>
    );
};

export default Stats;
