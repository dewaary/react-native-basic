import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function BasicJavascript() {
  // Tipe Data

  //Primitive
  const name = 'Dewa Ari';
  let usia = 24;
  const jenisKelamin = true;

  //complex

  const hewanPeliharaan = {
    nama: 'Miaw',
    usia: 2,
    jenis: 'Kucing',
    apakahHewanLokal: true,
    warna: 'kuning',
    orangTua: {
      jantan: 'Kaisar',
      betina: 'Kuin',
    },
  };

  const sapaOrang = (name, age) => {
    return console.log(`Hello ${name} usia anda ${age}`);
  };

  const namaOrang = ['Dewa', 'Gede', 'Agung', 'Ari'];

  typeof namaOrang;

  sapaOrang('Dewa', 24);

  //   if(hewanPeliharaan.nama === 'Miaw') {
  //       console.log('Hello Miaw')
  //   } else {
  //       console.log('Hewan siapa ini?')
  //   }

  const sapaHewan = objectHewan => {
    // let hasilSapa = '';
    // if (objectHewan.nama === 'puspus') {
    //   hasilSapa = 'Hallo Miauw';
    // } else {
    //   hasilSapa = 'Ini hewan siapa';
    // }
    // return hasilSapa;

    return objectHewan.nama === 'Miaw' ? 'Hello Miauw, apakabar?' : 'Ini Hewan siapa?'
  };

  return (
    <View style={styles.countainer}>
      <Text style={styles.textTitle}>Materi Basic Javascript React Native</Text>
      <Text>Name: {name}</Text>
      <Text>Age: {usia}</Text>
      <Text>{sapaHewan(hewanPeliharaan)}</Text>
      <Text>{namaOrang[0]}</Text>
      <Text>{namaOrang[1]}</Text>
      <Text>{namaOrang[2]}</Text>
      <Text>==========</Text>
      {namaOrang.map((orang) => (
          <Text>{orang}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  countainer: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
});
