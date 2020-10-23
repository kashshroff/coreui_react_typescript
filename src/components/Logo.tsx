import CIcon from '@coreui/icons-react'
import { CHeaderBrand } from '@coreui/react'
import React from 'react'
import logo_inverted from '../assets/logo_inverted.svg'

export default function Logo() {
    return (
        <CHeaderBrand className="d-lg-none" to="/">
            <CIcon src={logo_inverted} title="Filemtwin logo" role="img" />
        </CHeaderBrand>
    )
}
