import Skill from "./Skill";

const Skills = ({ abilities, skilldata, toggleProf, pb }) => {
    let skillArr = skilldata
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .map((i, v) => {
            return (
                <Skill
                    name={i.name}
                    description={i.description}
                    key={v}
                    ability={i.ability}
                    abilities={abilities}
                    skilldata={skilldata}
                    toggleProf={toggleProf}
                    score={i.score}
                    prof={i.prof}
                    expertise={i.expertise}
                    pb={pb}
                />
            );
        });

    return (
        <>
            <div className="Skills">{skillArr}</div>
        </>
    );
};

export default Skills;
