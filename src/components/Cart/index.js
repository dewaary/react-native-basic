import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import cart from '../../assets/icons/image2.jpg';

export default function Cart(props) {
  return (
    <View>
      <View style={styles.wrapper}>
        <View style={styles.cartWrapper}>
          <Image source={cart} style={styles.IconCart} />
          <Text style={styles.notif}>{props.quantity}</Text>
        </View>
        <Text style={styles.text}>Keranjang Belanja Anda</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  IconCart: {
    width: 50,
    height: 50,
  },
  text: {
    marginTop: 8,
    fontWeight: '700',
    fontSize: 12,
    color: '#777777',
  },
  notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#6fcf97',
    padding: 4,
    borderRadius: 15,
    width: 24,
    height: 24,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  cartWrapper: {
    borderWidth: 1,
    borderColor: 'blue',
    width: 93,
    height: 83,
    borderRadius: 93 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop: 40,
  },
});
