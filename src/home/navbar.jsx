import React from "react";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { RiArrowDropDownLine } from "@remixicon/react";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  return (
    <Container>
      <div className="navbar">
        <div style={{ display: "flex", gap: '20px', alignItems: 'center' }}>
          <div style={{ marginTop: '15px', marginRight: '35px' }}>
            <img src="./src/assets/images/logo.svg" alt="Logo" />
          </div>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <Button
  {...bindTrigger(popupState)}
  type="submit"
  sx={{
    color: "hsl(0, 0%, 41%)",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
    display: { xs: 'none', sm: 'block' }, // Hide on extra-small screens
  }}
>
  feature <RiArrowDropDownLine />
</Button>

                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>
                    <img src="src/assets/images/icon-todo.svg" alt="Todo" /> Todo list
                  </MenuItem>
                  <MenuItem onClick={popupState.close}>
                    <img src="src/assets/images/icon-calendar.svg" alt="Calendar" /> Calendar
                  </MenuItem>
                  <MenuItem onClick={popupState.close}>
                    <img src="src/assets/images/icon-reminders.svg" alt="Reminders" /> Reminder
                  </MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>

          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <Button
  {...bindTrigger(popupState)}
  type="submit"
  sx={{
    color: "hsl(0, 0%, 41%)",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
    display: { xs: 'none', sm: 'block' }, // Hide on extra-small screens
  }}
>
  company <RiArrowDropDownLine />
</Button>

                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>History</MenuItem>
                  <MenuItem onClick={popupState.close}>Our team</MenuItem>
                  <MenuItem onClick={popupState.close}>Blog</MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
          <Typography marginBlock={2} sx={{
            color: "hsl(0, 0%, 41%)",display: { xs: 'none', sm: 'block' },
          }}>careers</Typography>
          <Typography marginBlock={2} sx={{
            color: "hsl(0, 0%, 41%)",
            cursor: 'pointer',
            transition: '.2s ease-in-out',
            "&:hover": {
              backgroundColor: "white",
              color: "black",
              pointerEvents: "none",
            },display: { xs: 'none', sm: 'block' },
          }}>about</Typography>

        </div>
        <div className="buttons">
          <Button
            type="submit"
            sx={{
              color: "hsl(0, 0%, 41%)",
              "&:hover": {
                backgroundColor: "white",
                color: "black",
                pointerEvents: "none",
              },display: { xs: 'none', sm: 'block' },
            }}
          >
            Login
          </Button>
          <Button
            type="submit"
            variant="outlined"
            sx={{
              color: "hsl(0, 0%, 41%)",
              borderColor: "black",
              backgroundColor: "white",
              borderRadius: "12px",
              "&:hover": {
                backgroundColor: "white",
                color: "black",
                pointerEvents: "none",
              },display: { xs: 'none', sm: 'block' },
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