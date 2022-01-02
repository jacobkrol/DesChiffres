import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import Icon from '../data/icon.png';

export default function Header() {
  const navigate = useNavigate();

  return (
    <Grid container style={{backgroundColor: "#f75145", alignItems: 'center', borderBottom: '1px solid #4f1919', padding: '0.3rem', boxShadow: '0px 2px 4px black'}}>
      <Grid item>
        <img src={Icon} alt="app logo" style={{height: '30px', width: '30px', marginLeft: '0.25rem'}} onClick={() => navigate('/')} />
      </Grid>
    </Grid>
  )
}