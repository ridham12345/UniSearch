import neuLogo from '../../images/northeastern univ logo.png';
import { useDispatch, useSelector } from 'react-redux';
const UniHeader = (props) => {
    const uniDetsById = useSelector(state => state.uniWithId)
    const test = uniDetsById?.location;
    return (
        //header section to all about university screens
        <div className="headerParent">
            <div className="uniImg">
                <img src={uniDetsById.logoUrl} alt="University Logo" />
            </div>
            {/* display university details */}
            <div className="uniDetails">
                <div className="uniName">
                    {uniDetsById.name}
                </div>
                
                <div className="uniDesc">
                    <div>
                        <span>Global Ranking   {uniDetsById.ranking}</span>
                    </div>
                    <div>
                        <span>Acceptance Rate   {uniDetsById.acceptanceRate}</span>
                    </div>
                </div>
            </div>
        </div>
    ) 
} 

export default UniHeader;