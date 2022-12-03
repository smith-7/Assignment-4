import React from 'react'
import Header from '../../components/header/Header'
import SinglePost from '../../components/singlepost/SinglePost'
import Footer from '../../components/footer/Footer'
import "./newpage.css"
import Navigation from '../../components/navigation/Navigation'
function Newpage() {
  return (
    <>
      <Header/>
      <div className='newpage'>
        <SinglePost/>
        <Navigation/>
      </div>
      <Footer/>
    </>
  )
}

export default Newpage
