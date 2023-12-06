import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

export default function Connexion() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("etudiant")) {
      navigate("/");
    }
  });
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);

    const res = await axios.get(`http://localhost:3000/etudiants?matricule=${data.matricule}`);
    console.log(res);
    if(res.data.length > 0) {
      const {nom, prenom} = res.data[0];
      reset()
      toast.success(`Vous etes connecter en tant que ${nom}-${prenom}`);
      localStorage.setItem("etudiant", JSON.stringify(res.data[0]));
      navigate("/homePage")
    }
    else {
      reset()
      toast.error("Matricule invalide !");
    }

    // localStorage.setItem("etudiant", "mesa chadrack");
    // toast.success("Vous etes connecter");
    // navigate("/homePage")
   
  };
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      height={"100vh"}
      backgroundColor={"#f5f5f5"}
    >
      <Box
        width={400}
        sx={{
          backgroundColor: "#fff",
          padding: 3,
        }}
      >
        <Typography variant="h3">Connexion</Typography>
        <form
          style={{
            marginTop: 4,
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Stack direction={"column"} gap={2}>
            
            <TextField
              id="filled-basic"
              label="Veuillez saisir un matricule"
              variant="outlined"
              fullWidth
              size="small"
              type="text"
              {...register("matricule", {
                required: "Veuillez saisir un matricule",
                minLength: {
                  value: 6,
                  message: "Veuillez saisir votre matricule",
                },
              })}
            />
          </Stack>
          <Button
            variant="contained"
            sx={{
              marginTop: 2,
            }}
            type="submit"
          >
            Connexion
          </Button>
          <Typography paddingTop={2}>
            Accueil ?{" "}
            <Link to="/homePage">Cliquez ici</Link>
          </Typography>
        </form>
      </Box>
    </Stack>
  );
}
