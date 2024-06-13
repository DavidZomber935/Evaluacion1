import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f0f0f0', // Fondo gris claro
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
    commentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        width: '90%',
    },
    commentContent: {
        flex: 1,
    },
    commentEmail: {
        fontWeight: 'bold',
    },
    commentText: {
        marginTop: 5,
    },
    arrow: {
        fontSize: 24,
        color: '#000',
    },
    modal: {
        backgroundColor: 'white',
        padding: 20,
        margin: 20,
        borderRadius: 10,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    input: {
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    detailText: {
        fontSize: 18,
        marginVertical: 5,
    },
});