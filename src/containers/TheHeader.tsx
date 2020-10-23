import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import {
  CHeader,
  CToggler,
  CHeaderNav,
  CButton
} from '@coreui/react'

import {
  TheHeaderDropdown,
  TheHeaderDropdownNotif,
  TheHeaderSearchBar
} from './index'
import Logo from '../components/Logo';


const TheHeader = (props) => {

  const [width, setWidth] = useState(window.innerWidth)
  const [hamburger, setHamburger] = useState(true)
  let history = useHistory();

  const updateWidth = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  })

  const dispatch = useDispatch()
  const sidebarShow = useSelector((state: any) => state.sidebarShow)

  useEffect(() => {
    if(sidebarShow == "fullscreen"){
      setHamburger(false)
    }
    return () => {
      setHamburger(true)
    }
  }, [sidebarShow])

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch({ type: 'set', sidebarShow: val })
  }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({ type: 'set', sidebarShow: val })
  }

  return (
    <CHeader>

      {hamburger ?
        <>
          {/* MObile */}
          <CToggler
            inHeader
            className="ml-md-3 d-lg-none"
            onClick={toggleSidebarMobile}
          />

          {/* Desktop */}
          <CToggler
            inHeader
            className="ml-3 d-md-down-none"
            onClick={toggleSidebar}
          />
        </>
        : 
        <CButton color="primary" className="back_button" onClick={() => history.goBack()}>{"< Back"}</CButton>
        }

      {hamburger ?
      <Logo />
      : "" }

      <div className="mr-auto"></div>


      <CHeaderNav className="px-3">
        <TheHeaderSearchBar />
        {width >= 600 ? <div className="vertical-border"></div> : ''}
        <TheHeaderDropdownNotif />
        {width >= 600 ? <div className="vertical-border"></div> : ''}
        <TheHeaderDropdown />
      </CHeaderNav>


    </CHeader>
  )
}

export default TheHeader
