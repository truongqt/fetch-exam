import {Text} from '@rneui/themed';
import {images} from 'assets';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import allActions from 'redux-manager/allActions';
import {MarketHeaderItemModel} from 'redux-manager/market/reducer';
import {RootState} from 'redux-manager/rootReducers';
import {scale} from 'utils/helpers/device';
import MarketHeaderListItem from './components/MarketHeaderListItem';
import MarketsList from './components/MarketsList';

const MarketsScreen = () => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const {marketHeader, isRequesting} = useSelector(
    (state: RootState) => state.market,
  );
  const [selectedItem, setSelectedItem] = useState('');
  const flatlistRef = useRef<FlatList>(null);
  const onPressSelectItem = useCallback((itemTitle: string) => {
    setSelectedItem(() => {
      const index = marketHeader.findIndex(item => item.title === itemTitle);
      flatlistRef.current?.scrollToIndex({
        index: index,
      });
      return itemTitle;
    });
  }, []);

  useEffect(() => {
    dispatch(
      allActions.market.getMarketHeaderRequest({
        callBack: ({data}) => {
          if (data) {
            const response = data as MarketHeaderItemModel[];
            setSelectedItem(response[0].title);
          }
        },
      }),
    );

    dispatch(allActions.market.getMarketsListRequest({}));
  }, []);

  return (
    <LinearGradient
      colors={['#FAFBFE', '#EEF0FA']}
      locations={[0, 1]}
      useAngle={true}
      angle={225}>
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
            />
          )}
          contentContainerStyle={{
            paddingLeft: scale(15),
            paddingBottom: scale(11),
          }}
        />
        <MarketsList />
      </View>
    </LinearGradient>
  );
};

export default MarketsScreen;

const styles = StyleSheet.create({
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
