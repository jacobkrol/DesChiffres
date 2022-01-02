import React, { useState } from 'react';
import { 
  HashRouter,
  Route,
  Routes
} from 'react-router-dom';
import { Grid, ThemeProvider } from '@mui/material';
import { orangeTheme } from '../data/themes';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Puzzle from './Puzzle';
import HowTo from './HowTo';
import Error404 from './Error404';

export default function Router() {
  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const [diffText, setDiffText] = useState();
  const setDiff = ([min,max], text) => {
    setMin(min);
    setMax(max);
    setDiffText(text);
  }

  return (
    <ThemeProvider theme={orangeTheme}>
      <HashRouter>
        <Grid container direction="column" style={{'minHeight': '100vh', backgroundColor: '#f2ebeb'}}>
          <Grid item>
            <Header />
          </Grid>
          <Grid item>
            <Routes>
              <Route path="/" element={<Home setDiff={setDiff} />} />
              <Route path="/puzzle" element={<Puzzle min={min} max={max} diff={diffText} />} />
              <Route path="/howto" element={<HowTo />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </Grid>
          <Grid item style={{marginTop: 'auto'}}>
            <Footer />
          </Grid>
        </Grid>
      </HashRouter>
    </ThemeProvider>
  )
}