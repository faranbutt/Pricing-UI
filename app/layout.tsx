"use client"
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

export default function RootLayout({ children }:{children: React.ReactNode}){
  return (
    <html>
      <head></head>
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}