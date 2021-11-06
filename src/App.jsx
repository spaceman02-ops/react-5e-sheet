import "./css/style.min.css";
import Overview from "./components/Overview";
import Stats from "./components/WrapAbilities";
import Skills from "./components/WrapSkills";
import WrapFeat from "./components/WrapFeat";
import WrapAC from "./components/WrapAC";
import { SkillData, abilities, bioData, featsTraits } from "./data/data";
import WrapAttacks from "./components/WrapAttacks";
import WrapSpells from "./components/WrapSpells";
import { useStickyState } from "./utilities/functions";
function App() {
    const [scores, setScores] = useStickyState(abilities, "abilities");
    const [skills, setSkills] = useStickyState(SkillData, "skills");
    const [bio, setbio] = useStickyState(bioData, "bio");
    const [feats, setFeats] = useStickyState(featsTraits, "feats");

    function adjustScore(a, n) {
        let s = [...scores];
        s.find((i) => i.name === a).score = n;
        setScores(s);
    }

    function toggleProf(s) {
        let c = [...skills];
        let i = c.findIndex((i) => i.name === s);
        if (c[i].prof) {
            c[i].prof = false;
            c[i].expertise = true;
        } else if (c[i].expertise) c[i].expertise = false;
        else c[i].prof = true;
        setSkills(c);
    }

    function updateBio(s, n) {
        let x = { ...bio };
        x[s] = n;
        setbio(x);
    }

    function addFeat() {
        let y = [...feats];
        let key = Date.now();
        console.log(key);
        let newFeat = {
            title: "",
            content: "",
            key: key,
            id: key,
        };

        y.push(newFeat);
        setFeats(y);
    }

    function deleteFeat(t) {
        console.log(t);
        let y = [...feats];
        let index = y.findIndex((i) => i.id === t);
        y.splice(index, 1);
        setFeats(y);
    }

    function updateFeat(t, part, n) {
        let y = [...feats];
        let index = y.findIndex((i) => i.id === t);
        y[index][part] = n;
        setFeats(y);
    }
    let pb = Math.ceil(bio.level / 4) + 1;
    return (
        <div className="App">
            <Overview updateBio={updateBio} bio={bio}></Overview>

            <Stats abilities={scores} adjustScore={adjustScore} pb={pb}></Stats>
            <Skills
                skilldata={skills}
                abilities={scores}
                toggleProf={toggleProf}
                pb={pb}
            ></Skills>
            <div className="bottomStats">
                <WrapFeat
                    feats={feats}
                    addFeat={addFeat}
                    deleteFeat={deleteFeat}
                    updateFeat={updateFeat}
                ></WrapFeat>
                <WrapAttacks abilities={scores} pb={pb}></WrapAttacks>
                <WrapAC></WrapAC>
            </div>
            <WrapSpells abilities={scores} pb={pb}></WrapSpells>
        </div>
    );
}

export default App;
