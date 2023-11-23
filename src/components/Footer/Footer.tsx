import { FC } from "react";
import BottomNavigation from "@mui/material/BottomNavigation"
import Paper from "@mui/material/Paper"


const Footer: FC = () => {
    return <Paper sx={{ position: 'static', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation sx={{ backgroundColor: '#DAC9A6' }}>Footer</BottomNavigation>
    </Paper>
}

export default Footer
