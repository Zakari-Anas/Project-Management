﻿import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import { Link, useLocation } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import BorderColorIcon from '@mui/icons-material/BorderColor';
// import { useState } from 'react';
// const drawerWidth = 240;

function NavBar(props) {

    const { drawerWidth, content } = props
    const location = useLocation()
    const path = location.pathname

    const [open, setOpen] = React.useState(false);

    const changeOpenStatus = () => {
        setOpen(!open)
    }

    const myDrawer = (
        <div>
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>

                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/" selected={"/" === path}>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Home"} />
                        </ListItemButton>
                    </ListItem>


                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/create" selected={"/create" === path}>
                            <ListItemIcon>
                                <BorderColorIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Add a Project"} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/about" selected={"/about" === path}>
                            <ListItemIcon>
                                <InfoIcon />
                            </ListItemIcon>
                            <ListItemText primary={"About"} />
                        </ListItemButton>
                    </ListItem>



                </List>

            </Box>

        </div>
    )




    return (

        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    {/* sx={{ display: { xs: "block", sm: "none" } }} */}
                    <IconButton onClick={changeOpenStatus}>
                        <MenuIcon
                        />
                    </IconButton>

                    <Typography variant="h6" noWrap component="div" >
                        Project Management
                    </Typography>
                </Toolbar>
            </AppBar>



            {/* <Drawer
                variant="permanent"
                sx={{
                    display: { xs: "none", sm: "block" },
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >

                {myDrawer}

            </Drawer> */}

            <Drawer
                variant="temporary"
                open={open}
                onClose={changeOpenStatus}
                sx={{
                    display: { xs: "block", sm: "block" },
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >

                {myDrawer}

            </Drawer>







            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />

                {content}

            </Box>
        </Box>

    );
}

export default NavBar;
