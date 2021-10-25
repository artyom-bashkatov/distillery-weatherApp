import React from 'react';
import MyButton from "./UI/MyButton";

const CityPageButtonLink = ({children, ...props}) => {
    return (
        <MyButton {...props} sx={{
            padding: '0 21px',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '20px',
            textTransform: 'capitalize',
            width: '291px',
            height: '60px',
            color: '#2d81ff',
            border: '1px solid #5f9fff',
            boxShadow: '0 4px 4px 0 #00000026',
            borderRadius: '20px',
            flexShrink: '0',
            '&.MuiButton-root:hover': {
            borderColor: '#08C8F6',
            color: '#08C8F6'
        }
        }}>
            {children}
        </MyButton>
    );
};

export default CityPageButtonLink;