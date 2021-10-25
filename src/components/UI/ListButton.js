import React from "react";
import {IconButton} from "@mui/material";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const ListButton = () => {
    return (
        <IconButton size='large' sx={{color: 'white'}}>
            <FormatListBulletedIcon fontSize='large'/>
        </IconButton>
    );
};

export default ListButton;
