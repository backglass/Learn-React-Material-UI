import React from 'react'
import BasicModal from '../common/BasicModal/BasicModal'
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';

export const NewUserModal = ({ open, onClose }) => {
    const modalStyles = {
        inputFields: {
            display: 'flex',
            flexDirection: 'column',
            marigntTop: '20px',
            marginBottom: '15px',
            '.MuiInputRoot': {
                marginBottom: '20px',
            },
        },
    }
 
    //* Añade el contenido a la propiedad content del componente BasicModal, para poder añadir los inputs que se necesiten.
    //! Fijate que getContent tiene (contenido ) y no (contenido = {}) 
    const getContent = () => (
        <Box sx={modalStyles.inputFields}>
            <TextField
                placeholder='User ID'
                name = 'userId'
                label='User ID'
                required
                error
                helperText={'Este campo es obligatorio'}
            />
      </Box>
    )

  return (
    <BasicModal
        open={open}
        onClose={onClose}
        title="New user"
        subTitle="Rellena los campos para crear un nuevo usuario  "
        content = {getContent()} 
        validate = {() => {}}
    >

    </BasicModal>
  )
}

export default NewUserModal