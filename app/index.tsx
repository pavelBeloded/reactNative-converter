import { FlatList, Pressable, SafeAreaView, Text, TextInput, View, StyleSheet, StatusBar } from "react-native";
//constants
import { currencyByBYN } from "@/src/constants";
//Components
import CurrencyButton from "@/components/CurrencyButton";
import { useState } from "react";
import React from "react";

export default function Index() {

  const [inputValue, setInputValue] = useState('')
  const [resultValue, setResultValue] = useState('')
  const [targetCurrency, setTargetCurrency] = useState('')

  function buttonPressed(targetValue: Currency) {
    

    const inputAmount = parseFloat(inputValue)
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`
      setResultValue(result)
      setTargetCurrency(targetValue.name)
    }
  }

  return (
    <>
      <StatusBar
        backgroundColor={'#363636'}
      />
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerInput}>
            <Text style={styles.headerInputText}>BYN</Text>
            <TextInput
              style={styles.input}
              maxLength={14}
              value={inputValue}
              clearButtonMode="always"
              onChangeText={setInputValue}
              keyboardType="number-pad"
              placeholder="Enter amount in BYN"
              placeholderTextColor={"#ffffff"}
            />
          </View>
          {resultValue ? (
            <Text style={styles.resultText}>{resultValue}</Text>
          ) : null}
        </View>
        <View style={styles.listContainer}>
          <FlatList
            style={styles.list}
            numColumns={3}
            data={currencyByBYN}
            keyExtractor={item => item.name}
            renderItem={({ item }) => (
              <Pressable
                style={[styles.button, targetCurrency === item.name ? styles.selected : null]}
                onPress={() => { buttonPressed(item) }}
              >
                <CurrencyButton {...item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Тёмный фон для современного стиля
    padding: 10,
  },
  header: {
    marginBottom: 20,
  },
  headerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#1f1f1f',
    borderRadius: 8,
    padding: 10,
  },
  headerInputText: {
    fontSize: 18,
    color: '#ffffff',
    marginRight: 10,
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    color: '#ffffff',
    fontSize: 16,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff',
  },
  resultText: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  listContainer: {
    flex: 1,
  },
  list: {
    flexGrow: 1,
  },
  button: {
    // Промежутки между кнопками
    width: '30%', // Каждая кнопка занимает 30% ширины контейнера
    margin: '1.5%', // Промежутки между кнопками
    aspectRatio: 1, // Делает кнопки квадратными
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1f1f1f',
    borderRadius: 10,
    elevation: 3, // Тень на Android
    shadowColor: '#000', // Тень на iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  selected: {
    backgroundColor: '#4caf50', // Цвет для выбранной кнопки
  },
  
});
