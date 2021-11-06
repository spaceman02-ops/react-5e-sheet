const Skill = ({
    toggleProf,
    prof,
    expertise,
    abilities,
    name,
    ability,
    pb,
}) => {
    const handleClick = () => {
        toggleProf(name);
    };
    let divLabel = "Unskilled";
    let color = "#f7f7f7";
    if (expertise) {
        divLabel = "Expertise";
        color = "#FFB30F";
    } else if (prof) {
        divLabel = "Proficient";
        color = "#849324";
    } else {
        divLabel = "Unskilled";
        color = "#f7f7f7";
    }

    function getscore() {
        let abScore = abilities.find((i) => i.name === ability).score;

        if (expertise) {
            return Math.floor((abScore - 10) / 2) + 2 * pb;
        } else if (prof) {
            return Math.floor((abScore - 10) / 2) + pb;
        } else {
            return Math.floor((abScore - 10) / 2);
        }
    }

    const score = getscore();
    return (
        <div className="skill">
            <div
                className="square_btn"
                onClick={handleClick}
                id="Proficient"
                style={{ backgroundColor: color }}
            >
                <b>{name}</b>
                {divLabel}
                <br />
                Bonus: {score}
            </div>{" "}
            <br />
        </div>
    );
};

export default Skill;
