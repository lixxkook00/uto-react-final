import './App.scss';
import React, { useState, useEffect } from "react";

import Header from './Components/Header'
import HeaderMobile from './Components/HeaderMobile'
import MainLeftSide from './Components/MainLeftSide'
import MainMiddleSide from './Components/MainMiddleSide'
import MainRightSide from './Components/MainRightSide'
import LoadingScreen from './Components/LoadingScreen'


import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  // title list name
  const titleList = ["Cộng đồng doanh nghiệp UTO","Sàn công nghệ UTO","Sàn thương mại UTO","UTO Logistic","Các khoá học và đào tạo của UTO"]

  // select section on main middle side
  const [sectionIndex,setSectionIndex] = useState(2);

  // pathname
  // const [pathname,setPathname] = useState(window.location.pathname)

  const handleSelectSection = (index) => {
    setSectionIndex(index);
  }

  useEffect(() => {
    document.title = titleList[sectionIndex]
  },[sectionIndex])

  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  }

  useEffect(()=>{
    setTimeout(handleLoading, 1000);
  })

  return (
      !isLoading
      ? 
        (
          <>
            <Header 
              handleSelectSection={handleSelectSection}
              sectionIndex={sectionIndex}
            />
            <HeaderMobile />
            <div className="container-uto mt-10">
              <MainLeftSide/>
              <MainMiddleSide/>
              <MainRightSide/>
            </div>
          </>
        )
      :
      <LoadingScreen/>)
}

export default App;
