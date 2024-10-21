import { useState,useContext } from "react"
import { Link } from "react-router-dom";
import "./Navbar.scss"
import { AuthContext } from "../../context/AuthContext";
export default function Navbar(){
    const [open,setOpen]=useState(false);
    const {currentUser}=useContext(AuthContext);
    const user = true;
    return(
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="" />
                    <span>Real Estate</span>
                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
            </div>
            <div className="right">
                { currentUser ? (
                    <div className="user">
                
                        <img src={currentUser.avatar|| "/noavatar.png"} />
                        <span>{currentUser.username}</span>
                        <Link to="/profile" className="profile">
                            <div className="notification">3</div>
                            <span>Profile</span>
                        </Link>
                    </div>
                    ) : (
                    <>
                        <a href="/login" >SignIn</a>
                        <a href="/register" className="register">
                        SignUp
                        </a>
                    </>
                )}

                <div className="menuIcon">
                    <img src="menu.png" alt="" onClick={()=>setOpen(!open)} />
                </div>
                <div className={open?"menu active":"menu"}>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
                <a href="/">Sign In</a>
                <a href="/">Sign Up</a>
                </div>
            </div>
        </nav>
    )

}