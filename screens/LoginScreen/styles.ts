import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pressable: {
        backgroundColor: '#633635',
        width: 160,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 50,
        marginBottom: 20,
    },
    pressableText: {
        color: 'white',
        fontWeight: 'bold'
    },
    inputContainer: {
        alignItems: 'center',
        marginTop: 30,
    },
    textInputStyle: {
        padding: 10,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#3c2525',
        color: '#3c2525',
        fontSize: 18,
        opacity: 0.7
    },

});
