import { Box, Button, makeStyles, Paper, Typography } from '@material-ui/core';
import { useAppDispatch } from 'app/hooks';
import React from 'react';
import { login } from '../authSlice';

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
    const dispatch = useAppDispatch();
    const handleClickLogin = () => {
        //todo get username and password from
        dispatch(login({ username: 'trung nghia', password: '123' }));
    };
    return (
        <div className={classes.root}>
            <Paper elevation={1} className={classes.box}>
                <Typography variant="h5" component="h1">
                    Stundet Management
                </Typography>
                <Box mt={4}>
                    <Button variant="contained" color="primary" onClick={handleClickLogin}>
                        fake login
                    </Button>
                </Box>
            </Paper>
        </div>
    );
};

export default LoginPage;
