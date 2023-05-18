import Menu from "../Menu/Menu";
import Filter from "../Filters/Filter";
import NeuLogo from '../../images/northeastern univ logo.png';
import { getAllUnis } from "../../redux/action/index";
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import React from "react";
import noDataFound from '../../images/no_data_found.gif'
const Home = () => {
    document.body.classList.add('grey');

    const [universityName, setUniversityName] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [ranking, setRanking] = useState("100000");
    const [locationName, setlocationName] = useState("");
    const [majorName, setMajorName] = useState("");

    const getUniversityNameChange = (universityName) => {
        setUniversityName(universityName);
    }

    const getSortByChange = (sortBy) =>{
        // get the sortBy value from Filters component and handle the change using state
        setSortBy(sortBy)
    }

    const getRankingChange = (ranking) => {
        setRanking(ranking);
    }

    const getLocationNameChange = (locationName) => {
        setlocationName(locationName);
    }

    const getCoursesOfferedChange = (majorName) => {
        setMajorName(majorName);
    }

    const dispatch = useDispatch();
    
    let uniList = useSelector(state => state.uniList)
    useEffect(
        () => {
            dispatch(getAllUnis(universityName, sortBy, ranking, locationName, majorName))
        },
        // trigger useEffect when state of sortBy changes
        [sortBy, universityName, ranking, locationName, majorName]
    )
    return (
        <>
        <Menu />

        {/* calling getSortByChange from Filters component which returns sortBy value which has been selected */}
        <Filter getUniversityNameChange={getUniversityNameChange} getSortByChange={getSortByChange} getRankingChange={getRankingChange} getLocationNameChange={getLocationNameChange} getCoursesOfferedChange={getCoursesOfferedChange}/>
        <div className="exploreParent">
            <div className="row cardParent">
                {
                    
                    uniList[0] != null ?
                    uniList.map((uniList) => 
                    (
                         <div className="col-4">
                         <div className="universityEl">
                             <div className="col-12 uniLogo">
                                 <img src={uniList?.logoUrl} alt="University Logo" />
                             </div>
     
                             <div className="col-12 uniName">
                                 <Link to={`/about_uni/${uniList?._id}`}><span>{uniList?.name}</span> </Link>
                             </div>
                             <div className="col-12 uniLocation">
                                 {uniList?.location[0]?.name}
                             </div>
                             <div className="row">
                                 <div className="col-6 colDets">
                                     <div className="descText">Avg Tuition Fee</div>
                                     <div className="descValue">{uniList?.avgTuitionCost} $</div>
                                 </div>
                                 <div className="col-6 colDets">
                                     <div className="descText">Acceptance Rate</div>
                                     <div className="descValue">{uniList?.acceptanceRate} </div>
                                 </div>
                             </div>
                             <div className="col-12 wishListSection">
                                 <button>Save to Wishlist</button>
                             </div>
                         </div>
                        </div>
                     )
                ) : <div className="noData"><img src={noDataFound}></img></div>
                } 
            </div>
        </div>
        </>
    )
}
export default Home;