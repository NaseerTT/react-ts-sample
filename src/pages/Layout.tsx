import { Outlet, Link } from "react-router-dom";
import '../App.css'
import { Avatar, Icon } from "@mui/material";
import ColorLensIcon from '@mui/icons-material/ColorLens';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <ColorLensIcon ></ColorLensIcon>
          </li>
          <li>
            <Link to="/login">Sample Application</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;