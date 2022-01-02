import React from 'react';
import { Grid, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Grid container style={{justifyContent: 'center', padding: '1rem'}}>
      <Grid item>
        <Typography variant="body1">&copy; {new Date().getFullYear()} <a href="https://kroljs.com" target="_blank" rel="noopener noreferrer">Jacob Krol</a> v1.0.0</Typography>
      </Grid>
    </Grid>
  )
}