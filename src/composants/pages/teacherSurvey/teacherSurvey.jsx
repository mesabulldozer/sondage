import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';
import './teacherSurvey.css';
// import Radio from './radio';
import { Link, useNavigate } from "react-router-dom";

export default function teacherSurvey() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({});

  const [prof, setProf] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const {
    handleSubmit,
    register,
    reset,
    formState: { data,errors },
  } = useForm('');
  const onSubmit = async (data) => {
  console.log(data);
    
     const res = await axios.post("http://localhost:3000/sondage-prof", data);
    console.log(res);
    if(res.status == 201) {
     reset()
    toast.success("Sondage enregistrer !");
     }
    else {
     reset()
     toast.error("Erreur sondage !");
    }
  }
  let [selectPro, setSelectProf] = useState()
  const student = async() =>{
    
    let data = localStorage.getItem("etudiant")
    data = JSON.parse(data);

const res = await axios.get(`http://localhost:3000/prof?section=${data.section}`);
const Data = await res.data
console.log(Data);

setSelectProf(Data)

  }
  useEffect(() => {
    
    if (!localStorage.getItem("etudiant")) {
      navigate("/login");
    }
    student();
  },[]);

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
        <Typography variant="h3">The Survey Teacher</Typography>
        <form
          style={{
            marginTop: 4,
            color:'black',
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Stack direction={"column"} gap={2}>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Professeur</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Professeur"
              {...register("professeur")}
            >
              {
                selectPro && selectPro.map((item,key)=><MenuItem value={item.nom} key={key}>{item.nom}</MenuItem>)
              }
             
            </Select>
          </FormControl>

          <FormControl >
            <label >1. 
                Recommanderiez-vous votre professeur à un(e) autre étudiant(e)&nbsp;?</label>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              
            >
              
              <FormControlLabel {...register("1,Recommander")} value="oui" control={<Radio />} label="oui" />
              <FormControlLabel {...register("1,Recommander")} value="peut être" control={<Radio />} label="peut être" />
              <FormControlLabel {...register("1,Recommander")} value="pas du tout" control={<Radio />} label="pas du tout" />
              
            </RadioGroup>

            <label id="demo-row-radio-buttons-group-label">2. 
            Dans l'ensemble, Comment avez-vous trouvé le cours&nbsp;?</label>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              
            >
              
              <FormControlLabel {...register("2,trouverCours")} value="Très bien" control={<Radio />} label="Très bien" />
              <FormControlLabel {...register("2,trouverCours")} value="bien" control={<Radio />} label="bien" />
              <FormControlLabel {...register("2,trouverCours")} value="pas bien" control={<Radio />} label="pas bien" />
              
            </RadioGroup>

            <label id="demo-row-radio-buttons-group-label">3. 
            Les explications de votre professeur(e) pendant le cours étaient-elles claires&nbsp;?</label>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
               {...register("3,explication")}
            >
              
              <FormControlLabel {...register("3,explication")} value="Très claire" control={<Radio />} label="Très claire" />
              <FormControlLabel {...register("3,explication")} value="claire" control={<Radio />} label="claire" />
              <FormControlLabel {...register("3,explication")} value="pas du tout claire" control={<Radio />} label="pas du tout claire" />
              
            </RadioGroup>
            <label id="demo-row-radio-buttons-group-label">4. 
            Votre Professeur se sentait-il concerné par le fait question
            les étudiants apprennent leur cours?</label>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
               {...register("4,concerner")}
            >
              
              <FormControlLabel {...register("4,concerner")} value="Très concerné" control={<Radio />} label="Très concerné" />
              <FormControlLabel {...register("4,concerner")} value="concerné" control={<Radio />} label="concerné" />
              <FormControlLabel {...register("4,concerner")} value="pas du tout concerné" control={<Radio />} label="pas du tout concerné" />
              
            </RadioGroup>

            <label id="demo-row-radio-buttons-group-label">5. 
            <span className="user-generated notranslate
                ">
                Comment avez-vous trouvé le rythme du cours&nbsp;?</span></label>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              
            >
             
              <FormControlLabel {...register("5,rythme")} value="Trop rapide" control={<Radio />} label="Trop rapide" />
              <FormControlLabel {...register("5,rythme")} value="Lent" control={<Radio />} label="Lent" />
              <FormControlLabel {...register("5,rythme")} value="Trop Lent" control={<Radio />} label="Trop Lent" />
              <FormControlLabel
                value="disabled"
                disabled
                control={<Radio />}
                label="other"
              />
            </RadioGroup>

            <label id="demo-row-radio-buttons-group-label">6. 
            Votre professeur a-t-il/elle bien répondu aux questions des étudiants&nbsp;?</label>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
               {...register("6,reponsesQuestion")}
            >
              
              <FormControlLabel {...register("6,reponsesQuestion")} value="Très bien" control={<Radio />} label="Très bien" />
              <FormControlLabel {...register("6,reponsesQuestion")} value="Bien" control={<Radio />} label="Bien" />
              <FormControlLabel {...register("6,reponsesQuestion")} value="Mal" control={<Radio />} label="Mal" />
              
            </RadioGroup>

            <label id="demo-row-radio-buttons-group-label">7. 
            <span className="user-generated notranslate
                ">
                Votre professeur est-il/elle instruit(e)&nbsp;?</span></label>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
               {...register("7,instruit")}
            >
              
              <FormControlLabel {...register("7,instruit")} value="Très Instruit" control={<Radio />} label="Très Instruit" />
              <FormControlLabel {...register("7,instruit")} value=" Instruit" control={<Radio />} label=" Instruit" />
              <FormControlLabel {...register("7,instruit")} value="Pas du tout  Instruit" control={<Radio />} label="Pas du tout  Instruit" />
              
            </RadioGroup>
            <label id="demo-row-radio-buttons-group-label">8. 
            La matière du cours est présentée de façon structurée&nbsp;?</label>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              
            >
              <FormControlLabel {...register("8,structure")} value="Très structurée" control={<Radio />} label="Très structurée " />
              <FormControlLabel {...register("8,structure")} value="structurée" control={<Radio />} label="structurée" />
              <FormControlLabel {...register("8,structure")} value="Pas du tout structurée" control={<Radio />} label="Pas du tout structurée" />
              
            </RadioGroup>

            <label id="demo-row-radio-buttons-group-label">9. 
            Le professeur ou la professeure sait susciter l’intérêt des étudiants et étudiantes pour la matière&nbsp;?</label>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
               {...register("9,interet")}
            >
              <FormControlLabel {...register("9,interet")} value="female" control={<Radio />} label="Female" />
              <FormControlLabel {...register("9,interet")} value="male" control={<Radio />} label="Male" />
              <FormControlLabel {...register("9,interet")} value="other" control={<Radio />} label="Other" />
              
            </RadioGroup>

            <label id="demo-row-radio-buttons-group-label">10. 
            Le professeur ou la professeure respecte les étudiants et étudiantes&nbsp;?</label>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              
            >
              <FormControlLabel {...register("10,respect", {required:"error"})} value="female" control={<Radio />} label="Female" />
              <FormControlLabel {...register("10,respect", {required:"error"})} value="male" control={<Radio />} label="Male" />
              <FormControlLabel {...register("10,respect", {required:"error"})} value="other" control={<Radio />} label="Other" />
            </RadioGroup>


            <label id="demo-row-radio-buttons-group-label">11. 
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
