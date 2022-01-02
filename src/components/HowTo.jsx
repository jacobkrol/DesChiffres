import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../data/styles.css';
import { Divider, Grid, Typography } from '@mui/material';
import Button from './Button';

export default function HowTo() {
  const navigate = useNavigate();

  return (
    <div style={{margin: '2rem'}}>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Typography variant="h2" className="title">How To</Typography>
        </Grid>
        <Grid item style={{marginTop: '1rem'}}>
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <Typography variant="body1">Use the 6 numbers, each at most one time, to reach the top target number.</Typography>
            </Grid>
            <Grid item style={{marginBottom: '1rem'}}>
              <Typography variant="body1">You can use addition, subtraction, multiplication, and division, in any order, and with any frequency.</Typography>
            </Grid>
            <Divider />
            <Grid item alignSelf="center">
              <Typography variant="subtitle1" style={{fontSize: '1.25rem'}}>Example</Typography>
            </Grid>
            <Grid item alignSelf="center">
              <div className="bordered-box">
                <Typography variant="body1" style={{fontSize: '1.25rem', fontWeight: '500'}}>663</Typography>
              </div>
            </Grid>
            <Grid item alignSelf="center" style={{marginBottom: '1rem'}}>
              <div className="bordered-box">
                <Grid container columns={3} spacing={1} columnSpacing={2}>
                  {[3,100,50,5,1,10].map((n,i) =>
                    <Grid item key={i}>
                      <Typography variant="body1" style={{fontSize: '1.25rem'}}>{n}</Typography>
                    </Grid>
                  )}
                </Grid>
              </div>
            </Grid>
            <Grid item>
              <Typography variant="body1">Here is one way we may go about solving this one:</Typography>
            </Grid>
            <Grid item alignSelf="center">
              <Typography variant="body1" style={{fontStyle: 'italic'}}>Take <strong>100</strong> &divide; <strong>5</strong> to make 20</Typography>
            </Grid>
            <Grid item alignSelf="center">
              <Typography variant="body1" style={{fontStyle: 'italic'}}>Add and subtract 20 &#43; <strong>3</strong> &minus; <strong>10</strong> to make 13</Typography>
            </Grid>
            <Grid item alignSelf="center">
              <Typography variant="body1" style={{fontStyle: 'italic'}}>Finally multiply 13 &times; (<strong>1</strong> &#43; <strong>50</strong>) to make 663</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">So our final formula looks something like this:</Typography>
            </Grid>
            <Grid item alignSelf="center">
              <Typography variant="body1" style={{fontStyle: 'italic'}}>(<strong>100</strong> &divide; <strong>5</strong> &#43; <strong>3</strong> &minus; <strong>10</strong>) &times; (<strong>1</strong> &#43; <strong>50</strong>) = 663</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">Remember to keep an open mind. There are many ways to go about each puzzle. That is, except "Hard" puzzles... those only have one solution &#128521;</Typography>
            </Grid>
            <Grid item style={{marginTop: '2rem'}}>
              <Button variant="outlined" onClick={() => navigate('/')} slow>Go Home</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}