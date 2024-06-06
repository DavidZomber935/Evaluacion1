import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Snackbar, Text, TextInput } from 'react-native-paper';
import { styles } from '../theme/styles';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../configs/firebaseConfig';
import { CommonActions, useNavigation } from '@react-navigation/native';

interface FormRegister {
    email: string;
    password: string;
}

interface MessageSnackBar {
    visible: boolean;
    message: string;
    color: string;
}

export const RegisterScreen = () => {
    const [formRegister, setFormRegister] = useState<FormRegister>({
        email: "",
        password: ""
    });

    const [showMessage, setShowMessage] = useState<MessageSnackBar>({
        visible: false,
        message: '',
        color: '#fff'
    });

    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

    const navigation = useNavigation();

    const handlerSetValues = (key: string, value: string) => {
        setFormRegister({ ...formRegister, [key]: value });
    }

    const handlerRegister = async () => {
        const { email, password } = formRegister;

        // Validación de email
        if (!email.includes('@')) {
            setShowMessage({
                visible: true,
                message: 'Correo no es válido, debe contener un @',
                color: '#b53333'
            });
            return;
        }

        // Validación de contraseña
        if (password.length < 6) {
            setShowMessage({
                visible: true,
                message: 'La contraseña debe tener al menos 6 caracteres',
                color: '#b53333'
            });
            return;
        }

        if (!email || !password) {
            setShowMessage({
                visible: true,
                message: 'Completa todos los campos!',
                color: '#b53333'
            });
            return;
        }

        try {
            const response = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            setShowMessage({
                visible: true,
                message: 'Registro exitoso!',
                color: '#146525'
            });
        } catch (ex) {
            console.log(ex);
            setShowMessage({
                visible: true,
                message: 'No se logró completar el registro, intente más tarde',
                color: '#b53333'
            });
        }
    }

    return (
        <View style={styles.root}>
            <Text style={styles.textHead}>Regístrate</Text>
            <TextInput
                mode='outlined'
                label='Correo'
                placeholder='Escriba su correo'
                style={styles.inputs}
                onChangeText={(value) => handlerSetValues('email', value)} />
            <TextInput
                mode='outlined'
                label='Contraseña'
                placeholder='Escriba su contraseña'
                secureTextEntry={hiddenPassword}
                right={<TextInput.Icon icon="eye"
                    onPress={() => setHiddenPassword(!hiddenPassword)} />}
                style={styles.inputs}
                onChangeText={(value) => handlerSetValues('password', value)} />
            <Button style={styles.button} mode="contained" onPress={handlerRegister}>
                Registrar
            </Button>
            <Text
                style={styles.textRedirect}
                onPress={() => navigation.dispatch(CommonActions.navigate({ name: "Login" }))}>
                Ya tienes una cuenta? Inicia sesión
            </Text>
            <Snackbar
                visible={showMessage.visible}
                onDismiss={() => setShowMessage({ ...showMessage, visible: false })}
                style={{ backgroundColor: showMessage.color }}>
                {showMessage.message}
            </Snackbar>
        </View>
    )
}