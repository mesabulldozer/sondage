import { Stack, Box, Typography } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';

export default function Logout() {

    useEffect(() => {
        localStorage.clear();
    });

  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      height={"100vh"}
      backgroundColor={"#f5f5f5"}
    >
      <Box
        width={500}
        sx={{
          backgroundColor: "#fff",
          padding: 3,
        }}
      >
          <Typography variant="h4">Merci pour votre sondage !</Typography>
        
          <Typography paddingTop={2}>
            Accueil ?{" "}
            <Link to="/homePage">Cliquez ici</Link>
          </Typography>
      </Box>
    </Stack>
  )
}
