import React from 'react';
import OutlinedButton from "./UI/OutlinedButton";

const ForecastPageButtonLink = ({children, ...props}) => {
    return (
        <OutlinedButton {...props} sx={{
            marginTop: '20px',
            borderRadius: '40px',
            boxShadow: '0px 1px 1px 0px #00000026'
        }}>{children}</OutlinedButton>
    );
};

export default ForecastPageButtonLink;