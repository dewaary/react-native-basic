import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import IlustrationMyApp from '../../assets/images/SVG1.svg'
 
export default function ReactNativeSvg() {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Materi Menggunakan File SVG didalam React Native</Text>
            <IlustrationMyApp width={244} height={125} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    textTitle: {
        textAlign: 'center'
    }
})
