"use client";
import Link from 'next/link';
import { Card, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function PracticalTest () {
    return (
        <>
            <h1>Practical</h1>
            <Card sx={{ margin: "1rem", padding: "1.5rem", width: "300px" }}>
                <Link href='practical/1'>
                    <Typography
                        variant="h5"
                        gutterBottom
                        fontWeight="bold"
                        sx={{
                        display: "flex",
                        alignItems: "center",
                        }}
                    >
                        {'EJERCICIO 1: LÓGICAS'} <ArrowForwardIcon />
                    </Typography>  
                </Link>
            </Card>
            <Card sx={{ margin: "1rem", padding: "1.5rem", width: "300px" }}>
                <Link href='practical/2'>
                    <Typography
                        variant="h5"
                        gutterBottom
                        fontWeight="bold"
                        sx={{
                        display: "flex",
                        alignItems: "center",
                        }}
                    >
                        {'EJERCICIO 2: LÓGICAS'} <ArrowForwardIcon />
                    </Typography>  
                </Link>
            </Card>
            <Card sx={{ margin: "1rem", padding: "1.5rem", width: "300px" }}>
                <Link href='practical/3'>
                    <Typography
                        variant="h5"
                        gutterBottom
                        fontWeight="bold"
                        sx={{
                        display: "flex",
                        alignItems: "center",
                        }}
                    >
                        {'EJERCICIO 3: POSICIONAMIENTO'} <ArrowForwardIcon />
                    </Typography>  
                </Link>
            </Card>
            <Card sx={{ margin: "1rem", padding: "1.5rem", width: "300px" }}>
                <Link href='practical/4'>
                    <Typography
                        variant="h5"
                        gutterBottom
                        fontWeight="bold"
                        sx={{
                        display: "flex",
                        alignItems: "center",
                        }}
                    >
                        {'EJERCICIO 4: RENDIMIENTOS'} <ArrowForwardIcon />
                    </Typography>  
                </Link>
            </Card>
        </>
    )
}



