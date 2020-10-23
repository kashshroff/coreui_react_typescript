import React, {useEffect, useState} from 'react'
import { CInput, CInputGroup, CInputGroupPrepend, CInputGroupText } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import search_icon from '../assets/search_icon.svg'

const TheHeaderSearchBar = () => {

    const [width, setWidth] = useState(window.innerWidth);

    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    });

    
    if(width <= 767){
        return(
            <CIcon src={search_icon} className="mr_29" />
        )
    }
    return (
        <CInputGroup className="mr_29">
            <CInputGroupPrepend>
            <CInputGroupText><CIcon src={search_icon} /></CInputGroupText>
            </CInputGroupPrepend>
            <CInput id="input1-group2" name="input1-group2" placeholder="Search films and filmmakers" />
        </CInputGroup>
    )
}

export default TheHeaderSearchBar