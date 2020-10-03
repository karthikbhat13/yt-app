import React, {useState} from "react";

const SearchBar = ({onFormSubmit}) => {

    const [term, setTerm] = useState('')

    const submitTerm = (e)=>{
        e.preventDefault();

        onFormSubmit(term);
    };

    return (
        <div className="ui segment search-bar">
            <form onSubmit={submitTerm} className="ui form">
                <input className="field"
                       type="text" value={term}
                       onChange={(e) => setTerm(e.target.value)}/>
            </form>
        </div>
    );
}

export default SearchBar;