import Menu from "../Menu/Menu";
import rank from "../../images/rank.png";
import find from "../../images/find.png";
import alumni from "../../images/alumni.png";
import course from "../../images/course.png";
const AboutUniSearch = () => {
    return (
        <>
        <Menu />
        <div className="aboutPrContainer">
            <div className="aboutPrParent">
                <h3>UniSearch</h3>
                <h4>Looking to study abroad? Find everything about your dream university, all in one place.</h4>
                
                <div className="aboutPrCardParent row" >
                    {/* list website's key features */}
                    <div className="prCard col-3">
                        <div className="prItem">
                            <img src={rank} alt="" />
                            <h4>Find your Dream University</h4>
                            <p>Location, Tuition Fee, Ranking, Acceptance Rate of the universitites you want to go to and compare them.</p>
                        </div>
                        
                    </div>
                    <div className="prCard col-3">
                        <div className="prItem">
                            <img src={find} alt="" />
                            <h4>Ask Questions</h4>
                            <p>Learn answers to frequently asked questions that new students could have</p>
                        </div>
                        
                    </div>
                    <div className="prCard col-3">
                        <div className="prItem">
                            <img src={alumni} alt="" />
                            <h4>Get Feedback</h4>
                            <p>Get feedback and comments from people who went to the University to ensure you make the right choice.</p>
                        </div>
                        
                    </div>
                    <div className="prCard col-3">
                        <div className="prItem">
                            <img src={course} alt="" />
                            <h4>Majors</h4>
                            <p>Find the most popular courses at the university and apply to the best.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
} 

export default AboutUniSearch;