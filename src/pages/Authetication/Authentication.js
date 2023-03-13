import React, {useState} from "react";
import BasicCard from "../../components/BasicCard/BasicCard"; // importamos el componente BasicCard
import RefreshIcon from '@mui/icons-material/Refresh'; // icono de refrescar
import SearchBar from "../../components/common/SearchBar/SearchBar"; // importamos el componente SearchBar
import { IconButton } from "@mui/material";
import CommonButton from "../../components/common/CommonButton/CommonButton";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import GridWrapper from "../../components/common/GridWrapper/GridWrapper";
import { cardHeaderStyles } from "./styles";

import BasicModal from "../../components/common/BasicModal/BasicModal"; // importamos el componente BasicModal

/* Este código define una función llamada Authentication que devuelve un componente Grid. El componente Grid contiene un componente BasicCard,
que a su vez contiene dos funciones: getHeader y getContent. La función getHeader devuelve un componente SearchBar y un botón para agregar usuarios.
La función getContent devuelve un elemento Typography que muestra el mensaje "No users found".
Esta función se utiliza para autenticar usuarios en la aplicación.
 */
const Authentication = () => {
    const [open, setOpen] = useState(false); // estado para abrir y cerrar el modal

    const getHeader = () => {
       const handleChange = (value) => {
            console.log(value)
        }
        
        //* Añadir usuario y abrir modal
        const addUser = () => {
            setOpen(true) 

            console.log("asignar usuario", open)
        }
       
        return (

        <Box sx={cardHeaderStyles.wrapper}>
            <SearchBar 
                placeholder="Search by email, name or phone"
                onChange={ (event) => handleChange(event.target.value) }
                SearchBarWidth="720px"   
            />
            <Box>
            <CommonButton
                variant={"contained"}
                onClick={addUser}
                size="large"
                sx = {cardHeaderStyles.addUserButton}
                >
                Add User
                </CommonButton>
           <IconButton>
            <RefreshIcon/>
          </IconButton>
        </Box>
        </Box>
        )
    }

    const getContent = () => {
        <Typography
            align="center"
            sx={{ margin: "40px 16px",color: 'rgb(0, 0, 0, 0.6)', fontSize: '1.3rem'}}
        >
            No users found
        </Typography>
    }

    

        return (
        
        <GridWrapper>
            <BasicCard 
            header={getHeader()}
            content={getContent()}
            /> {/* Aqui se le pasa el componente SearchBar como header */}

        <BasicModal open={ open }/>
        </GridWrapper>

        
    )
    }
export default Authentication;