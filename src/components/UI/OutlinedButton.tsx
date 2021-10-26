import React from 'react';
import {Button} from "@mui/material";

type Props = {
    [key: string]: any;
};

const OutlinedButton:React.FC<Props> = ({children, ...props}: Props) => {
    return (
        <Button {...props} variant="outlined" fullWidth={true}>{children}</Button>
    );
};

export default OutlinedButton;