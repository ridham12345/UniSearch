import UniHeader from "../UniHeader/UniHeader";
import UniMenu from "../UniMenu/UniMenu";
import editIcon from '../../images/edit.svg';
import deleteIcon from '../../images/delete.svg';
import Menu from "../Menu/Menu";
import { useDispatch, useSelector } from 'react-redux';
import { getAllComments,addComment,updateComment,deleteComment } from "../../redux/action";
import { useEffect,useState } from "react";
import sendImg from '../../images/send_comment.svg'
const UniComments = () =>{
    document.body.classList.add('grey');
    const dispatch = useDispatch();
    const comments = useSelector(state => {
        return state.commentList});
    const uniDetsById = useSelector(state => state.uniWithId)
    console.log("uniId",uniDetsById._id)
    useEffect(() => {
        dispatch(getAllComments(uniDetsById._id))
    },[])

    let [comment, setComment] = useState('');
    let [isEdit, setIsEdit] = useState(0);
    let [commentId, setCommentID] = useState(0);
    const handleChange = event => {
        setComment(event.target.value);
    };
    const setText = (id,comm,uniId) => {
        console.log("inga vara kudathu")
        setIsEdit(1);
        setComment(comm)
        setCommentID(id)
    }
    //Submit add form function
    const onFormSubmit = (event) => {
        const registeredEmail = localStorage.getItem('loggedEmail');
        //prevent the screen from loading
        event.preventDefault();
        if(!isEdit == 1){
            dispatch(addComment(uniDetsById._id,comment,registeredEmail));
        }else{
            dispatch(updateComment(uniDetsById._id,commentId,comment,registeredEmail));
        }
        //making API calls to add the comment
        setIsEdit(0);
        setComment('')
    }

    return (
        <>
            <Menu />
            <div className="UniContainer">
                <UniHeader />
                <div className="bodyContainer">
                    <UniMenu />
                    <div className="commentContainer">
                        <h2>COMMENTS</h2>
                        <div className="body">
                            {
                                comments.map((list) => (
                                    // check if commented user is logged in user
                                    list.userName == localStorage.getItem('loggedEmail') ? 
                                    <div className="commentEl elRight">
                                        <div className="userName">
                                            {list.userName}
                                        </div>
                                        <div className="commentBubble">
                                            <div className="currUser">
                                                <div>{list.comment}</div>
                                                <div>
                                                    {/* show edit and delete for logged in user */}
                                                    <img src={editIcon} alt="Edit Icon" height="20" onClick={() => {setText(list?._id,list?.comment)}} />
                                                    <img src={deleteIcon} alt="Delete Icon" height="20" onClick={() => dispatch(deleteComment(list?._id))} />
                                                </div>
                                            </div>
                                            <div className="time">{list.updatedAt}</div>
                                        </div>
                                    </div> :
                                    // comment bubble for other users
                                    <div className="commentEl elLeft">
                                        <div className="userName">
                                                {list.userName}
                                        </div>
                                        <div className="commentBubble">
                                            {list.comment}
                                            <div className="time">{list.updatedAt}</div>
                                        </div>
                                    </div>
                                ))
                            }
                            
                            
                            
                            
                        </div>
                        <div className="addCommentSection">
                            {/* comment form */}
                            <form action="" onSubmit={onFormSubmit}>
                                <input type="text" name="comment" id=" " placeholder="Enter your comments" onChange={handleChange} value={comment}/>
                                    {/* send comment button */}
                                    <button type="submit" className="submitComment" >
                                        <img src={sendImg} alt="sendImg" ></img>
                                    </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default UniComments;