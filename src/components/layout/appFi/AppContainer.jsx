import * as React from "react";
import AppReturn from "./AppReturn";

/* const pages = ["Products", "Pricing", "Blog"]; */
const pages = [];
const settings = ["Error page", "Account", "Logout"];

const AppContainer = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppReturn
      handleOpenNavMenu={handleOpenNavMenu}
      handleOpenUserMenu={handleOpenUserMenu}
      handleCloseNavMenu={handleCloseNavMenu}
      handleCloseUserMenu={handleCloseUserMenu}
      anchorElNav={anchorElNav}
      anchorElUser={anchorElUser}
      pages={pages}
      settings={settings}
    />
  );
};

export default AppContainer;
