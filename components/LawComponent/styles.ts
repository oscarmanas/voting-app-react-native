import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'row',
        margin: 15
    },
    containerRight:{
        marginLeft: 10,
        width: '20%',
    },
    containerLeft: {
        width: '80%'
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    normalText: {
        fontSize: 14,
    }
});
