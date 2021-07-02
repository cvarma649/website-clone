import React, {useState} from "react";
import "./Search.css";
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import {useHistory} from "react-router-dom";
import {useStateValue} from "./StateProvider";
import { actionTypes } from './reducer';

function Search({hideButtons = false}) {

    const [{term}, dispatch] = useStateValue();

    const [message,setMessage] = useState("");
    const history = useHistory();
    
    const search = (e) => {
        if(message.length>0){
        e.preventDefault();

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: message
        })
     
        history.push("/search")
    };
}

    return (
        <form className="search">
           <div className="search_input"> 
               <SearchIcon className="SearchIcon" />
               <input value={term} defaultValue={message} onChange={e=>setMessage(e.target.value)}/>
               <MicIcon className="MicIcon" />
           </div>

           {! hideButtons ? (
                <div className="Search_Buttons">
                    <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
            ): (
                <div className="Search_ButtonsHidden">
                    <Button  type="submit" onClick={search} variant="outlined">Google Search</Button>
                    <Button  variant="outlined">I'm Feeling Lucky</Button>
                </div>
            )
            }
        </form>
    );
};

export default Search