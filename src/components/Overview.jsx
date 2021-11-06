import BioForm from "./BioForm";

const Overview = ({ updateBio, bio }) => {
    function createElements() {
        let array = [];
        let count = 0;
        for (const [name, content] of Object.entries(bio)) {
            count++;
            array.push(
                <BioForm
                    name={name}
                    content={content}
                    key={count}
                    updateBio={updateBio}
                ></BioForm>
            );
        }
        return array;
    }
    const bioArr = createElements();

    return (
        <div className="Bio">
            <input
                type="text"
                className="characterNameInput"
                maxLength="35"
                placeholder="Character name..."
                onSubmit={(e) => e.preventDefault()}
            ></input>
            {bioArr}
        </div>
    );
};

export default Overview;
