import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import Communication from './pages/Communication';
import FlexBox from './pages/FlexBox';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import Position from './pages/Position';
import StylingReactNativeComponent from './pages/StylingComponent';
import BasicJavascript from './pages/BasicJavascript';
import ReactNativeSvg from './pages/ReactNativeSvg';
import CallAPIVanilla from './pages/CallAPIVanilla';
import CallAPIAxios from './pages/CallAPIAxios';
// import SampleComponent from './pages/SampleComponent';

const App = () => {
  const [isShow, setIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsShow(false);
    }, 6000);
  });
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent /> */}
        {/* <StylingReactNativeComponent /> */}
        {/* <FlexBox /> */}
        {/* <Position /> */}
        {/* <PropsDinamis /> */}
        {/* <StateDinamis /> */}
        {/* <Communication /> */}
        {/* <BasicJavascript /> */}
        {/* <ReactNativeSvg /> */}
        {/* <CallAPIVanilla /> */}
        <CallAPIAxios />
      </ScrollView>
    </View>
  );
};

export default App;
