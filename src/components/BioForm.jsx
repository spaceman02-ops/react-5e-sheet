import { toTitleCase } from "../utilities/functions";

const BioForm = ({ name, content, updateBio }) => {
    const handleChange = (e) => {
        let newcontent = e.target.value;
        updateBio(name, newcontent);
    };

    return (
        <div className="formWrapper">
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    value={content}
                    type="text"
                    onChange={handleChange}
                ></input>
            </form>
            <div className="label">
                <h3>{toTitleCase(name)}</h3>
            </div>
        </div>
    );
};

export default BioForm;
