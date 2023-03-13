import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CommonButton from '../CommonButton/CommonButton';
import { modalStyles } from './styles';


//* Este código es una función que devuelve un componente de Modal básico. Esta función toma los parámetros open
//* , onClose, title, subTitle, content y onSubmit.
//* El componente Modal se abre cuando el parámetro open es verdadero y se cierra cuando el parámetro onClose se activa.
//* El título y el subtítulo se definen a través de los parámetros title y subTitle respectivamente.
//* El contenido del modal se define a través del parámetro content. Por último, el parámetro onSubmit define la
//* acción que se ejecuta cuando el usuario hace clic en el botón Enviar.


// Este componente de React renderiza un modal básico con un título, subtítulo, contenido y botones de envío y cancelación.
const BasicModal = ({ open, onClose, title, subTitle, content, onSubmit }) => {

  // Se llama al componente Modal de la biblioteca @mui/material, pasándole los props recibidos.
  return (
      <Modal open={open} onClose={onClose} >
          {/* El siguiente Box contiene el contenido del modal */}
          <Box sx={modalStyles.wrapper}>
              {/* La siguiente Typography muestra el título del modal */}
              <Typography
                  variant="h6"
                  component="h2"
              >
                  {title}
              </Typography>
              {/* La siguiente Typography muestra el subtítulo del modal */}
              <Typography sx={{ mt: 2 }}>
                  {subTitle}
              </Typography>
              {/* La siguiente línea renderiza el contenido del modal que se le pasó como prop */}
              {content}
              {/* El siguiente Box contiene los botones de envío y cancelación */}
              <Box sx={modalStyles.buttons}>
                  {/* El siguiente CommonButton es para enviar el formulario */}
                  <CommonButton
                      variant="contained"
                      onClick={onSubmit}
                  >
                      Submit
                  </CommonButton>
                  {/* El siguiente CommonButton es para cancelar el modal */}
                  <CommonButton onClick={onClose}>Cancel</CommonButton>
              </Box>
          </Box>
      </Modal>
  )
}

// Se exporta el componente BasicModal para ser usado en otras partes del código.
export default BasicModal
