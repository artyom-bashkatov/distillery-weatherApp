import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {IconButton} from "@mui/material";

type Props = {
    [key: string]: any;
};

const IconBackButton:React.FC<Props> = ({ props }: Props) => {
    return (
        <IconButton size='large' {...props}>
            <ArrowBackIcon fontSize='large'/>
        </IconButton>
    );
};

export default IconBackButton;