import { FC } from 'react';
import AppBar from '@mui/material/AppBar'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
        minHeight: 80,
    },
}))

const StyledNavLink = styled(NavLink)(() => ({
    color: 'white',
    textDecoration: 'none'
}))

const Header: FC = () => {
    return <AppBar position="static" aria-label="header">
        <StyledToolbar>
            <Stack direction='row' spacing={2} sx={{ alignItems: 'center' }}>
                <StyledNavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
                    <Typography variant="h1">Ann Kilzer</Typography>
                </StyledNavLink>
                <StyledNavLink to="/software" >
                    <Typography variant="overline">Software</Typography>
                </StyledNavLink>
                <StyledNavLink to="/art" >
                    <Typography variant="overline">Art</Typography>
                </StyledNavLink>
                <StyledNavLink to="/writing" >
                    <Typography variant="overline">Writing</Typography>
                </StyledNavLink>
            </Stack>
        </StyledToolbar>
    </AppBar >
}

export default Header
