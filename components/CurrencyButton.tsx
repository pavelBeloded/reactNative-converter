import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import type { PropsWithChildren } from 'react'

type CurrencyButtonProps = PropsWithChildren<{
    name: string;
    symbol: string;
}>

export default function CurrencyButton (props: CurrencyButtonProps):JSX.Element{
    return(
        <View style={styles.buttonContainer}>
            <Text style={styles.buttonSymbol}>{props.symbol}</Text>
            <Text style={styles.buttonName}>{props.name}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSymbol: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  buttonName: {
    fontSize: 14,
    color: '#b0b0b0',
  },


})
