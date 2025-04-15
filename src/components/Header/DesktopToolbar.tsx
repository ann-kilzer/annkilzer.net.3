import { FC } from 'react';

import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import SideDrawer from '../SideDrawer/SideDrawer';
import StyledNavLink from './StyledNavLink';


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
        minHeight: 80,
    },
}))

const StyledLink = styled(Link)(() => ({
    color: 'white',
    textDecoration: 'none'
}))


const DesktopHeader: FC = () => {
    return <StyledToolbar aria-label="desktop-toolbar">
        <Stack direction='row' spacing={2} sx={{ alignItems: 'center' }}>
            <SideDrawer />
            <StyledNavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
                <Typography variant="h1">Ann Kilzer</Typography>
            </StyledNavLink>
            <StyledNavLink to="/software" >
                <Typography variant="overline">Software</Typography>
            </StyledNavLink>
            <StyledNavLink to="/art" >
                <Typography variant="overline">Art</Typography>
            </StyledNavLink>
            <StyledLink href='https://blog.annkilzer.net' target='_blank'>
                <Typography variant="overline">Writing</Typography>
            </StyledLink>
        </Stack>
    </StyledToolbar>
}

export default DesktopHeader
