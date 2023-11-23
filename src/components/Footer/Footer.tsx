import { FC } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import Paper from '@mui/material/Paper'
import { Github, Instagram, Linkedin, Palette } from 'iconoir-react';


const Footer: FC = () => {
    return <Paper sx={{ position: 'static', bottom: 0, left: 0, right: 0 }} elevation={0}>
        <BottomNavigation sx={{ backgroundColor: '#DAC9A6' }}>
            <BottomNavigationAction label="Personal Instagram" icon={<Instagram />} href="https://www.instagram.com/cat_bacon/" target="_blank" />
            <BottomNavigationAction label="Art Instagram" icon={<Palette />} href="https://www.instagram.com/ann.kilzer.art/" target="_blank" />
            <BottomNavigationAction label="LinkedIn" icon={<Linkedin />} href="https://www.linkedin.com/in/annkilzer/" target="_blank" />
            <BottomNavigationAction label="GitHub" icon={<Github />} href="https://github.com/ann-kilzer" target="_blank" />
        </BottomNavigation>
    </Paper>
}

export default Footer
