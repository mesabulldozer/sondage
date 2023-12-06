
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function loginAdmin() {

    const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("Admin")) {
      navigate("/pageAdmin");
    }
  });
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async(data) =>{
    console.log(data);

    const res = await axios.get(`http://localhost:3000/Admin?nom=${data.nom}`)
    console.log(res);
    if(res.data.length > 0) {
      const {nom, password} = res.data[0];
      reset()
      toast.success(`Vous etes connecter en tant que Adimin${nom}-${password}`);
      localStorage.setItem("etudiant", JSON.stringify(res.data[0]));
      navigate("/pageAdmin")
    }
    else {
      reset()
      toast.error("Mot de passe invalide !");
    }

  }
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
              label="Veuillez saisir un mon"
              variant="outlined"
              fullWidth
              size="small"
              type="text"
              {...register("nom", {
                required: "Veuillez saisir un mon",
                minLength: {
                  value: 3,
                  message: "Veuillez saisir votre mon",
                }
              })}
            />
            
            <TextField
              id="filled-basic"
              label="Veuillez saisir un mot de passe"
              variant="outlined"
              fullWidth
              size="small"
              type="text"
              {...register("motpasse", {
                required: "Veuillez saisir un mot de passe",
                minLength: {
                  value: 3,
                  message: "Veuillez saisir votre mot de passe",
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
            <Link to="">Cliquez ici</Link>
          </Typography>
        </form>
      </Box>
    </Stack>
  )
}
