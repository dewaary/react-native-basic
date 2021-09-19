import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

const Story = props => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image
        source={{
          uri: props.gambar,
        }}
        style={{width: 70, height: 70, borderRadius: 50 / 2}}
      />
      <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.judul}</Text>
    </View>
  );
};

export default function PropsDinamis() {
  return (
    <View>
      <Text>Materi Dinamis Design Props</Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Story
            judul="Youtube Chanel"
            gambar="https://placeimg.com/100/100/arch"
          />
          <Story
            judul="Kelas Online"
            gambar="https://placeimg.com/100/100/people"
          />
          <Story
            judul="Kabayang Coding"
            gambar="https://placeimg.com/100/100/tech"
          />
          <Story
            judul="Dewa Coding"
            gambar="https://placeimg.com/100/100/animals/grayscale"
          />
          <Story
            judul="Permata Coding"
            gambar="https://placeimg.com/100/100/arch/sepia"
          />
          <Story judul="IST Jogja" gambar="https://placeimg.com/100/100/arch" />
          <Story
            judul="React Native Jogja"
            gambar="https://placeimg.com/100/100/arch"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
