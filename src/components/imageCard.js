import React, { Component, createRef } from 'react';
import { Grid, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos, FavoriteBorder, Star } from '@mui/icons-material';
import weeklyImage1 from '../weeklyImages/weekly1.jpg';
import weeklyImage2 from '../weeklyImages/weekly2.jpg';
import weeklyImage3 from '../weeklyImages/weekly3.jpg';

const weeklyImages = [
  weeklyImage1, weeklyImage2, weeklyImage3, weeklyImage1, 
  weeklyImage2, weeklyImage3, weeklyImage1, weeklyImage2, 
  weeklyImage3, weeklyImage1, weeklyImage2, weeklyImage3
];

export default class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.imageContainerRef = createRef();
  }

  scrollLeft = () => {
    this.imageContainerRef.current.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
  };

  scrollRight = () => {
    this.imageContainerRef.current.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
  };

  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={6} md={9}>
              <h2>Top Seller</h2>
            </Grid>
            <Grid item xs={6} md={3} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <p style={{ margin: '5px' }}>show(12)</p>
              <IconButton onClick={this.scrollLeft} style={{ padding: '5px', marginRight: '8px' }}>
                <ArrowBackIos style={{border:'1px solid',borderRadius:'15px',padding:'3px'}}/>
              </IconButton>
              <IconButton onClick={this.scrollRight} style={{ padding: '5px' }}>
                <ArrowForwardIos style={{border:'1px solid',borderRadius:'15px',padding:'3px'}}/>
              </IconButton>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <div
            ref={this.imageContainerRef}
            style={{
              display: 'flex',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              gap: '16px',
              padding: '16px 0',
            }}
          >
            <style>
              {`
              ::-webkit-scrollbar {
                  display: none; 
              }
              @media (min-width: 960px) {
                .desktopImage {
                  flex: 0 0 calc(100% / 6 - 16px) !important;
                }
              }
              `}
            </style>

            {weeklyImages.map((image, index) => (
              <div
                key={index}
                className="desktopImage"
                style={{
                  flex: '0 0 calc(100% - 16px)',
                  scrollSnapAlign: 'center',
                }}
              >
                <div style={{ position: 'relative', height: '350px', marginBottom: '10px' }}>
                  <img
                    src={image}
                    alt={`weekly ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '10px',
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    color: 'white',
                    textShadow: '1px 1px 5px rgba(0, 0, 0, 0.7)',
                  }}>
                    <FavoriteBorder />
                  </div>
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <Star style={{ color: '#ffb400', marginRight: '5px' }} /> 4.99 (261). 3 hours
                  </div>
                  <p style={{ fontWeight: 'bold', margin: '5px 0' }}>
                    Amusing Old Delhi, Food, Spice Market & Sikh Religious Tour
                  </p>
                  <p style={{ margin: '5px 0' }}>
                    From ₹2,500/ person
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Grid>
      </Grid>
    );
  }
}


