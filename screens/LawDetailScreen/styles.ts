import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    title: {
        marginHorizontal: 20,
        marginVertical: 10
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    description: {
        marginHorizontal: 20
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
