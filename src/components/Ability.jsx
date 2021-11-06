const Ability = ({ name, score, profSave, adjustScore, pb }) => {
    function handleScoreChange(e) {
        let newScore = e.target.value;
        adjustScore(name, newScore);
    }
    let color = "";
    if (profSave) color = "green";
    return (
        <div className="Ability">
            <div className="title">
                <b>{name}</b>
                <div className="score">
                    <div className="circle">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <input
                                value={score}
                                className="levelForm"
                                type="number"
                                onChange={handleScoreChange}
                                onSubmit={(e) => e.preventDefault()}
                            />
                        </form>
                    </div>
                </div>
            </div>
            <div className="bscontainer">
                <div className="bs">{Math.floor((score - 10) / 2)}</div>
                <div className="bs" style={{ backgroundColor: color }}>
                    {profSave
                        ? Math.floor((score - 10) / 2) + pb
                        : Math.floor((score - 10) / 2)}
                </div>
            </div>
            <div className="bslabels">
                <div className="lab">Bonus</div>
                <div className="lab" tyle={{ backgroundColor: color }}>
                    Save
                </div>
            </div>
        </div>
    );
};

export default Ability;
