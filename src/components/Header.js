import * as React from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  MenuItem,
  Menu,
  styled,
  Container,
} from "@mui/material";

import {
  NightsStay,
  ShoppingCart,
  Menu as MenuIcon,
  AccountCircle,
  Mail as MailIcon,
  Notifications as NotificationsIcon,
  LightMode,
  Home,
} from "@mui/icons-material";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 0,
    top: 18,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
export default function Header({ setMode, mode }) {
  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleMenuClose}>LogOut</MenuItem>
    </Menu>
  );

  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar>
          <NavLink to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
            >
              <Home />
            </IconButton>
          </NavLink>
          <NavLink to="/" sx={{}}>
            <Typography variant="h6" noWrap component="span">
              Home
            </Typography>
          </NavLink>

          <Box sx={{ flexGrow: 1 }} />
          <Box className="flex gap-1">
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={() => {
                toggleColorMode();
              }}
            >
              {mode == "light" ? <LightMode /> : <NightsStay />}
            </IconButton>
            <NavLink to='/cart'>
              
              <IconButton size="large" aria-label="cart" color="inherit">
                <StyledBadge badgeContent={444} color="error">
                  <ShoppingCart />
                </StyledBadge>
              </IconButton>
            </NavLink>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>

        {renderMenu}
      </Container>
    </AppBar>
  );
}
