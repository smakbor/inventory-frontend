// eslint-disable-next-line no-unused-vars
import React from "react";
import { makeStyles } from "@mui/styles";
import { AppBar, Toolbar, Typography } from "@mui/material";

const useStyles = makeStyles(() => ({
    footer: {
        top: "auto",
        bottom: 0,
        marginTop: "auto",
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.footer}>
            <Toolbar>
                <Typography variant="body1" color="inherit">
                    © 2024 My Website. All rights reserved.
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;
