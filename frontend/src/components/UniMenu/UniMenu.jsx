import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
const UniMenu = () => {
    const uniDetsById = useSelector(state => state.uniWithId)
    return (
        //menu to access university options. Not common menu
        <div className="uniMenuParent">
            <ul>
                <Link to={`/about_uni/${uniDetsById._id}`}>
                    <li className="">
                        About
                    </li>
                </Link>
                <Link to="/university_faq">
                    <li>
                        FAQs
                    </li>
                </Link>

                <Link to="/feedback">
                <li>
                    Comments
                </li>
                </Link>
            </ul>
        </div>
    )
} 

export default UniMenu;