import React from 'react';
import '../data/styles.css';
import { Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

export default function Home({ setDiff }) {
  let navigate = useNavigate();

  const handlePuzzle = (diff, text) => {
    setDiff(diff, text);
    navigate('/puzzle');
  }

  const handleHowTo = () => {
    navigate('/howto');
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center', margin: '2rem'}}>
      <Grid container direction="column" spacing={2} style={{alignItems: 'center'}}>
        <Grid item>
          <Typography variant="h1" className="title">Des Chiffres</Typography>
        </Grid>
        <Grid item>
          <Grid container direction="column" alignItems="stretch" spacing={2}>
            <Grid item>
              <Button variant="contained" onClick={() => handlePuzzle([5,20], 'Easy')}>Easy</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={() => handlePuzzle([2,4], 'Medium')}>Medium</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={() => handlePuzzle([1,1], 'Hard')}>Hard</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={handleHowTo}>How To</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}