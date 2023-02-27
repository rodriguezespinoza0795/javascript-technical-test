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

      <div style={{paddingTop: '20px'}}>
        <Typography variant="h5" align="center" gutterBottom>
          Tecnologías utilizadas en este proyecto:
        </Typography>
        <ul>
          <li><Typography variant="h6" align="center" gutterBottom>Next.js</Typography></li>
          <li><Typography variant="h6" align="center" gutterBottom>Material UI</Typography></li>
          <li><Typography variant="h6" align="center" gutterBottom>Typescript</Typography></li>
          <li><Typography variant="h6" align="center" gutterBottom>ESLint</Typography></li>
        </ul>
      </div>
  </>
  )
}
