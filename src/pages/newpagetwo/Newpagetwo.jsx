import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import "./newpagetwo.css"
import Navigation from '../../components/navigation/Navigation'
import PostTwo from '../../components/posttwo/PostTwo'
function Newpage() {
  return (
    <>
        <Header/>
        <div className="newpage">
            <PostTwo/>
            <Navigation/>
        </div>
        <Footer/>
    </>
  )
}

export default Newpage
