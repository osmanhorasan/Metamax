import React from 'react'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'
import ReactDOM from "react-dom/client";

// 1. import `ChakraProvider` component

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
