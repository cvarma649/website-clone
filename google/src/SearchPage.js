import React from 'react';
import {useStateValue} from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import  { Link } from "react-router-dom";
import Search from "./Search";
import "./SearchPage.css";
import SearchIcon from '@material-ui/icons/Search';
import BookIcon from '@material-ui/icons/Book';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';


function SearchPage() {
    // eslint-disable-next-line
    const [{term}, dispatch] = useStateValue();

    const {data} = useGoogleSearch(term);
    
     // Mock API Call
     // const data = Response;

    console.log(data)
    
    return (
    <div className="searchPage">
        <div className="searchPage_header">
            <Link to = "/">
                <img src="https://cdn.freebiesupply.com/images/large/2x/google-logo-transparent.png" alt =""/>
            </Link>
            <div className="searchPage_headerBody">
                <Search mess={term} hideButtons/>
                <div className="searchPage_options">
                     <div className="searchPage_optionsLeft">

                        <div className="searchPage_option">
                        <SearchIcon className="searchPage_optionIcon" />
                        <Link to="/all">All</Link>
                        </div>

                        <div className="searchPage_option">
                        <BookIcon className="searchPage_optionIcon"/>
                        <Link to="/books">Books</Link>
                        </div>

                        <div className="searchPage_option">
                        <DescriptionOutlinedIcon className="searchPage_optionIcon" />
                        <Link to="/news">News</Link>
                        </div>

                        <div className="searchPage_option">
                        <RoomOutlinedIcon  className="searchPage_optionIcon"/>
                        <Link to="/maps">Maps</Link>
                        </div>

                        <div className="searchPage_option">
                        <OndemandVideoIcon className="searchPage_optionIcon" />
                        <Link to="/videos">Videos</Link>
                        </div>

                        <div className="searchPage_option">
                        <DragIndicatorIcon className="searchPage_optionIcon" />
                        <Link to="/more">More</Link>
                        </div>
                    </div>
                    <div className="searchPage_optionsRight">
                        <div className="searchPage_option">
                        <Link to="/setting">Settings</Link>
                        </div>
                        <div className="searchPage_option ">
                        <Link to="/tools">Tools</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {term && (
            <div className="searchPage_results">
                <p className="searchPage_resultsCount">
                    About {data?.searchInformation.formattedTotalResults} results in {data?.searchInformation.formattedSearchTime} seconds for {term}
                </p>

                {data?.items.map(item => (
                    <div className="searchPage_result">
                        <a href={item.link}>
                        {item.pagemap?.cse_image?.length > 0 &&
                                  item.pagemap?.cse_image[0]?.src && (
                            <img className="searchPage_resultImage"  src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src} alt="" />
                        
                        )} 
                        {item.displayLink}
                        </a>
                        <a className="searchPage_resultTitle" href={item.Link}><h2>{item.title}</h2></a>
                        <p className="searchPage_resultSnippet">{item.snippet}</p>
                    </div>

                 )
                )}

            </div>
        )}
    </div>
    )
};

export default SearchPage;
