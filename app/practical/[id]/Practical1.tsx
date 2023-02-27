"use client";
import { Typography, Box, TextField, Button } from "@mui/material";
import { useState } from "react";

export default function Practical1 () {
    const [value, setValue] = useState(0);
    const [matriz, setMatriz] = useState([]);

    const handleOnChange = (e:any)=> {
        setValue(e.target.value)
    }

    const calculate = ()=> {
        if ( value > 0) {
            setMatriz([value as never]);
        }
    }

    return (
        <Box sx={{display: "grid", alignItems:"center", gridTemplateRows: "auto minmax(300px, auto)"}}>  
            <Box>
                <Typography variant="h5" justifyContent={"center"}>Practical 1</Typography>
                <Typography variant="subtitle2">
                    Escribe un programa en PHP, JS o Python que imprima una X construida a base de
                    los símbolos /, \ y X (barra, contrabarra y letra X) y utilizar un doble espacio cuando
                    no haya carácter.
                </Typography>
                <Typography variant="subtitle2">
                    El tamaño de la x se basa en una variable n que indicará la altura de la letra para
                    imprimir (en una matríz de n x n)
                </Typography> 
            </Box>
            <Box sx={{backgroundColor: "white", height: "100%", borderRadius: "5px", padding: "10px"}}>
                <Box sx={{display: "flex", justifyContent: "center", gap: "3rem"}}>
                    <TextField id="outlined-basic" label="Escribe un número" variant="outlined" onChange={handleOnChange} type="number" />
                    <Button variant="contained" onClick={calculate}>Calcular</Button>
                </Box>
                <Typography variant="subtitle2" color={"black"}>
                    Value = {value}
                </Typography>
                <Typography variant="subtitle2" color={"black"}>
                    {
                        matriz.length > 0 &&
                            `Construyendo matriz de con el número ${matriz[0]}...` 
                    }
                </Typography>
                
            </Box>
        </Box>
    )
}