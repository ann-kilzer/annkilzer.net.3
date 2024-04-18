import { FC } from 'react';

import Chip from '@mui/material/Chip'
import {
    purple,
    blue,
    lightBlue,
    lightGreen,
    green,
    pink,
    indigo,
    teal,
    lime,
    amber
} from '@mui/material/colors';

interface TagChipsProps {
    tags: string[]
}

const colors = [purple, blue, lightGreen, green, pink, indigo, lime, amber, teal, lightBlue]

function mapColor(tag: string) {
    let hash = 0
    for (let i = 0; i < tag.length; i++) {
        hash += tag.charCodeAt(i)
    }
    const index = hash % colors.length
    return colors[index][200]
}

const TagChips: FC<TagChipsProps> = ({ tags }) => {
    return tags.map((tag: string) => {
        return <Chip
            label={tag}
            key={tag}
            sx={{ mr: 1, backgroundColor: mapColor(tag) }}
        />
    })
}

export default TagChips
