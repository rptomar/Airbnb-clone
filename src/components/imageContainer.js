import React, { Component, createRef } from 'react';
import { Grid, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import weeklyImage1 from '../weeklyImages/weekly1.jpg';
import weeklyImage2 from '../weeklyImages/weekly2.jpg';
import weeklyImage3 from '../weeklyImages/weekly3.jpg';

const weeklyImages = [weeklyImage1, weeklyImage2, weeklyImage3];
const filterNames = [
  'Dates', 'Group Size', 'More Filters', 'Great Filters', 'Family Friendly',
  'Animals', 'Arts & Painting', 'Baking', 'Cooking', 'Dance', 'Drinks',
  'Entertainment'
];

export default class ImageContainer extends Component {
  constructor(props) {
    super(props);
    this.imageContainerRef = createRef();
    this.filterContainerRef = createRef();
  }

  scrollLeft = () => {
    this.imageContainerRef.current.scrollBy({ left: -window.innerWidth / 2, behavior: 'smooth' });
  };

  scrollRight = () => {
    this.imageContainerRef.current.scrollBy({ left: window.innerWidth / 2, behavior: 'smooth' });
  };

  scrollFiltersLeft = () => {
    this.filterContainerRef.current.scrollBy({ left: -window.innerWidth / 2, behavior: 'smooth' });
  };

  scrollFiltersRight = () => {
    this.filterContainerRef.current.scrollBy({ left: window.innerWidth / 2, behavior: 'smooth' });
  };

  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={6} md={9}>
              <h2>New This Week</h2>
            </Grid>
            <Grid item xs={6} md={3} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton onClick={this.scrollLeft} style={{ padding: '5px', marginRight: '8px' }}>
                <ArrowBackIos style={{border:'1px solid',borderRadius:'15px',padding:'3px'}} />
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
              @media (min-width: 600px) {
                .imageItem {
                  flex: 0 0 calc(100% - 16px);
                }
              }
              @media (min-width: 960px) {
                .imageItem {
                  flex: 0 0 calc(50% - 16px); 
                }
                .imageItem:last-child {
                  flex: 0 0 calc(50% - 16px);
                }
              }
              `}
            </style>

            {weeklyImages.map((image, index) => (
              <div
                key={index}
                className="imageItem"
                style={{
                  position: 'relative',
                  height: '400px',
                  scrollSnapAlign: 'center',
                  flexShrink: 0,
                }}
              >
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
                  left: '10px',
                  color: 'white',
                  textShadow: '1px 1px 5px rgba(0, 0, 0, 0.7)',
                }}>
                  <p>Collection</p>
                  <h4>Most Popular Around The World</h4>
                  <button style={{
                    backgroundColor: 'white',
                    borderRadius: '5px',
                    border: '1px solid',
                    marginTop: '230px',
                    padding: '10px 10px',
                    cursor: 'pointer',
                  }}>Show All</button>
                </div>
              </div>
            ))}
          </div>
        </Grid>

        <Grid container spacing={2} alignItems="center" style={{ marginTop: '20px' }}>
          <Grid item xs={1} style={{ display: 'flex', justifyContent: 'center' }}>
            <IconButton
              style={{
                padding: '5px',
              }}
              onClick={this.scrollFiltersLeft}
            >
              <ArrowBackIos style={{border:'1px solid',borderRadius:'15px',padding:'3px'}}/>
            </IconButton>
          </Grid>
          <Grid item xs={10} style={{ overflowX: 'hidden' }}>
            <div
              ref={this.filterContainerRef}
              style={{
                display: 'flex',
                overflowX: 'auto',
                scrollSnapType: 'x mandatory',
                gap: '8px',
                padding: '8px 0',
              }}
            >
              {filterNames.map((filter, index) => (
                <button key={index} style={{
                  padding: '10px',
                  borderRadius: '12px',
                  border: '1px solid',
                  backgroundColor: '#f0f0f0',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}>{filter}</button>
              ))}
            </div>
          </Grid>
          <Grid item xs={1} style={{ display: 'flex', justifyContent: 'center' }}>
            <IconButton
              style={{
                padding: '5px',
              }}
              onClick={this.scrollFiltersRight}
            >
              <ArrowForwardIos style={{border:'1px solid',borderRadius:'15px',padding:'3px'}}/>
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
