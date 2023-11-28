import { FC } from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';


const Header: FC = () => {
    const theme = useTheme()
    if (useMediaQuery(theme.breakpoints.down('sm'))) {
        return <MobileHeader />
    }
    return <DesktopHeader />
}

export default Header
