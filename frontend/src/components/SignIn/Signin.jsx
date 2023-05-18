import placeholderImg from '../../images/login.png'
import logo from '../../images/logo1.png'
import { useNavigate } from "react-router-dom";

const Signin = () => {
    document.body.classList.add('blue')
    const navigate = useNavigate();
    const submitHandler = () => {
        navigate("/home")
    }
    return(
        <div>
            <div className="logo_section">
                <img src={logo} className="logo_img"/>
            </div>
            <div className="sign_in_section">
                <div className="sign_in">
                    <h3>Welcome Back!</h3>
                    <form>
                        <div>
                            <input type="text" className="sign_box" placeholder='Email'/>
                        </div>
                        <div>
                            <input type="text" className="sign_box" placeholder='Password'/>
                        </div>
                        <div>
                        <input type="submit" className="sign_btn" value="Sign In" onClick={submitHandler}/>
                        </div>
                    </form>
                </div>
                <div className="placeholder_img">
                    <img src={placeholderImg} />
                </div>
            </div>
        </div>
    )
}

export default Signin;