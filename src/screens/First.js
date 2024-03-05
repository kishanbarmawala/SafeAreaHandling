import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusbarContext } from '../contexts/StatusbarContext';

export default function First() {
  const { _, setColor } = useContext(StatusbarContext);

  useFocusEffect(
    useCallback(() => {
      setColor('yellow');
    }, [setColor])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{'First screen'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
