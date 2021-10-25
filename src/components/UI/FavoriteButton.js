import React from "react";
import {Favorite, FavoriteBorder} from "@mui/icons-material";
import {Checkbox} from "@mui/material";

const FavoriteButton = (props) => {
    return (
        <Checkbox
            {...props}
            icon={<FavoriteBorder/>}
            checkedIcon={<Favorite/>}
            size='large'
            sx={{
                color: 'white',
                '&.Mui-checked': {
                    color: 'white',
                },
                '&.Mui-disabled': {
                    color: 'transparent',
                }
            }}
        />
    );
};
export default FavoriteButton;
