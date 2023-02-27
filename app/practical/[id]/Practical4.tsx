"use client";
import { Typography, Box, Button } from "@mui/material";
import { useState } from "react";

export default function Practical4 () {
    const [array, setArray] = useState([]);

    const generate = (e)=> {
        var invoice = new Array();
        for (var i = 0; i < Math.floor(Math.random()*10)+1; i++) { 
                 
            invoice.push(JSON.stringify(
                {
                    receptor: 'random',
                    fecha: new Date(),
                    importe: Math.floor(Math.random()*10),
                    factura: Math.floor(Math.random()*10)
                }
            ));
        }
        setArray(invoice)
    }

    return (
        <Box sx={{display: "grid", alignItems:"center", gridTemplateRows: "auto minmax(300px, auto)"}}>  
            <Box>
                <Typography variant="h5" justifyContent={"center"}>Practical 4</Typography>
                <Typography variant="subtitle2">
                    Tenemos una api alojada en el dominio pruebas.zendha.net (es ficticio), al realizar
                    una petición a esa api devuelve una matriz de longitud desconocida que incluye
                    objetos con los siguientes 4 datos (receptor, fecha, importe, numero_factura)
                </Typography>
                <Typography variant="subtitle2">
                    Petición a la HTTP a la dirección (prueba.zendha.net) parámetro GET facturas
                    y con su devolución: 
                </Typography>
                <Typography variant="subtitle2">
                    Genera un método para realizar cada una de las siguientes acciones:
                    1. IVA total de los registros devueltos
                    2. Cantidad vendida a cada receptor (teniendo en cuenta que estos pueden
                    repetirse)
                    3. Periodos de las fechas en las que hay facturas.
                    4. Genera una función que al pasar el resultado de los puntos anteriores
                    genere una tabla maquetada en FLEXBOX
                </Typography> 
            </Box>
            <Box sx={{backgroundColor: "white", height: "100%", borderRadius: "5px", padding: "10px"}}>
                <Box sx={{display: "flex", justifyContent: "center", gap: "3rem"}}>
                    <Button variant="contained" onClick={generate} >Generar Arreglo</Button>
                </Box>
                {
                    array.length > 0 &&
                        array.map(item => (
                            <Typography variant="subtitle2" color={"black"}>
                                {item}
                            </Typography>
                        ))
                }
                
            </Box>
        </Box>
    )
}