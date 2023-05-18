import { useEffect, useState } from "react";
const Filter = (props) => {

    const [sortBy, setSortBy] = useState("");
    const [universityName, setUniversityName] = useState("");
    const [ranking, setRanking] = useState("100000");
    const [locationName, setlocationName] = useState("");
    const [uniList, setUniList] = useState([]);
    const [majorsList, setMajorsList] = useState([]);
    const [majorName, setMajorName] = useState("");

    // Get list of all universities and majors from database
    useEffect(() => {
        fetch('http://localhost:8080/university/all')
        .then(res => res.json())
        .then(async (data) => {
            setUniList(data);
        });
        fetch('http://localhost:8080/major/all')
        .then(res => res.json())
        .then(async (data) => {
            setMajorsList(data);
        });
    },[])

    // Returns list of all the unique locatons from the university object
    const uniqueUniversityLocations = [...new Set(uniList.map(uniListObj => 
        uniListObj.location[0].name
        ))];

    // Returns list of all the unique major name from major object
    const uniqueMajors = [...new Set(majorsList.map(majorsListObj => 
        majorsListObj.name
    ))];

    // function handles change of sortBy value that has been selected using state
    const handleSortByChange = (event) => {
        setSortBy(event.target.value);
    };

    const handleSearchBoxChange = (event) =>{
        setUniversityName(event.target.value);
    }

    const handleRankingChange = (event) =>{
        setRanking(event.target.value);
    }

    const handleLocationChange = (event) => {
        setlocationName(event.target.value);
    }

    const handleCoursesOfferedChange = (event) => {
        setMajorName(event.target.value);
        console.log(majorName);
    }

    return (
        <div className="filterParent">
            
            <div className="filterItems">
                <form action="" className="formParent">
                    <div className="filterLabel">
                        Filters:
                    </div>
                    <select name="" id="" onChange={handleCoursesOfferedChange}>
                        <option value="">Courses Offered</option>
                        {uniqueMajors.map((uniqueMajor) => 
                            <option value={uniqueMajor}>{uniqueMajor}</option>
                        )}
                        {props.getCoursesOfferedChange(majorName)}
                    </select>
                    <select name="" id="" onChange={handleRankingChange}>
                        <option value="100000">Ranking</option>
                        <option value="50">below 50</option>
                        <option value="100">below 100</option>
                        <option value="150">below 150</option>
                        <option value="200">below 200</option>
                        <option value="250">below 250</option>
                        <option value="300">below 300</option>
                        <option value="350">below 350</option>
                        <option value="400">below 400</option>
                        <option value="450">below 450</option>
                        <option value="500">below 500</option>
                        {props.getRankingChange(ranking)}
                    </select>
                    <select name="" id="" onChange={handleLocationChange}>
                        <option value="">Location</option>
                        {uniqueUniversityLocations.map((uniqueUniversityLocation) => 
                            <option value={uniqueUniversityLocation}>{uniqueUniversityLocation}</option>
                        )}
                        {props.getLocationNameChange(locationName)}
                    </select>
                    <select name="" id="" onChange={handleSortByChange}>
                        <option value="">Sort By</option>
                        <option value="name">Name</option>
                        <option value="ranking">Ranking</option>
                        <option value="acceptanceRate">Acceptance Rate</option>
                        <option value="avgTuitionCost">Average Tuition Cost</option>
                        {/* return the sortBy value to Home Component */}
                        {props.getSortByChange(sortBy)}
                    </select>
                    <input type="text" className="searchBox" placeholder="Search" onChange={handleSearchBoxChange} />
                    {props.getUniversityNameChange(universityName)}
                </form>
            </div>
        </div>
    )
}

export default Filter;