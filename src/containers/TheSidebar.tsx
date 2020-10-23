import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

import logo from '../assets/logo.svg'
import layout_dashboard from '../assets/layout_dashboard.svg'
import films from '../assets/films.svg'
import filmmakers from '../assets/filmmakers.svg'
import settings from '../assets/settings.svg'
import team from '../assets/team.svg'
import breifcase from '../assets/briefcase.svg'
import target from '../assets/target.svg'
import pricing from '../assets/pricing.svg'
import contact from '../assets/contact.svg'
import content_paper_edit from '../assets/paper_edit.svg'
import chat from '../assets/chat.svg'
import { NavLink } from "react-router-dom";
import close from '../assets/close.svg'


const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector((state: any) => state.sidebarShow)
  const sidebarShow = useSelector((state: any) => state.sidebarShow)

  console.log("From sidebar", sidebarShow)


  const checkMobileSidebar = () => {
    if(sidebarShow == true){
      dispatch({ type: 'set', sidebarShow: 'responsive' })
    }
  }

  return (
    <CSidebar
      show={show}
      onShowChange={(val: any) => dispatch({type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none pos_rel" to="/">
        <CIcon
          className="c-sidebar-brand-full"
          src={logo}
          height={27}
        />
        <CIcon 
          className="sidebar_close"
          src={close}
          onClick={() => checkMobileSidebar()}
        />
      </CSidebarBrand>
      <CSidebarNav>

        <div className="sub_heading mt_60 sidenav_ml_30 mb_15">CONTENT</div>

        <li className="sidenav_link sidenav_margin">
          <NavLink to="/dashboard" onClick={() => checkMobileSidebar()} activeClassName="active_nav_link" exact={true}>
            <CIcon src={layout_dashboard} />
            <span className="sidenav_text sidenav_ml_15">Dashboard</span>
          </NavLink>
        </li>

        <li className="sidenav_link sidenav_margin">
          <NavLink to="/film-submission" onClick={() => checkMobileSidebar()} activeClassName="active_nav_link" exact={true}>
            <CIcon src={films} />
            <span className="sidenav_text sidenav_ml_15">Film Submission</span>
          </NavLink>
        </li>

        <li className="sidenav_link sidenav_margin">
          <NavLink to="/filmmakers">
            <CIcon src={filmmakers} />
            <span className="sidenav_text sidenav_ml_15">Film Makers</span><span className="badge-danger sidenav_badge">6</span>
          </NavLink>
        </li>

        <div className="sub_heading mt_60 sidenav_ml_30 mb_15">SETTINGS</div>

        <li className="sidenav_link sidenav_margin">
          <NavLink to="/settings">
            <CIcon src={settings} />
            <span className="sidenav_text sidenav_ml_15">Project Settings</span>
          </NavLink>
        </li>

        <li className="sidenav_link sidenav_margin">
          <NavLink to="/team">
            <CIcon src={team} />
            <span className="sidenav_text sidenav_ml_15">Team Management</span>
          </NavLink>
        </li>

        <li className="sidenav_link sidenav_margin">
          <NavLink to="/breifcase">
            <CIcon src={breifcase} />
            <span className="sidenav_text sidenav_ml_15">Integrations</span>
          </NavLink>
        </li>

        <li className="sidenav_link sidenav_margin">
          <NavLink to="/target">
            <CIcon src={target} />
            <span className="sidenav_text sidenav_ml_15">Privacy Settings</span>
          </NavLink>
        </li>

        <li className="sidenav_link sidenav_margin">
          <NavLink to="/content_paper_edit">
            <CIcon src={content_paper_edit} />
            <span className="sidenav_text sidenav_ml_15">Submission Settings</span>
          </NavLink>
        </li>

        <li className="sidenav_link sidenav_margin">
          <NavLink to="/chat">
            <CIcon src={chat} />
            <span className="sidenav_text sidenav_ml_15">Alerts & Notifications</span>
          </NavLink>
        </li>

        <li className="sidenav_link sidenav_margin">
          <NavLink to="/pricing">
            <CIcon src={pricing} />
            <span className="sidenav_text sidenav_ml_15">Pricing Plans</span>
          </NavLink>
        </li>

        <li className="sidenav_link sidenav_margin">
          <NavLink to="/contact">
            <CIcon src={contact} />
            <span className="sidenav_text sidenav_ml_15">Help & Feedback</span>
          </NavLink>
        </li>

      </CSidebarNav>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
