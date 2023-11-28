import { FC, useState } from 'react'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import IconButton from '@mui/material/IconButton'
import { Cellar } from 'iconoir-react'
import DrawerContents from './DrawerContents'


const SideDrawer: FC = () => {
    const [open, setOpen] = useState(false)

    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setOpen(open)
            };

    return <>
        <IconButton sx={{ color: 'white' }} onClick={() => { setOpen(true) }}>
            <Cellar />
        </IconButton>
        <SwipeableDrawer
            open={open}
            onOpen={toggleDrawer(true)}
            onClose={toggleDrawer(false)}
        >
            <DrawerContents />
        </SwipeableDrawer>
    </>
}

export default SideDrawer
