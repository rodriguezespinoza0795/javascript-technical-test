"use client";
import { Typography, Box, TextField, Button } from "@mui/material";
import { useState } from "react";

export default function Practical2 () {
    const [value, setValue] = useState(0);
    const [array, setArray] = useState([]);

    const handleOnChange = (e)=> {
        setValue(e.target.value)
    }

    const generate = (e)=> {
        if ( value > 0) {
            var numbers = new Array();
            for (var i = 0; i < value; i++) {            
                var val = Math.round(Math.random()*10)+1;
                numbers.push(val);
            }
            setArray(numbers)
        }
    }

    return (
        <Box sx={{display: "grid", alignItems:"center", gridTemplateRows: "auto minmax(300px, auto)"}}>  
            <Box>
                <Typography variant="h5" justifyContent={"center"}>Practical 2</Typography>
                <Typography variant="subtitle2">
                    Tienes un arreglo con 20 elementos (enteros en el rango de 1 a 9). Escribe un
                    programa en el lenguaje preferido que imprima el número que tiene más
                    ocurrencias seguidas en arreglo y también imprimir la cantidad de veces que
                    aparece en la secuencia.
                </Typography>
                <Typography variant="subtitle2">
                    El programa debe analizar el arreglo de derecha a izquierda para que en caso de
                    que dos números cumplan la condición el que aparece por primera vez sea el que
                    se imprima.
                </Typography> 
            </Box>
            <Box sx={{backgroundColor: "white", height: "100%", borderRadius: "5px", padding: "10px"}}>
                <Box sx={{display: "flex", justifyContent: "center", gap: "3rem"}}>
                    <TextField id="outlined-basic" label="Escribe un número" variant="outlined" type="number" onChange={handleOnChange}/>
                    <Button variant="contained" onClick={generate} >Generar Arreglo</Button>
                </Box>
                <Typography variant="subtitle2" color={"black"}>
                    Value: {value}
                </Typography>
                <Typography variant="subtitle2" color={"black"}>
                    {
                        array.length > 0 &&
                            `Arreglo: ${array}` 
                    }
                </Typography>
            </Box>
        </Box>
    )
}