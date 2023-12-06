import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {FormControl, FormLabel} from '@mui/material';

import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import toast from 'react-hot-toast';


export default function InfraSurvey() {

  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({});


  const {
    handleSubmit,
    register,
    reset,
    formState: { data,errors },
  } = useForm('');
  const onValider = async (data) => {
    console.log(data);
    // Convert data to JSON format
    const res = await axios.post("http://localhost:3000/sondage-infra", data);
    console.log(res);
    if(res.status == 201) {
      reset()
      toast.success("Sondage enregistré !");
    }
    else {
      //reset()
      toast.error("Erreur sondage !");
    }
  }

  useEffect(() => {
    if (!localStorage.getItem("etudiant")) {
      navigate("/login");
    }
  });

  return (
    <Stack
    alignItems={"center"}
    justifyContent={"center"}
    
    backgroundColor={"#f5f5f5"}
    >
    <Box
     width={600}
     sx={{
       backgroundColor: "#fff",
       padding: 3,
     }}
    >
      <Typography variant="h3">The Survey Infra</Typography>
      <form
        style={{
          marginTop: 4,
          color:'black',
        }}
        onSubmit={handleSubmit(onValider)}
      >
        <Stack direction={"column"} gap={2}>

        <FormControl >
          <label >1. 
             Comment trouvez-vous les auditoires de l'ISPT&nbsp;?</label>
          <RadioGroup 
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            
          
          >     
            <FormControlLabel {...register("1,auditoire")} value="Tres bien" control={<Radio />} label="Très bien" />
            <FormControlLabel {...register("1,auditoire")} value="Bien" control={<Radio />} label="Bien" />
            <FormControlLabel {...register("1,auditoire")} value="pas du bien" control={<Radio />} label="pas du bien" />
          </RadioGroup>
        </FormControl>

        <FormControl>
          
          <FormLabel id="demo-radio-buttons-group-label">2. 
          Comment trouvez-vous les toillettes des ISPT&nbsp;?</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            
          >
            <FormControlLabel {...register("2,toillete")} value="Très propre" control={<Radio />} label="Très propre" />
            <FormControlLabel {...register("2,toillete")} value="propre" control={<Radio />} label="propre" />
            <FormControlLabel {...register("2,toillete")} value="salle" control={<Radio />} label="salle" />
            <FormControlLabel {...register("2,toillete")} value="Très salle" control={<Radio />} label="Très salle" />
          </RadioGroup>
        </FormControl>

        <FormControl>
          <label id="demo-row-radio-buttons-group-label">3. 
          utilisez-vous la bibliothèque de l'ISPT&nbsp;?</label>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            
          >
            <FormControlLabel {...register("3,bibliotheque")} value="Oui" control={<Radio />} label="Oui" />
            <FormControlLabel {...register("3,bibliotheque")} value="Non" control={<Radio />} label="Non" />
            <FormControlLabel {...register("3,bibliotheque")} value="Je connais pas ça" control={<Radio />} label="Je connais pas ça" />
          </RadioGroup>
          </FormControl>

          <FormControl>
          <label id="demo-row-radio-buttons-group-label">4. 
          Est ce que le labo ou l'atelier est bien equipé ?</label>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            
          >
            <FormControlLabel {...register("4labo", )} value="Très bien equipe" control={<Radio />} label="Très bien equipe" />
            <FormControlLabel {...register("4labo", )} value="bien equipe" control={<Radio />} label="bien equipe" />
            <FormControlLabel {...register("4labo", )} value="pas du tout equipe" control={<Radio />} label="pas du tout equipe" />
          </RadioGroup> 
          </FormControl>

          <FormControl>
          <label id="demo-row-radio-buttons-group-label">5. 
              votre suggestion 
          </label>
          <TextField
            id="filled-basic"
            variant="outlined"
            fullWidth
            size="small"
            type="text"
            {...register("suggestion", {
              required: "Veuillez saisir votre suggestion",
              minLength: {
                value: 4,
                message: "Veuillez saisir votre suggestion",
              },
            })}
          />
        </FormControl>
          
        </Stack>
        <Button
          variant="contained"
          sx={{
            marginTop: 2,
          }}
          type="submit"
        >
          Valider
        </Button>
      </form>
    </Box>
  </Stack>
  )
}
