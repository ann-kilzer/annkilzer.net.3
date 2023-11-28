import { FC } from 'react'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import StyledNavLink from './StyledNavLink'
import SideDrawer from '../SideDrawer/SideDrawer'

interface MobileHeaderProps {
}

const MobileToolbar: FC<MobileHeaderProps> = () => {
    return <Toolbar>
        <SideDrawer />
        <StyledNavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <Typography variant="h2" component="h1">Ann Kilzer</Typography>
        </StyledNavLink>
    </Toolbar>
}

export default MobileToolbar
