import Feat from "./Feat";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const WrapFeat = ({ feats, addFeat, deleteFeat, updateFeat }) => {
    const showFeats = feats.map((i, v) => {
        return (
            <CSSTransition key={v} timeout={500} classNames="item">
                <Feat
                    title={i.title}
                    content={i.content}
                    key={i.key}
                    id={i.id}
                    deleteFeat={deleteFeat}
                    updateFeat={updateFeat}
                ></Feat>
            </CSSTransition>
        );
    });

    return (
        <div className="allFeats">
            <div className="featHeader">
                <h2>Feats and Traits</h2>
                <div className="iconButton" onClick={addFeat}>
                    <i className="fas fa-plus plus"></i>
                </div>
            </div>
            <div>
                <TransitionGroup>{showFeats}</TransitionGroup>
            </div>
        </div>
    );
};

export default WrapFeat;
