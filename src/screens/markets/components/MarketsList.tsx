import {colors} from 'assets';
import React, {memo} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import allActions from 'redux-manager/allActions';
import {RootState} from 'redux-manager/rootReducers';
import MarketsListItem from './MarketsListItem';

const MarketsList = () => {
  const dispatch = useDispatch();
  const {marketsList, isRequesting} = useSelector(
    (state: RootState) => state.market,
  );

  const onRefresh = () => {
    dispatch(allActions.market.getMarketsListRequest({}));
  };
  
  return (
    <FlatList
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      data={marketsList}
      keyExtractor={item => item.marketId.toString()}
      renderItem={({item}) => (
        <MarketsListItem key={item.marketId} marketId={item.marketId} />
      )}
      refreshControl={
        <RefreshControl
          refreshing={!!isRequesting}
          onRefresh={onRefresh}
          colors={[colors.black_40_percent]}
        />
      }
    />
  );
};

export default memo(MarketsList);
