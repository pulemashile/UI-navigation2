import React from "react";
import "./App.css";
import Navbar from "./home/navbar";
import { Container, Grid, Typography } from "@mui/material";
import imageone from './assets/images/image-hero-desktop.png';
import Button from '@mui/material/Button';

function App() {
  return (
    <div>
      <Navbar />
      <Container
        className="top"
        sx={{
          marginTop: "10vh",
        }}
      >
        <Grid container spacing={7}> {/* Increased spacing */}
          <Grid item lg={7}>
            <Typography variant="h2" style={{ fontWeight: "bolder" }}>
              make{" "}
            </Typography>
            <Typography variant="h2" style={{ fontWeight: "bolder" }}>
              remote work{" "}
            </Typography>
            <div>
              <Typography
                variant="h6"
                style={{ fontSize: "18px", marginBlock: "40px", width: '30vw' }}
              >
                get your team in sync, no matter your location. streamline processes, create team rituals and watch productivity roar
              </Typography>
              <Button 
                type="submit" 
                variant="outlined" 
                sx={{
                  color: 'white',
                  borderColor: 'black',
                  backgroundColor: 'black',
                  borderRadius: "12px",
                  transition: 'background-color 0.3s, color 0.3s', // Added transition for smoother effect
                  '&:hover': {
                    backgroundColor: 'white',
                    color: 'black',
                  },
                }}
              > 
                Learn more
              </Button>
            </div>
          </Grid>
          <Grid item lg={5}>
            <div>
              <img 
                src={imageone} 
                style={{
                  height: '70vh',
                  objectFit: 'cover',
                }} 
              />
            </div>
          </Grid>
        </Grid>
        <div className="container">
          <div><img src="./src/assets/images/client-databiz.svg" alt="Client Databiz" /></div>
          <div><img src="./src/assets/images/client-audiophile.svg" alt="Client Audiophile" /></div>
          <div><img src="./src/assets/images/client-meet.svg" alt="Client Meet" /></div>
          <div><img src="./src/assets/images/client-maker.svg" alt="Client Maker" /></div>
        </div>
      </Container>
    </div>
  );
}

export default App;
