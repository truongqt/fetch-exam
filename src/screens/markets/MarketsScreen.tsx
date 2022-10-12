import {FlatList, Image, StyleSheet, View} from 'react-native';
import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import allActions from 'redux-manager/allActions';
import {useTranslation} from 'react-i18next';
import {scale} from 'utils/helpers/device';
import {Button, Text} from '@rneui/themed';
import {images} from 'assets';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RootState} from 'redux-manager/rootReducers';
import MarketHeaderListItem from './components/MarketHeaderListItem';
import {MarketHeaderItemModel} from 'redux-manager/market/reducer';

const MarketsScreen = () => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const {marketHeader} = useSelector((state: RootState) => state.market);
  const [selectedItem, setSelectedItem] = useState('');
  const flatlistRef = useRef<FlatList>(null);

  const onPressSelectItem = useCallback((itemTitle: string) => {
    const index = marketHeader.findIndex(item => (item.title === itemTitle));
    flatlistRef.current?.scrollToIndex({
      index: index,
    });
    setSelectedItem(itemTitle);
  }, []);

  useEffect(() => {
    dispatch(
      allActions.market.getMarketHeaderRequest({
        callBack: ({data, error}) => {
          if (data) {
            const response = data as MarketHeaderItemModel[];
            setSelectedItem(response[0].title);
          }
        },
      }),
    );
  }, []);

  return (
    <View style={{paddingTop: scale(21 + insets.top / 2)}}>
      <View style={styles.topRow}>
        <Text>{t('MARKETS')}</Text>
        <Image source={images.search_icon} style={styles.searchIcon} />
      </View>
      <FlatList
        ref={flatlistRef}
        keyboardShouldPersistTaps="handled"
        horizontal
        showsHorizontalScrollIndicator={false}
        data={marketHeader}
        keyExtractor={item => item.title}
        renderItem={({item}) => (
          <MarketHeaderListItem
            key={item.title}
            title={item.title}
            selectedItem={selectedItem}
            setSelectedItem={itemTitle => {
              onPressSelectItem(itemTitle);
            }}
            // setSelectedItem={setSelectedItem}
          />
        )}
        contentContainerStyle={{
          paddingLeft: scale(15),
        }}
      />
      <Button
      title='test'
      onPress={()=>{
        setFirst(Math.random())
      }}
      />
    </View>
  );
};

export default memo(MarketsScreen);

const styles = StyleSheet.create({
  container: {},
  topRow: {
    marginLeft: scale(28),
    marginRight: scale(19),
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: scale(20),
  },
  searchIcon: {
    width: scale(18),
    height: scale(18),
    resizeMode: 'contain',
  },
});
