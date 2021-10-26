import React from "react";
import {Favorite, FavoriteBorder} from "@mui/icons-material";
import {Checkbox} from "@mui/material";

type Props = {
    [key: string]: any;
};

const FavoriteButton:React.FC<Props> = (props: Props) => {
    return (
        <Checkbox
            {...props}
            icon={<FavoriteBorder/>}
            checkedIcon={<Favorite/>}
            size='medium'
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