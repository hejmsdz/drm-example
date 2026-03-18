import React from 'react';
import {View, StyleSheet} from 'react-native';
import {WebView} from '@amazon-devices/webview';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const App = () => {
  return (
    <View style={styles.container}>
      <WebView
        hasTVPreferredFocus
        javaScriptEnabled
        allowSystemKeyEvents
        domStorageEnabled
        allowFileAccess
        source={{uri: 'file:///pkg/assets/index.html'}}
      />
    </View>
  );
};
