import { FC } from 'react'
import Typography from '@mui/material/Typography';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

interface EducationProps {
    university: string
    details: string[]
}

const Education: FC<EducationProps> = ({ university, details }) => {
    return <>
        <Typography variant='h6' component='h4' my={0} py={0}>{university}</Typography>

        <List dense sx={{ marginY: 0, paddingY: 0 }} >
            {
                details.map((detail) => {
                    return <ListItem key={detail} sx={{ marginY: 0, paddingY: 0 }}>
                        <Typography variant='overline'>
                            {detail}
                        </Typography>
                    </ListItem>
                })
            }
        </List >
    </>
}

export default Education
