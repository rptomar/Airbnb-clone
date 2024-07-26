import React, { Component } from 'react'
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import logo from '../airbnb.svg';
import webicon from '../web-icon.svg';
import { AccountCircle, Dehaze } from '@mui/icons-material';

export default class Header extends Component {
  render() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>
            <Grid xs={3} style={{margin:'3px',padding:'3px'}}>
                <img src={logo} alt='Air Bnb' width={'130px'}/>
            </Grid>
            </Grid>
            <Grid item xs={3}>
            </Grid>
            <Grid item xs={3}>
            </Grid>
            <Grid item xs={3} sm={3} md={3} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <h4 style={{ color: '#6A6A6A', margin: '0 10px' }}>Become a host</h4>
                <img src={webicon} alt='Air Bnb' width={'20px'} style={{ margin: '0 10px' }} />
                <button style={{ 
                    border: '1px solid gray', 
                    borderRadius: '25px', 
                    height: '55px', 
                    cursor: 'pointer', 
                    margin: '0 10px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    padding: '0 10px'
                }}>
                    <Dehaze style={{ margin: '0 5px' }} />
                    <AccountCircle style={{ margin: '0 5px', width: '24px', height: '24px' }} />
                </button>
            </Grid>
        </Grid>
    )
  }
}
