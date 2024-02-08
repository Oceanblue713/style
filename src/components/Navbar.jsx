import { AppBar, styled,Toolbar, Typography, InputBase, Badge, Box } from '@mui/material'
import React from 'react'
import SpaIcon from '@mui/icons-material/Spa';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';


const StyledToolbar = styled(Toolbar) ({
  display: "flex",
  justifyContent: 'space-between'
})

const Search = styled("div")(({theme}) => ({
  backgroundColor: 'white',
  paddint: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%'
}));

const Icons = styled(Box)(({theme}) => ({
  display: 'none',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up("sm")]:{
    display: 'flex'
  }

}));

const UserBox = styled(Box)(({theme}) => ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up("sm")]:{
    display: 'none'
  }
}))

export const Navbar = () => {
  return (
    <div>
      <AppBar position="sticky">
        <StyledToolbar>
          <Typography variant="h6" sx={{display:{xs: "none", sm: 'block'}}}>
            DEV
          </Typography>
          <SpaIcon sx={{display:{xs: "block", sm: 'none'}}}/>
          <Search><InputBase placeholder='search'/></Search>
          <Icons>
            <Badge badgeContent={4} color="error">
              <EmailIcon />
            </Badge>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
            <Avatar sx={{width: 30, height:30}} alt="AAA" src="" />
          </Icons>
          <UserBox>
              <Avatar sx={{width: 30, height:30}} alt="AAA" src="" />
              <Typography>AAA</Typography>
          </UserBox>

        </StyledToolbar>
      </AppBar>
    </div>
  )
}
