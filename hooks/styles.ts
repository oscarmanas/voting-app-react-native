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
        backgroundColor: '#fa4848',
        alignItems: 'center'
    },
    textButton: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    inputs: {
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
    },
    pressableOn: {
        backgroundColor: '#fa4848',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    pressableOff: {
        backgroundColor: 'transparent',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    textOn: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 17
    },
    textOff: {
        fontWeight: 'bold',
        color: 'gray',
        fontSize: 17
    },
    pressableCreate: {
        marginTop: 30,
        paddingHorizontal: 40,
        height: 40,
        backgroundColor: '#fa4848',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
});
