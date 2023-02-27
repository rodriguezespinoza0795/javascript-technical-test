"use client";
import { Typography, Box, TextField, Button } from "@mui/material";
import { useState } from "react";

export default function Practical3 () {
    const [coordinates, setCoordinates] = useState([]);

    const generate = (e:any)=> {
        var cord = new Array();
        for (var i = 0; i < 4; i++) {            
            var val = Math.floor(Math.random()*10);
            cord.push(val);
        }
        setCoordinates(cord as never)
    }

    return (
        <Box sx={{display: "grid", alignItems:"center", gridTemplateRows: "auto minmax(300px, auto)"}}>  
            <Box>
                <Typography variant="h5" justifyContent={"center"}>Practical 3</Typography>
                <Typography variant="subtitle2">
                    Pensemos que tenemos de 2 puntos en un plano bidimensiones, y tenemos las
                    coordenadas xy de esos dos puntos, por ejemplo [3,5] y [4,1]. Genera una algoritmo
                    que se le ingrese las posiciones de los dos puntos y devuelva el calculo la distancia
                    en línea recta entre los dos puntos.
                </Typography>
            </Box>
            <Box sx={{backgroundColor: "white", height: "100%", borderRadius: "5px", padding: "10px"}}>
                <Box sx={{display: "flex", justifyContent: "center", gap: "3rem"}}>
                    <Button variant="contained" onClick={generate} >Generar Arreglo</Button>
                </Box>
                <Typography variant="subtitle2" color={"black"}>
                {
                        coordinates.length > 0 &&
                            `Coordenadas: [${coordinates.slice(0,2)}], [${coordinates.slice(2,4)}] ` 
                    }
                </Typography>
            </Box>
        </Box>
    )
}