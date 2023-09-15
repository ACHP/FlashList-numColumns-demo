/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useMemo, useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import {FlashList} from '@shopify/flash-list';

function App(): JSX.Element {
  const [dataSize, setDataSize] = useState(100);

  const data = useMemo(() => {
    return [...new Array(dataSize)].map((it, index) => `item_${index}`);
  }, [dataSize]);

  const [numColumns, setNumColumns] = useState(1);

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlashList
        data={data}
        estimatedItemSize={50}
        numColumns={numColumns}
        ListHeaderComponent={() => {
          return (
            <>
              <Button
                title={`numColumns:${numColumns}`}
                onPress={() => {
                  setNumColumns(num => (num === 1 ? 2 : 1));
                }}
              />
              <Button
                title={`data.length:${data.length}`}
                onPress={() => {
                  setDataSize(size => (size === 100 ? 0 : 100));
                }}
              />
            </>
          );
        }}
        stickyHeaderHiddenOnScroll={false}
        renderItem={({item}) => {
          return (
            <View style={[styles.itemStyle]}>
              <Text>{item}</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  itemStyle: {
    height: 50,
    borderColor: 'red',
    borderWidth: 2,
  },
});

export default App;
