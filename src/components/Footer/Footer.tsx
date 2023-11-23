import { FC } from "react";
import BottomNavigation from "@mui/material/BottomNavigation"
import Paper from "@mui/material/Paper"


const Footer: FC = () => {
    return <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation>Footer</BottomNavigation>
    </Paper>
}

export default Footer
