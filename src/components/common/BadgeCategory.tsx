import { CBadge } from '@coreui/react'
import React from 'react'

interface CategoryBadge {
    status: string
}

export default function BadgeCategory(prop: CategoryBadge) {

    const getCatgoryBadge = (status: string) => {
        switch (status) {
            case 'docu': return 'docu'
            case 'short': return 'short'
            case 'travel': return 'travel'
            case 'advert': return 'advert'
            default: return 'docu'
        }
    }

    return (
        <CBadge color={getCatgoryBadge(prop.status)}>
            {prop.status}
        </CBadge>
    )
}
