import UniHeader from "../UniHeader/UniHeader";
import UniMenu from "../UniMenu/UniMenu";
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUniById } from "../../redux/action";
import { useParams } from "react-router-dom";
import Menu from "../Menu/Menu";
const UniAbout = () => {

    //add background color to screen
    document.body.classList.add('grey');
    const dispatch = useDispatch();

    //get University based on ID
    const uniDetsById = useSelector(state => state.uniWithId)
    const { uniId } = useParams();
    useEffect(() => {
        dispatch(getUniById(uniId))
    },[])
    return (
        <>
        <Menu />
        <div className="UniContainer">
            <UniHeader />
            <div className="bodyContainer">
                <UniMenu />
                <div className="aboutContainer">
                    <h2>ABOUT</h2>
                    <h5>
                        {/* Get about Uni from API */}
                        {uniDetsById.about}
                    </h5>
                </div>
            </div>
        </div>
        </>
        
    )
} 

export default UniAbout;