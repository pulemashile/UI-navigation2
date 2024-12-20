import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./home/navbar";
import { Container, Grid, Typography } from "@mui/material";
import { useMediaQuery } from '@mui/material';
import imageone from './assets/images/image-hero-desktop.png';
import Button from '@mui/material/Button';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    if (isDesktop) {
      setSidebarOpen(true);
    }
  }, [isDesktop]);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    
  
    <div>
    <div className="newa" style={{ display: 'flex' }}>
      <div style={{ padding: '32px' }}>
        <img src="./src/assets/images/logo.svg" alt="Logo" />
      </div>

      <div className={`menu-icon ${sidebarOpen ? 'active' : ''}`} onClick={handleSidebarToggle}>
        <img src="./src/assets/images/icon-menu.svg" alt="Client Databiz" />
      </div>

<div className={`navbar-container ${sidebarOpen ? 'open' : ''}`}>
  <Navbar />
  {isDesktop ? null : (
    <Button className="close-button" onClick={handleCloseSidebar}>
       <img src="src/assets/images/icon-close-menu.svg"  />
    </Button>
  )}
</div>
    </div>

    <Container className="top" sx={{ marginTop: "10vh" }}>
      <Grid container spacing={7}>
        {/* Image Grid Item */}
        <Grid item lg={5} xs={12} order={{ xs: 1, lg: 2 }}>
          <img className="imageone" src={imageone} alt="Hero" style={{ width: '100%' }} />
        </Grid>

        {/* Text Grid Item */}
        <Grid item lg={7} xs={12} order={{ xs: 2, lg: 1 }}>
          <Typography variant="h2" sx={{ fontWeight: "bolder", fontSize: { xs: '28px', lg: '36px' }, marginBottom: "20px", marginBlock: { xs: '10px', lg: '32px' } }}>
            make remote work{" "}
          </Typography>
          <div>
            <Typography
              variant="h6"
              sx={{ fontSize: "20px", marginBlock: "40px", marginBottom: "20px", width: { xs: '100%', sm: '30vw' } }}
            >
              get your team in sync, no matter your location. streamline processes, create team rituals and watch productivity roar
            </Typography>

            <Button
              variant="outlined"
              sx={{
                color: 'white',
                borderColor: 'black',
                backgroundColor: 'black',
                borderRadius: "12px",
                transition: 'background-color 0.3s, color 0.3s',
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
      </Grid>

      <div className="container" sx={{ position: 'absolute', top: 0, left: 0, width: '100%' }}>
        {/* Databiz pictures */}
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