import React from 'react';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

const Navbar = () => {
  return (
    <Container>
      <div className="navbar">
      <div><img src="./src/assets/images/logo.svg" alt="Logo" /></div>
      <div>
        <ul>
          <li>Features<img src="src/assets/images/icon-arrow-down.svg" alt="Arrow Down" className='dropdownbutton' style={{
             height: '10px',
             objectFit: 'cover'
          }}/></li>
          <li><a href="company.html">Company</a><img src="src/assets/images/icon-arrow-down.svg" alt="Arrow Down" className='dropdownbutton'style={{
             height: '10px',objectFit: 'cover'}}/></li>
          <li><a href="careers.html">Careers</a></li>
          <li><a href="about.html">About</a></li>
        </ul>
      </div>
      <div className="buttons">
        <Button 
          type="submit" 
          sx={{
            color: 'black',
            '&:hover': {
              backgroundColor: 'white',
              color: 'black',
              pointerEvents: 'none'
            },
          }}
        > 
          Login 
        </Button>
        <Button 
          type="submit" 
          variant="outlined" 
          sx={{
            color: 'black',
            borderColor: 'black',
            backgroundColor: 'white',
            borderRadius : '12px',
            '&:hover': {
              backgroundColor: 'white',
              color: 'black',
              pointerEvents: 'none'
            },
          }}
        > 
          Register 
        </Button>
      </div>
    </div>
    </Container>
  
  );
};

export default Navbar;
