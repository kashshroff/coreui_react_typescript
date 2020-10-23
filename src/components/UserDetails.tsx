import { CCol, CRow } from '@coreui/react'
import React from 'react'

export default function UserDetails() {
    return (
        <>
            <CRow>
                <CCol sm="6" md="6" lg="6" className="half_width">
                    <div className="user_title">
                        USER
                    </div>
                    <div className="user_subtitle">
                        M S N Karthik
                    </div>
                </CCol>
                <CCol sm="6" md="6" lg="6" className="half_width">
                    <div className="user_title">
                        TIMESTAMP
                    </div>
                    <div className="user_subtitle">
                        24 Jun,  23:12:00
                    </div>
                </CCol>
            </CRow>
            <CRow className="mt_12">
                <CCol sm="6" md="6" lg="6" className="half_width">
                    <div className="user_title">
                        LOCATION
                    </div>
                    <div className="user_subtitle">
                        Hyderabad, India
                    </div>
                </CCol>
                <CCol sm="6" md="6" lg="6" className="half_width">
                    <div className="user_title">
                        ROLE
                    </div>
                    <div className="user_subtitle">
                        Writer, Director
                    </div>
                </CCol>
            </CRow>
        </>
    )
}
