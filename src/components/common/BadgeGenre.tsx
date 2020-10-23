import { CBadge } from '@coreui/react'
import React from 'react'

interface GenreBadge {
    status: string
}

export default function BadgeGenre(prop: GenreBadge) {

    const getGenreBadge = (status: string) => {
        switch (status) {
            case 'sci-fi': return 'scifi'
            case 'drama': return 'drama'
            case 'adventure': return 'adv'
            case 'event': return 'event'
            case 'crime': return 'crime'
            case 'biopic': return 'biopic'
            case 'sports': return 'sports'
            default: return 'scifi'
        }
    }

    return (
        <CBadge color={getGenreBadge(prop.status)}>
            {prop.status}
        </CBadge>
    )
}
