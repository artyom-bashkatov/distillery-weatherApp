import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {IconButton} from "@mui/material";

const IconBackButton = (props) => {
    return (
        <IconButton size='large' {...props}>
            <ArrowBackIcon fontSize='large'/>
        </IconButton>
    );
};

export default IconBackButton;