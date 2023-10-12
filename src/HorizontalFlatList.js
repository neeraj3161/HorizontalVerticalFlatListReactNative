import React from 'react';
import { View, FlatList, Text, StyleSheet,Button, ScrollView } from 'react-native';

const data = [
  { key: '1', text: 'Item 1' },
  { key: '2', text: 'Item 2' },
  { key: '3', text: 'Item 3' },
  { key: '4', text: 'Item 5' },
  { key: '5', text: 'Item 6' },
  { key: '6', text: 'Item 7' },
  { key: '7', text: 'Item 8' },
  { key: '8', text: 'Item 9' },
  { key: '9', text: 'Item 10' },
  { key: '10', text: 'Item 11' },
  { key: '11', text: 'Item 12' },
  { key: '12', text: 'Item 13' },
  { key: '13', text: 'Item 14' },
  { key: '14', text: 'Item 15' },
  // Add more items as needed
];

const HorizontalFlatList = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <FlatList
        style={styles.flatlist}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Button style={styles.item} title={item.text}/>}
      />


<FlatList
        style={styles.flatlist2}
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Button style={styles.item} title={item.text}/>}
      />

<FlatList
        style={styles.flatlist}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Button style={styles.item} title={item.text}/>}
      />


<FlatList
        style={styles.flatlist2}
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Button style={styles.item} title={item.text}/>}
      />


<FlatList
        style={styles.flatlist}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Button style={styles.item} title={item.text}/>}
      />


<FlatList
        style={styles.flatlist2}
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Button style={styles.item} title={item.text}/>}
      />


<FlatList
        style={styles.flatlist}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Button style={styles.item} title={item.text}/>}
      />


<FlatList
        style={styles.flatlist2}
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Button style={styles.item} title={item.text}/>}
      />


<FlatList
        style={styles.flatlist}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Button style={styles.item} title={item.text}/>}
      />


<FlatList
        style={styles.flatlist2}
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Button style={styles.item} title={item.text}/>}
      />



<FlatList
        style={styles.flatlist}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Button style={styles.item} title={item.text}/>}
      />


<FlatList
        style={styles.flatlist2}
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Button style={styles.item} title={item.text}/>}
      />



<FlatList
        style={styles.flatlist}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Button style={styles.item} title={item.text}/>}
      />


<FlatList
        style={styles.flatlist2}
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Button style={styles.item} title={item.text}/>}
      />



<FlatList
        style={styles.flatlist}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Button style={styles.item} title={item.text}/>}
      />


<FlatList
        style={styles.flatlist2}
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Button style={styles.item} title={item.text}/>}
      />



<FlatList
        style={styles.flatlist}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Button style={styles.item} title={item.text}/>}
      />


<FlatList
        style={styles.flatlist2}
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Button style={styles.item} title={item.text}/>}
      />



<FlatList
        style={styles.flatlist}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Button style={styles.item} title={item.text}/>}
      />


<FlatList
        style={styles.flatlist2}
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Button style={styles.item} title={item.text}/>}
      />


<FlatList
        style={styles.flatlist}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Button style={styles.item} title={item.text}/>}
      />


<FlatList
        style={styles.flatlist2}
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Button style={styles.item} title={item.text}/>}
      />
    </ScrollView>

    

    
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  flatlist: {
    backgroundColor: 'tomato',
    minHeight: 50, // Adjust this value as needed
    maxHeight: 50, // Adjust this value as needed
  },
  flatlist2: {
    backgroundColor: 'tomato',
    minHeight: 150, // Adjust this value as needed
    maxHeight: 150, // Adjust this value as needed
  },
  item: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    backgroundColor: 'white',
  },
});

export default HorizontalFlatList;
