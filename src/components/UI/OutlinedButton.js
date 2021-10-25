import React from 'react';
import {Button} from "@mui/material";

const OutlinedButton = ({children, ...props}) => {
    return (
        <Button {...props} variant="outlined" fullWidth={true}>{children}</Button>
    );
};

export default OutlinedButton;