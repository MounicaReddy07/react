import {AppBar,Toolbar, Typography,makeStyles} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
    header: {
        background: '#111111'
    },
    tabs: {
        color: '#ffffff',
        textDecoration : 'none',
        marginRight : 20,
        fontSize :20
    }
})

const NavBar =() => {
    const classes = useStyles();
    return (
        <AppBar className={classes.header} position="static">
            <Toolbar>
                <NavLink className={classes.tabs} to="./" exact>Code for Crud</NavLink>
                <NavLink className={classes.tabs} to="all" exact>all users</NavLink>
                <NavLink className={classes.tabs} to="add" exact>add users</NavLink>

            </Toolbar>
        </AppBar>
        
    )
}

export default NavBar;