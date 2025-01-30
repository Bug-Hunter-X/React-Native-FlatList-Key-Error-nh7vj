```javascript
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const data = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
];

const FlatListSolution = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id} // Correctly using unique 'id' as key
      renderItem={({ item }) => (
        <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
          <Text>{item.title}</Text>
        </View>
      )}
    />
  );
};

export default FlatListSolution;
```