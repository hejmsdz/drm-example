import React, {useCallback, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {HWEvent, useTVEventHandler} from '@amazon-devices/react-native-kepler';
import {WebView} from '@amazon-devices/webview';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const App = () => {
  const [isLocalSource, setIsLocalSource] = useState(true);
  const handleTVEvent = useCallback(({eventType, eventKeyAction}: HWEvent) => {
    if (eventType === 'menu' && eventKeyAction === 1) {
      setIsLocalSource((prevValue) => !prevValue);
    }
  }, []);
  useTVEventHandler(handleTVEvent);

  const uri = isLocalSource
    ? 'file:///pkg/assets/index.html'
    : 'https://magenta-cobbler-798f95.netlify.app/';

  return (
    <View style={styles.container}>
      <WebView
        hasTVPreferredFocus
        javaScriptEnabled
        allowSystemKeyEvents
        domStorageEnabled
        allowFileAccess
        source={{uri}}
      />
    </View>
  );
};
