"use client";
import * as React from 'react';
import Image from 'next/image'
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavBarProps } from './Navbar.types';
import Link from 'next/link';

const drawerWidth = 240;

export default function NavBar(props: NavBarProps) {
  const { window, children, navItems } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Zendha core
      </Typography>
      <Divider />
      <List>
        {navItems.map(({label, route}) => (
          <Link href={route} key={route}>
            <ListItem key={label} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{backgroundColor:'#2e2e2e'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Zendha core
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map(({label, route}) => (
              <Link href={route} key={route}>
                <Button key={label} sx={{ color: '#fff' }}>
                  {label}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{width:"100%"}}>
        <Toolbar />
        <Box
            component="main"
            sx={{
              minHeight: "80vh",
              padding: "4rem 2rem",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
          {children}
        </Box>
        <Box
          component="span"
          sx={{
            display: "flex",
            flex: 1,
            padding: "2rem 1rem",
            borderTop: "1px solid #eaeaea",
            justifyContent: "center",
            alignItems: "center",
            background: "#2e2e2e",
            color: "white",
            gap: "20px",
            width:"100%",
          }}
        >
          Hecho por David Rodriguez para{" "}
          <Box component="span">
            <Image src="/logo_zc.png" alt="Zendha Logo" width={80} height={40} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
