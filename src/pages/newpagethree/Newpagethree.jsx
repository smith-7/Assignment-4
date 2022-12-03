import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import "./newpagethree.css"
import Navigation from '../../components/navigation/Navigation'
import PostThree from '../../components/postthree/PostThree'
function Newpage() {
  return (
    <>
        <Header/>
        <div className="newpage">
            <PostThree/>
            <Navigation/>
        </div>
        <Footer/>
    </>
  )
}

export default Newpage
