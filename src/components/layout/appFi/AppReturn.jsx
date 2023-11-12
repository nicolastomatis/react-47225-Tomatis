import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SettingsIcon from "@mui/icons-material/Settings";
import logo from "../../../assets/img/logo.png";
import { Link } from "react-router-dom";
import CartWidget from "../../common/cartWidget/CartWidget";

const AppReturn = ({
  handleOpenNavMenu,
  handleOpenUserMenu,
  handleCloseNavMenu,
  handleCloseUserMenu,
  anchorElNav,
  anchorElUser,
  settings,
  pages,
}) => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#1660A7", zIndex: "1050" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Link to={"/"}>
                <img src={logo} style={{ width: "150px" }} />
              </Link>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appBar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              ></IconButton>
              <Menu
                id="menu-appBar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Link to={"/"}>
                <img src={logo} style={{ width: "150px" }} />
              </Link>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Link to={"/cart"}>
                <Tooltip title="Ver Carrito">
                  <IconButton
                    onClick={() => {}}
                    size="large"
                    sx={{ p: 0, mr: 1 }}
                  >
                    <CartWidget />
                  </IconButton>
                </Tooltip>
              </Link>
              <Tooltip title="Open settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  size="large"
                  sx={{ p: 0 }}
                >
                  <SettingsIcon />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appBar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting.title} onClick={handleCloseUserMenu}>
                    <Link
                      to={setting.path}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Typography textAlign="center">
                        {setting.title}
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default AppReturn;
