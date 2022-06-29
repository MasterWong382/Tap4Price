/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  DataTable,
} from 'react-native-paper';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;
  return (
    <DataTable.Row>
      <DataTable style={{width: 100, height: 300}}>
        <Text>Noob</Text>
        <Text>Noob</Text>
        <Text>Noob</Text>
        <Text>Noob</Text>
      </DataTable>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
    </DataTable.Row>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
