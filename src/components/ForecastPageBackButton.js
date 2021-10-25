import React from 'react';
import OutlinedButton from "./UI/OutlinedButton";

const ForecastPageBackButton = ({children, ...props}) => {
    return (
        <OutlinedButton {...props} sx={{
            color: '#2d81ff',
            borderColor: '#2d81ff',
            borderRadius: '40px',
            boxShadow: '0px 1px 1px 0px #00000026',
            '&.MuiButton-root:hover': {
                borderColor: '#08C8F6',
                color: '#08C8F6',

            }
        }}>{children}</OutlinedButton>
    );
};

export default ForecastPageBackButton;