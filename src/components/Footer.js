import React from 'react';
import { Box, Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '50px', height: '50px', margin: '10px' }} />
    </Stack>
  </Box>
);

export default Footer;
