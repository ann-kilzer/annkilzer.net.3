import { FC } from 'react';
import AppBar from '@mui/material/AppBar'
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
        minHeight: 128,
    },
}));

const Header: FC = () => {
    return <AppBar position="static">
        <StyledToolbar>
            <NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
                <Typography variant="h1">Ann Kilzer</Typography>
            </NavLink>
        </StyledToolbar>
    </AppBar >
}

export default Header
