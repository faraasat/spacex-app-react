import "./navbar.styles.css";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
  })
);

export default function NavBar() {
  const classes = useStyles();

  return (
    <AppBar position="static" style={{ backgroundColor: "rgba(1, 1, 1, 0.562)" }}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          SpaceX App
        </IconButton>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography style={{ paddingLeft: 20, color: "white" }} variant="h6">
            Home
          </Typography>
        </Link>
        <Link to="/explore" style={{ textDecoration: "none" }}>
          <Typography style={{ paddingLeft: 20, color: "white" }} variant="h6">
            Explore
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
