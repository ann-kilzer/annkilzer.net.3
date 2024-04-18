import { FC } from 'react';
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'


interface Article {
    title: string
    subtitle: string
    body: string
    date: Date
    tags: string[]
}

const Article: FC<Article> = ({
    title,
    subtitle,
    body,
    date,
    tags,
}) => {
    console.log(date.toLocaleString())
    return <Box sx={{ my: 2 }}>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="subtitle1">{subtitle}</Typography>
        <Divider sx={{ mb: 1 }} />
        <Typography variant="body1">{body}</Typography>

        <Divider sx={{ my: 1 }} />
        <Stack direction="row" spacing={2}>
            <Typography variant="overline">Posted: {date.toLocaleDateString()}</Typography>
            {tags.map((tag: string) => {
                return <Chip
                    label={tag}
                    key={tag}
                    sx={{ mr: 1 }}
                />
            })}
        </Stack>
        <Divider sx={{ my: 1 }} />
    </Box>
}

export default Article
