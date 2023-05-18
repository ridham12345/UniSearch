import Menu from "../Menu/Menu";
import toggleBtn from '../../images/toggle.svg'
import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllMajors } from "../../redux/action";
const Course = () => {

    //adding background to the page
    document.body.classList.add('grey');

    //toggle majors
    let [showDe,setShowDesc] = useState("false");

    //set id while editting
    let [id,setId] = useState(0); 

    //toggling majors
    const handleToggle = (id) => {
        setShowDesc(!showDe);
        setId(id);
    };
    const dispatch = useDispatch();
    //API call to list majors
    const majors = useSelector(state => state.majors)
    useEffect(() => {
        dispatch(getAllMajors());

    },[])
    return (
        <>
            <Menu />
            <div className="courseParent">
                <div className="header">
                    Top Courses Preferred By Students
                </div>

                {/* Looping through the major list */}
                {majors.map((el) =>
                     <div className="body">
                     <div className="toggleHead" onClick={() => {handleToggle(el._id)}}>
                         <div className="course">
                             {el.name}
                         </div>
                         <div className="toggleBtn">
                             <img src={toggleBtn} alt="Open/Close Course" />
                         </div>
                     </div>
                     {
                        //show description on toggle
                        id === el?._id && showDe?
                        
                           
                            <div className="toggleBody">
                            <ul>{
                                el.degree.map((degree) =>
                                <>
                                <div className="degreeName">{degree.name}</div>
                                <div className="degreeDesc">{degree.description}</div>
                                </>
                                /* <li>Stevents Institute of Technology</li>
                                <li>University of Cincinnati</li>
                                <li>University of Illinois Chicago</li>
                                <li>University of Texas at Austin</li> */
                                )}

                                <ul>
                                    <li></li>
                                </ul>
                            </ul>
                            </div>
                            
                        
                        :null
                     }
                     
                 </div>
                )}
                
                
            </div>
            
        </>
    )
}
export default Course;