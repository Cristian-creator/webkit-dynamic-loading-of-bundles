import React, { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import config from '../../config'; 
import { styled } from '@mui/system';
import { Drawer } from '@mui/material';

interface NavbarProps {
    sidebarPosition?: 'right',
};

interface StyledToolbarProps {
    position: 'right' | undefined,
} 

const StyledToolbar = styled(Toolbar)<StyledToolbarProps>(({ position }) => ({
    display: 'flex',
    justifyContent: position === 'right' ? 'flex-end' : 'flex-start',
}));

const DrawerContent = styled(Typography)({
  padding: '16px 64px',
});

const Navbar: React.FC<NavbarProps> = ({ sidebarPosition }) => {
  const [drawerIsOpened, setDrawerIsOpened] = useState(false);

  return (
    <Box>
      <AppBar position="static">
        <StyledToolbar position={ sidebarPosition } variant="dense">
          <IconButton onClick={() => setDrawerIsOpened(true)} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        </StyledToolbar>
      </AppBar>
      <Drawer
        anchor={ sidebarPosition }
        open={ drawerIsOpened }
        onClose={() => setDrawerIsOpened(false)}
      >
        <DrawerContent> Hello </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Navbar;