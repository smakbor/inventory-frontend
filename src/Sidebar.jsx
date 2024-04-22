// eslint-disable-next-line no-unused-vars
import React from "react";

import {
    AppBar,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import BasicTable from "./Table";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    appBar: {
        zIndex: theme.zIndex?.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        // padding: theme?.spacing(3),
    },
}));

const Sidebar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        My Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes?.drawer}
                variant="permanent"
                classes={{
                    paper: classes?.drawerPaper,
                }}
                anchor="left"
            >
                <List>
                    {["Dashboard", "Product", "Brand", "Unit", "Category"].map(
                        (text) => (
                            <ListItem button key={text}>
                                <ListItemText primary={text} />
                            </ListItem>
                        )
                    )}
                </List>
            </Drawer>
            <main className={classes.content}>
                <Toolbar />
                <BasicTable />
            </main>
        </div>
    );
};

export default Sidebar;
