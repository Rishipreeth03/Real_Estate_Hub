// @flow 
import "./HomePage.scss";
import SearchBar from "../../components/searchbar/SearchBar"; 
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export default function HomePage(){
    const {currentUser}=useContext(AuthContext);
    console.log(currentUser);
    return (
       <div className="homePage">
        <div className="textContainer">
            <div className="wrapper">
            <h1>Find Real Estate & Get Your Dream Place</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt vitae labore atque nesciunt, explicabo in eos at expedita id cum non similique quos pariatur ex repellendus, quam, aliquam quia eligendi?</p>
            <SearchBar/>
            <div className="boxes">
                <div className="box">
                    <h1>16+</h1>
                    <h2>Years of Experience</h2>
                </div>
                <div className="box">
                    <h1>200</h1>
                    <h2>Award Gained</h2>
                </div>
                <div className="box">
                    <h1>1200+</h1>
                    <h2>Property Ready</h2>
                </div>
            </div>
            </div>
        </div>
        <div className="imgContainer">
            <img src="./bg.png" alt="" />
        </div>
       </div>
    );
}