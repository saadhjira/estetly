'use client'; 
import './styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';



export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}