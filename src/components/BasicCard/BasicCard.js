import React from 'react'
import Card from '@mui/material/Card'; // tarjeta

import CardContent from '@mui/material/CardContent'; // contenido de la tarjeta


// 
export const BasicCard = ({ header, content}) => {
    // recibe como parametro header y content las propiedades que se le pasan al componente
  return (
    
    <Card > 
        {header}
        <CardContent>
            {content}
        </CardContent>


    </Card>
   
  )
}

export default BasicCard