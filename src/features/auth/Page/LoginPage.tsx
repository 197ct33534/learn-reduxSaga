import { Box, Button, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
    },
    box: {
        padding: theme.spacing(3),
    },
}));

const LoginPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper elevation={1} className={classes.box}>
                <Typography variant="h5" component="h1">
                    Stundet Management
                </Typography>
                <Box mt={4}>
                    <Button variant="contained" color="primary">
                        fake login
                    </Button>
                </Box>
            </Paper>
        </div>
    );
};

export default LoginPage;
