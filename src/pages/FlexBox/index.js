import React, {Component, useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';

// class FlexBox extends Component {
//   constructor(props) {
//     super(props);
//     console.log('===> constructor');
//     this.state = {
//       subscriber: 100,
//     };
//   }

//   componentDidMount() {
//     console.log('===> component did mount');
//     setTimeout(() => {
//       this.setState({
//         subscriber: 400,
//       });
//     }, 2000);
//   }

//   componentDidUpdate() {
//     console.log('==> component did update');
//   }

//   componentWillUnmount() {
//     console.log('==> component willunmount');
//   }

//   render() {
//     console.log('==> render');
//     return (
//       <View>
//         <View
//           style={{
//             flexDirection: 'row',
//             backgroundColor: '#c8d6e5',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//           }}>
//           <View
//             style={{backgroundColor: 'green', width: 50, height: 50}}></View>
//           <View style={{backgroundColor: 'red', width: 50, height: 50}}></View>
//           <View style={{backgroundColor: 'blue', width: 50, height: 50}}></View>
//           <View
//             style={{backgroundColor: 'yellow', width: 50, height: 50}}></View>
//         </View>
//         <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
//           <Text>Beranda</Text>
//           <Text>Video</Text>
//           <Text>Playlist</Text>
//           <Text>Komunitas</Text>
//           <Text>Channel</Text>
//           <Text>Tentang</Text>
//         </View>
//         <View
//           style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
//           <Image
//             source={{
//               uri: 'https://placeimg.com/100/100/animals',
//             }}
//             style={{width: 100, height: 100, borderRadius: 50, marginRight: 14}}
//           />
//           <View>
//             <Text style={{fontSize: 20, fontWeight: 'bold'}}>
//               Dewa Gede Agung
//             </Text>
//             <Text>{this.state.subscriber} Jt Subscribe</Text>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

const FlexBox = () => {

  const [subscriber, setSubscriber] = useState(200)

  useEffect(() => {
    console.log('Did mount')
    setTimeout(() => {
      setSubscriber(400)
    }, 2000)
    return () => {
      console.log('did upadte')
    }
  }, [subscriber])

  // useEffect(() => {
  //   console.log('Did update')
  //   setTimeout(() => {
  //     setSubscriber(400)
  //   }, 2000)
  // }, [subscriber])

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#c8d6e5',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{backgroundColor: 'green', width: 50, height: 50}}></View>
        <View style={{backgroundColor: 'red', width: 50, height: 50}}></View>
        <View style={{backgroundColor: 'blue', width: 50, height: 50}}></View>
        <View style={{backgroundColor: 'yellow', width: 50, height: 50}}></View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text>Beranda</Text>
        <Text>Video</Text>
        <Text>Playlist</Text>
        <Text>Komunitas</Text>
        <Text>Channel</Text>
        <Text>Tentang</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <Image
          source={{
            uri: 'https://placeimg.com/100/100/animals',
          }}
          style={{width: 100, height: 100, borderRadius: 50, marginRight: 14}}
        />
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Dewa Gede Agung
          </Text>
          <Text>{subscriber} Jt Subscribe</Text>
        </View>
      </View>
    </View>
  );
};

export default FlexBox;
