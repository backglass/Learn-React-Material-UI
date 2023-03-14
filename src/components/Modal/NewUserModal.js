import React, { useState, useEffect} from 'react'
import BasicModal from '../common/BasicModal/BasicModal'
import Box from '@mui/material/Box';
import { TextField } from '@mui/material'; //* Importa el componente TextField de Material UI

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'

const defaultValues = {
    userId: '',
    email: '',
    phoneNumber: '',
}



export const NewUserModal = ({ open, onClose }) => {
    const [values, setValues] = useState(defaultValues)

    const modalStyles = {
        inputFields: {
            display: 'flex',
            flexDirection: 'column',
            marginTop: '20px',
            marginBottom: '15px',
            '.MuiFormControl-root': {
                marginBottom: '20px',
            },
        },
    };

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const validationSchema = Yup.object().shape({
        //TODO Este código establece una validación de esquema para los datos de un usuario.
        //TODO Esto significa que el código define los requisitos que los datos del usuario deben cumplir para ser válidos.
        //TODO Por ejemplo, el ID de usuario es requerido y debe tener al menos 6 caracteres, el email es requerido y debe ser un email 
        //TODO válido, y el número de teléfono debe coincidir con una expresión regular específica.
        //TODO Estas reglas se aplican a los datos del usuario antes de que sean guardados o procesados.

        userId: Yup.string()
        .required("El ID de usuario es requerido")
        .min(6,"El ID de usuario debe tener al menos 6 caracteres"),

        email: Yup.string()
        .required("El email es requerido")
        .email("El email no es válido"),

        phoneNumber: Yup.string()
        .matches(phoneRegExp, "El número de teléfono no es válido")


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
        //console.log(data)
    }

    const handleChange = (value) => {
        setValues(value) //* Guarda el valor del campo en el estado
        console.log(value)
    }
    //* Añade el contenido a la propiedad content del componente BasicModal, para poder añadir los inputs que se necesiten.
    //! Fijate que getContent tiene (contenido ) y no (contenido = {}) 
    const getContent = () => (
        <Box sx={modalStyles.inputFields}>
            <TextField
                placeholder="User ID"
                name="userId"
                label="User ID"
                required
                {...register('userId')}
                error={errors.userId ? true : false}
                helperText={errors.userId?.message}
                onChange={(event) => handleChange({...values,userId: event.target.value})} //* Captura el valor del campo y lo pasa a la función handleChange para que se guarde en el estado.
                
            />
                <TextField
                placeholder='Email'
                name = 'email'
                label='Email'
                required 
                {...register('email')} 
                error = {errors.email ? true : false} 
                helperText = {errors.email?.message} //* Si hay un error, muestra el mensaje de error
                onChange={(event) => handleChange({...values,email: event.target.value})} //* Captura el valor del campo y lo pasa a la función handleChange para que se guarde en el estado.
                />  

            <TextField
                placeholder=''
                name = 'phoneNumber'
                label='Phone Number'
                required //* Campo obligatorio
                {...register('phoneNumber')} //* Añade el hook register al input
                error = {errors.phoneNumber ? true : false} //* Si hay un error, muestra el error
                helperText = {errors.phoneNumber?.message} //* Si hay un error, muestra el mensaje de error
                onChange={(event) => handleChange({...values,phoneNumber: event.target.value})} //* Captura el valor del campo y lo pasa a la función handleChange para que se guarde en el estado.
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
        subTitle="Rellena los campos para crear un nuevo usuario "
        content = {getContent()}  
        onSubmit = {handleSubmit(addUser)} 
    >

    </BasicModal>
  )
}
//! 21:13
export default NewUserModal