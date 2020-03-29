import React from 'react';
import Home from './pages/home';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { theme } from './theme';
function App() {
  return (
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <Home />
    </MuiThemeProvider>
  );
}

export default App;
