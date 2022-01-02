import React from 'react';
import { Button, styled } from '@mui/material';
import useSound from 'use-sound';
import clickSound from '../data/pop.wav';

export default function LoudButton({ children, variant = "text", onClick = () => {}, style = {}, slow = false }) {
  const [click] = useSound(clickSound, { volume: slow ? 1.75 : 0.75, playbackRate: slow ? 0.8 : 1.1 });

  const loudClick = () => {
    click();
    onClick();
  }

  const ThemedButton = styled(Button)(({ theme }) => {
    if(variant === "outlined") {
      return {
        color: theme.main.primary,
        borderColor: theme.main.primary
      };
    } else {
      return {
        backgroundColor: theme.main.primary,
        width: '100%',
        minWidth: '125px'
      };
    }
  });

  return (
    <ThemedButton variant={variant} onClick={loudClick} style={{...style}}>{children}</ThemedButton>
  )
}