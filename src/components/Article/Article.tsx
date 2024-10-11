import { FC } from 'react';
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import TagChips from '../TagChips/TagChips';


interface ArticleProps {
    title: string
    subtitle: string
    body: string
    date: Date
    tags: string[]
}

const Article: FC<ArticleProps> = ({
    title,
    subtitle,
    body,
    date,
    tags,
}) => {
    return <Box sx={{ my: 2 }}>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="subtitle1">{subtitle}</Typography>
        <Divider sx={{ mb: 1 }} />
        <Typography variant="body1">{body}</Typography>

        <Divider sx={{ my: 1 }} />
        <Stack direction="row" spacing={2}>
            <Typography variant="overline">Posted: {date.toLocaleDateString()}</Typography>
            <TagChips tags={tags} />
        </Stack>
        <Divider sx={{ my: 1 }} />
    </Box>
}

export default Article
