import React from 'react';
import {StyleSheet, Text, View, Image, Touchable, TouchableOpacity} from 'react-native';
import macbook from '../../assets/images/image1.jpg';

export default function Product(props) {
  return (
    <View style={styles.wrapper}>
      <Image source={macbook} style={styles.imageProduct} />
      <Text style={styles.productName}>New MacBook Pro 2021</Text>
      <Text style={styles.productPrice}>Rp. 25.000.000</Text>
      <Text style={styles.productLocation}>Kotagede Yogyakarta</Text>
      <TouchableOpacity onPress={props.onButtonPress}>

      <View style={styles.button}>
        <Text style={styles.buttonLabel}>Beli</Text>
      </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    backgroundColor: '#F2F2F2',
    width: 212,
    borderRadius: 8,
  },
  imageProduct: {
    width: 188,
    height: 107,
    borderRadius: 8,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 16,
  },
  productPrice: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 12,
    color: 'blue',
  },
  productLocation: {
    fontSize: 12,
    fontWeight: '300',
    marginTop: 12,
  },
  button: {
    backgroundColor: '#6FCF97',
    paddingVertical: 6,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});
