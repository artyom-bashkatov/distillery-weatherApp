import React from 'react';
import {Button} from "@mui/material";

type Props = {
    [key: string]: any;
};

const MyButton:React.FC<Props> = ({children, ...props}: Props) => {
    return (
        <Button {...props}>
            {children}
        </Button>
    );
};

export default MyButton;