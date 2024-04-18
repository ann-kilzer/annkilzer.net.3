import { FC } from 'react';

import Chip from '@mui/material/Chip'

interface TagChipsProps {
    tags: string[]
}

const TagChips: FC<TagChipsProps> = ({ tags }) => {
    return tags.map((tag: string) => {
        return <Chip
            label={tag}
            key={tag}
            sx={{ mr: 1 }}
        />
    })
}

export default TagChips
