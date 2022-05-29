import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    button: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        backgroundColor: '#832ba9',
        alignItems: 'center'
    },
    textButton: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    inputs:{
        //backgroundColor: 'lightgray'
    },
    imageCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    chart: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    }
});
