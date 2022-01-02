import React from 'react';
import { Grid, Typography } from '@mui/material';
import Button from './Button';
import { useNavigate } from 'react-router';

export default function Error404() {
  const navigate = useNavigate();

  return (
    <Grid container direction="column" alignItems="center" spacing={2}>
      <Grid item style={{margin: '2rem 0rem 1rem'}}>
        <Typography variant="h1" className="title">Page Not Found :/</Typography>
      </Grid>
      <Grid item>
        <Button variant="outlined" onClick={() => navigate('/')} slow>Return Home</Button>
      </Grid>
    </Grid>
  )
}