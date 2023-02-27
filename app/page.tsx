"use client";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Box, Typography } from "@mui/material";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Typography variant="h4" align="center" gutterBottom>
        Bienvenidos a la prueba técnica para Desarrollador de JavaScript
      </Typography>
  </>
  )
}
