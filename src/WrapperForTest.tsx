import React from 'react';
import {Provider} from 'react-redux'
import store from './store/store'
import {createTheme} from "@mui/material";
import {ThemeProvider} from "@emotion/react";

const theme = createTheme({
  palette: {
      primary: {
          main: '#ffffff',
      },
      secondary: {
          main: '#2d81ff',
      }
  }
});

const WrapperForTest:React.FC = ({ children }) => {
  return <Provider store={store}>
  <ThemeProvider theme={theme}>
          {children}
  </ThemeProvider>
  </Provider>
}
export default WrapperForTest