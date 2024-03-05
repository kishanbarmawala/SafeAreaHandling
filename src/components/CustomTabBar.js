import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CustomTabBar = ({ label, onPress, isFocused }) => {
  return (
    <TouchableOpacity style={styles.tab} onPress={onPress}>
      <Text
        style={[styles.tabLabel, { color: isFocused ? '#008080' : 'black' }]}>
        {label}
      </Text>
      {isFocused && <View style={styles.activeIndicator} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: 60,
    backgroundColor: '#f5f5f5',
  },
  tabLabel: {
    fontSize: 12,
  },
  activeIndicator: {
    height: 3,
    width: '100%',
    backgroundColor: '#008080',
    position: 'absolute',
    bottom: 0,
  },
});

export default CustomTabBar;
