import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import Button from './Button';
import '../data/styles.css';
import solutionsWorkerScript from '../data/worker';

export default function Puzzle({ min = 1, max = 20, diff = 'All' }) {
  const [target, setTarget] = useState('...');
  const [numbers, setNumbers] = useState(['Loading ...']);
  const navigate = useNavigate();

  const puzzleWorker = useMemo(() => new Worker(solutionsWorkerScript), []);;
  puzzleWorker.onmessage = (e) => {
    setTarget(e.data.target);
    setNumbers(e.data.numbers);
  }

  const generateNewPuzzle = useCallback(() => {
    setTarget('...');
    setNumbers(['Loading ...']);
    puzzleWorker.postMessage({min, max});
  }, [setTarget, setNumbers, min, max, puzzleWorker]);

  useEffect(() => {
    generateNewPuzzle();
  }, [generateNewPuzzle]);

  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      <Grid item alignSelf='flex-start' style={{margin: '1rem 2rem 0'}}>
        <Typography variant="subtitle1" style={{fontSize: '1.1rem'}}>Difficulty: {diff}</Typography>
      </Grid>
      <Grid item style={{marginTop: '1rem'}}>
        <div className="bordered-box">
          <Typography variant="body1" style={{fontSize: '1.25rem', fontWeight: '500'}}>{target}</Typography>
        </div>
      </Grid>
      <Grid item style={{marginBottom: '2rem'}}>
        <div className="bordered-box">
          <Grid container columns={3} spacing={1} columnSpacing={2}>
            {numbers.map((n,i) =>
              <Grid item key={i}>
                <Typography variant="body1" style={{fontSize: '1.25rem'}}>{n}</Typography>
              </Grid>
            )}
          </Grid>
        </div>
      </Grid>
      <Grid item style={{width: '100%'}}>
        <Grid container justifyContent="space-between" style={{padding: '0 2rem'}}>
          <Grid item>
            <Button variant="outlined" onClick={() => navigate('/')} slow>Go Home</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={generateNewPuzzle}>New Puzzle</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}