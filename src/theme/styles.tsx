import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        backgroundColor: '#ADD8E6' // Fondo celeste
    },
    inputs: {
        width: '90%'
    },
    textHead: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    button: {
        width: '90%',
        backgroundColor: '#0000FF' // Botón azul
    },
    textRedirect: {
        marginTop: 20,
        fontSize: 17,
        fontWeight: 'bold',
        color: '#5322af'
    },
    rootHome: {
        flex: 1,
        marginVertical: 50,
        marginHorizontal: 25
    },
    header: {
        flexDirection: "row",
        gap: 15,
        alignItems: 'center'
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemText: {
        fontSize: 18,
    },
    totalContainer: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        width: '90%',
        alignItems: 'center',
    },
    totalText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    
});