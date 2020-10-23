import { CCard, CCardBody, CCardHeader, CCol, CNav, CNavItem, CNavLink, CRow, CTabContent, CTabPane, CTabs } from '@coreui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BadgeCategory from '../../components/common/BadgeCategory'
import BadgeGenre from '../../components/common/BadgeGenre'
import Video from '../../components/Video'
import Review from '../../components/review/Review'
import Map from '../../components/Map'
import UserDetails from '../../components/UserDetails'

export default function About() {

    const dispatch = useDispatch()
    const sidebarShow = useSelector((state: any) => state.sidebarShow)

    useEffect(() => {
        dispatch({ type: 'set', sidebarShow: 'fullscreen' })
        return () => {
            dispatch({ type: 'set', sidebarShow: 'responsive' })
        }
    }, [])

    return (
        <div>

            <CRow>
                <CCol sm="12" md="12" lg="12" xl="9" className="video_col">
                    <Video />
                </CCol>
                <CCol sm="12" md="12" lg="12" xl="3" className="review_col">
                    <div className="about_title">The Countdown<span className="about_sub_title"> by M S N Karthik</span></div>
                    <div className="mt_12">
                        <span className="category"><BadgeCategory status="short" /></span>
                        <span className="category ml_5"><BadgeGenre status="sci-fi" /></span>
                    </div>
                    <div className="description mt_12">
                        <p>
                            "The Countdown" can best be described as a tale of hope or the story of survival of humanity. It's an experimental film in the Sci-Fi Thriller genre, in which an astronaut stuck on an unknown planet struggles to get back to his ship only to find that things are actually worse than expected. The film also revolves around the subject of the future of life on the planet.
                        </p>
                    </div>

                    <div className="tab_bar">
                        <CTabs>
                            <CNav variant="tabs">
                                <CNavItem>
                                    <CNavLink>
                                        FILM REVIEWS
                                    </CNavLink>
                                </CNavItem>
                                <CNavItem>
                                    <CNavLink>
                                        FILMMAKER INFO
                                    </CNavLink>
                                </CNavItem>
                            </CNav>

                            <CTabContent className="about">
                                <CTabPane>
                                    <Review />
                                </CTabPane>
                                <CTabPane className="maps_pane">
                                    <CCard>
                                        <CCardHeader>
                                            <Map />
                                        </CCardHeader>
                                        <CCardBody>
                                            <UserDetails />
                                        </CCardBody>
                                    </CCard>
                                    <CCard>
                                        <CCardBody>
                                            <div className="user_title">
                                                FILMMAKER BIOGRAPHY
                                                </div>
                                            <div className="user_subtitle">
                                                For many, films are a hobby. For some, they are
                                                a passion. But Karthik is a sort of a person,
                                                who always lived his life in 24 frames. Films
                                                were what shaped him since childhood. He
                                                says that he watched Rob Williams in awe, as
                                                he stood up on his desk to inspire his students
                                                to seize the day, in Dead Poets Society.
                                                </div>
                                        </CCardBody>
                                    </CCard>
                                </CTabPane>
                            </CTabContent>
                        </CTabs>
                    </div>
                </CCol>
            </CRow>


        </div>
    )
}
