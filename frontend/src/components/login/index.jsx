import styles from './styles.module.scss';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import logo from '../../images/logo1.png'
import axios from 'axios'; 
// const Login=()=> {
//     const[data,setData]=useState({
//         email:"",
//         password:""
//     });
const Login = () => {
    // setMsg(res.message);
    document.body.classList.add('blue')
    const navigate = useNavigate();
    const[data,setData]=useState({
               email:"",
              password:""
           });
    const submitHandler = () => {
        navigate("/home")
    }
    const[error,setError]=useState("");


    const handleChange=({currentTarget:input})=>{
        setData({...data,[input.name]:input.value});
        
    };

    const handleSubmit=async(email)=>{
        // e.preventDefault();
        try {
            const url="http://localhost:8080/api/auth";
            const {data:res}=await axios.post(url,data);
            console.log(res)
            localStorage.setItem("token",res.data);
            localStorage.setItem("loggedEmail",email);
            navigate("/home")
            // window.location='/';

        } catch (error) {
            if(error.response && error.response.status >=400 && error.response.status <=500)
            {
               setError(error.response.data.message);
            }

            
        }

    };
   



    return(
        <div className={styles.login_container}>
            <div className={styles.login_form_container}>
                <div className={styles.left}>
                <form className={styles.form_container}>
                     <h1>Login to your Account</h1>
                     <h2>Uni Search</h2>
                    
                        <input type="email"
                            placeholder='Email'
                            name='email'
                            onChange={handleChange}
                            value={data.email}
                            required
                            className={styles.input}

                        />
                        <input type="password"
                            placeholder='Password'
                            name='password'
                            onChange={handleChange}
                            value={data.password}
                            required
                            className={styles.input}

                        />
                        <Link to="/forgot-password" style={{ alignSelf: "flex-start" }}>
							<p style={{ padding: "0 15px" }}>Forgot Password ?</p>
						</Link>
                        {error && <div className={styles.error_msg}>{error}</div>}
                        <button onClick={() =>{
                            handleSubmit(data.email)
                        }} type="button" className={styles.green_btn}>
                            Sign In
                        </button>

                    </form> 
 
                </div>
                <div className={styles.right}>
                <h1>New Here?</h1> 
                 <Link to ="/signup" >
                    <button type='button' className={styles.white_btn}>
                        Sign Up
                    </button>
                 </Link>
                   
                </div>
            

            </div>
        </div>
    );
};

export default Login;