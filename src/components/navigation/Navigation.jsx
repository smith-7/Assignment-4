import "./navigation.css"
import React, {useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
const url='https://newsapi.org/v2/everything?q=tesla&from=2022-11-02&sortBy=publishedAt&apiKey=e3f19cde6cf3429f8379c2451be16a48';
export default function Navigation() {
  
  const [articles, setProduct]=React.useState(null);
  const [accepted,setAccepted]=useState(false);
  
  React.useEffect(()=>{
    const i=setInterval(()=>{
      axios.get(url)
      .then((response)=>{
        setProduct(response.data.articles);
        console.log(JSON.stringify(response.data.articles));
    })
    .catch(error=>console.log(`Error: ${error}`));
    setAccepted(!accepted);
    },600);
    return ()=>clearInterval(i);
  },[accepted]);

if(!articles) return null;

  return (
    <div class="nav">
      <Link to="/" >
				<h4 class="nav-heading1">HOME</h4>
			</Link>
      <br/>
      <h3 className="nav-heading2">Tesla News</h3>
      <hr/>
      <div className="weatherApi">
       {/* Fetching only 5 data at a time  */}
      {articles.filter((ele,index) => index < 5).map((item) => (
        <>
          <img src={item.urlToImage} alt="articleImage" width="120"/>
          <h4><strong>{item.title}</strong></h4>
          <br />
          <p>Written By:  {item.author}</p>
          <br />
          <p>{item.description}</p>
          <br />
          <p>Out On: {item.publishedAt}</p>
          <br />
          <br />                                 
        </>
      ))}
      </div>
    </div>
  );
    /*<div className="navigation">
      <div className="navigationItemOne">
        <a href="/">HOME PAGE</a>
      </div>
    </div>
  )*/
}
  


//export default Navigation
