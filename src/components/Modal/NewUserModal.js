import React from 'react'
import BasicModal from '../common/BasicModal/BasicModal'
import Box from '@mui/material/Box';
import { TextField } from '@mui/material'; //* Importa el componente TextField de Material UI

import { useForm } from 'react-hook-form'; //* Importa el hook useForm de react-hook-form
import { yupResolver } from '@hookform/resolvers/yup'; //* Importa el hook yupResolver de @hookform/resolvers/yup
import * as yup from 'yup'; //* Importa el hook yup de yup

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
    const validationSchema = yup.object().shape({
        //TODO Este código establece una validación de esquema para los datos de un usuario.
        //TODO Esto significa que el código define los requisitos que los datos del usuario deben cumplir para ser válidos.
        //TODO Por ejemplo, el ID de usuario es requerido y debe tener al menos 6 caracteres, el email es requerido y debe ser un email 
        //TODO válido, y el número de teléfono debe coincidir con una expresión regular específica.
        //TODO Estas reglas se aplican a los datos del usuario antes de que sean guardados o procesados.

        userId: yup.string()
        .required("El ID de usuario es requerido")
        .min(6,"El ID de usuario debe tener al menos 6 caracteres"),

        email: yup.string()
        .required("El email es requerido")
        .email("El email no es válido"),

        phoneNumber: yup.string()
        // .matches(phoneRegExp, "El número de teléfono no es válido")


    })


    const { register, handleSubmit, formState: { errors } } = useForm({ 
        //TODO Este código está usando la función useForm de una biblioteca de React para registrar un formulario, manejar
        //TODO la presentación del formulario y almacenar el estado del formulario.
        //TODO Está pasando una matriz de validación (validationSchema) a la función yupResolver para validar los datos ingresados en el formulario.
        //TODO El objeto devuelto por useForm contiene los métodos register, handleSubmit y formState.
        //TODO El método register se utiliza para registrar los campos del formulario, el método handleSubmit se utiliza para manejar
        //TODO la presentación del formulario y el objeto errors se utiliza para almacenar los errores generados por la validación.

        resolver: yupResolver(validationSchema)
    })


    const addUser = (data) => {
        console.log(data)
    }

    //* Añade el contenido a la propiedad content del componente BasicModal, para poder añadir los inputs que se necesiten.
    //! Fijate que getContent tiene (contenido ) y no (contenido = {}) 
    const getContent = () => (
        <Box sx={modalStyles.inputFields}>
            <TextField
                placeholder='User ID'
                name = 'userId'
                label='User ID'
                required //* Campo obligatorio
                {...register('userId')} //* Añade el hook register al input
                error = {errors.userId ? true : false} //* Si hay un error, muestra el error
                helperText = {errors.userId?.message} //* Si hay un error, muestra el mensaje de error
                />
                <TextField
                placeholder='Email'
                name = 'email'
                label='Email'
                required //* Campo obligatorio
                {...register('email')} //* Añade el hook register al input
                error = {errors.email ? true : false} //* Si hay un error, muestra el error
                helperText = {errors.email?.message} //* Si hay un error, muestra el mensaje de error
                />  

            <TextField
                placeholder=''
                name = 'PhoneNumber'
                label='Phone Number'
                required //* Campo obligatorio
                {...register('phoneNumber')} //* Añade el hook register al input
                error = {errors.phoneNumber ? true : false} //* Si hay un error, muestra el error
                helperText = {errors.phoneNumber?.message} //* Si hay un error, muestra el mensaje de error
                />
           
      </Box>
    )


 

  return (
    //TODO Este código es un componente de React que se utiliza para mostrar una ventana modal.
    //TODO La ventana modal contiene un título, un subtítulo, contenido y un botón de validación.
    //TODO El parámetro open controla si la ventana modal se muestra o no.
    //TODO El parámetro onClose controla qué sucede cuando el usuario cierra la ventana modal.
    //TODO El parámetro getContent() devuelve el contenido que se mostrará en la ventana modal.
    //TODO El parámetro handleSubmit(addUser) añade el hook handleSubmit al botón de validación para que cuando el usuario haga clic en el botón,
    //TODO se llame a la función addUser para agregar al nuevo usuario.
    <BasicModal
        open={open}
        onClose={onClose}
        title="New user"
        subTitle="Rellena los campos para crear un nuevo usuario  "
        content = {getContent()} 
        validate = {handleSubmit(addUser)} //* Cuando el usuario haga clic en el botón de validación, se llamará a la función addUser. a través del hook handleSubmit
    >

    </BasicModal>
  )
}

export default NewUserModal