import "./single.css"
import Header from "../../components/header/Header";

import Navigation from "../../components/navigation/Navigation";
import SinglePost from "../../components/singlepost/SinglePost";
export default function Single(){
    return(
    <>
        <Header/>
        <div className="home">
            <SinglePost/>
            <Navigation/>    
        </div>
    </>
        
    )
}

