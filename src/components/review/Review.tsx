import { CCard, CCardBody, CCardText, CCol, CRow } from '@coreui/react'
import React from 'react'
import { reviews } from './reviews'

interface Review {
    id: number
    name: string
    image: string
    review: string
}

export default function Review() {
    return (
        <>
            {reviews.map((review: Review) => {
                return (
                    <CCard className="mb_9">
                        <CCardBody>
                            <CRow>
                                <CCol sm="2" md="2" lg="2">
                                    <img src={review.image} alt="User pic 1" />
                                </CCol>
                                <CCol sm="10" md="10" lg="10">
                                    <CCardText className="review_title">{review.name}a</CCardText>
                                    <CCardText className="review_explain">
                                        {review.review}
                                    </CCardText>
                                </CCol>
                            </CRow>
                        </CCardBody>
                    </CCard>
                )
            })}
        </>
    )
}
