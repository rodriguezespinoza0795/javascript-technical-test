import './globals.css'
import { Navbar } from '@/components';
import { Box } from "@mui/material";

export const metadata = {
  title: 'Zendha Core',
  description: 'Zendha Core Theoretical and practical test'
}

const navItems = [{
  label: 'Home',
  route:'/'
  }, {
    label: 'Theoretical',
    route:'/theoretical'
  }, {
    label: 'Practical',
    route:'/practical'
  }
]

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <Navbar navItems={navItems}>
            {children}
        </Navbar>
      </body>
    </html>
  )
}
