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
import SidebarPositions from '../../interfaces/SidebarPositions';

interface NavbarProps {
    sidebarPosition?: SidebarPositions,
};

interface StyledToolbarProps {
    position: SidebarPositions,
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
  const { defaultModuleValues: { sidebarDefaultPosition } } = config;
  const position = (sidebarPosition || sidebarDefaultPosition) as SidebarPositions;

  return (
    <Box>
      <AppBar position="static">
        <StyledToolbar position={ position } variant="dense">
          <IconButton onClick={() => setDrawerIsOpened(true)} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        </StyledToolbar>
      </AppBar>
      <Drawer
        anchor={ position }
        open={ drawerIsOpened }
        onClose={() => setDrawerIsOpened(false)}
      >
        <DrawerContent> Hello </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Navbar;