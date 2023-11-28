import { FC } from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'

interface DrawerContentsProps {
}

const DrawerContents: FC<DrawerContentsProps> = () => {
    return <Box sx={{ width: 250 }}>
        <List>
            Todo
        </List>
    </Box>
}

export default DrawerContents
