import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('green');

  const colors = [
    { name: 'GREEN', value: 'green', textColor: 'white' },
    { name: 'BLUE', value: 'blue', textColor: 'white' },
    { name: 'BROWN', value: 'brown', textColor: 'white' },
    { name: 'YELLOW', value: 'yellow', textColor: 'black' }, 
    { name: 'RED', value: 'red', textColor: 'white' },
    { name: 'BLACK', value: 'black', textColor: 'white' },
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: backgroundColor }]}>
      
      {colors.map((colorItem, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.button, { backgroundColor: colorItem.value }]}
          onPress={() => setBackgroundColor(colorItem.value)}
        >
          <Text style={[styles.buttonText, { color: colorItem.textColor }]}>
            {colorItem.name}
          </Text>
        </TouchableOpacity>
      ))}

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    paddingHorizontal: 20,    
  },
  button: {
    paddingVertical: 15,      
    marginBottom: 15,        
    alignItems: 'center',     
    borderRadius: 5,         
    elevation: 3, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;