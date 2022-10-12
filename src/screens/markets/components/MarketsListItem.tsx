import {Image as EImage} from '@rneui/themed';
import {colors, fonts} from 'assets';
import React, { memo } from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from 'redux-manager/rootReducers';
import {COIN_ICON, COIN_NAME} from 'utils/helpers/constants';
import {scale} from 'utils/helpers/device';

interface Props {
  marketId: number;
}

const MarketsListItem = ({marketId}: Props) => {
  const marketHeaderItem = useSelector((state: RootState) =>
    state.market.marketsList.find(item => item.marketId === marketId),
  );

  const renderLeftComponent = () => (
    <View style={styles.leftContainer}>
      <EImage
        source={{
          uri: COIN_ICON?.replace(
            COIN_NAME,
            marketHeaderItem?.market?.split('-')[1].toLocaleLowerCase() || '',
          ),
        }}
        containerStyle={styles.coinIcon}
        PlaceholderContent={<ActivityIndicator />}
      />
      <View style={styles.titleColumn}>
        <Text style={styles.title}>
          {marketHeaderItem?.market?.split('-')[1]}
        </Text>
        <Text style={styles.subTitle}>{marketHeaderItem?.market}</Text>
      </View>
    </View>
  );

  const renderRightComponent = () => (
    <View>
      <Text style={styles.price}>{`$${
        (marketHeaderItem?.lastPrice &&
          (marketHeaderItem?.lastPrice).toLocaleString()) ||
        0
      }`}</Text>
      <Text style={styles.percent}>
        {`${
          (marketHeaderItem?.high &&
            marketHeaderItem?.low &&
            (marketHeaderItem?.high / marketHeaderItem?.low).toFixed(2)) ||
          0
        }%`}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {renderLeftComponent()}
      {renderRightComponent()}
    </View>
  );
};

export default memo(MarketsListItem);

const styles = StyleSheet.create({
  container: {
    shadowColor: colors.cEBEDFB,
    elevation: 20,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.2,
    marginHorizontal: scale(10),
    paddingHorizontal: scale(18),
    borderRadius: scale(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: scale(74),
    marginBottom: scale(11),
    backgroundColor: colors.white,
  },
  coinIcon: {
    aspectRatio: 1,
    width: scale(38),
  },
  titleColumn: {
    justifyContent: 'center',
    marginLeft: scale(15),
  },
  title: {
    fontFamily: fonts.Roboto.bold,
    fontWeight: '700',
    fontSize: scale(15),
    lineHeight: scale(18.75),
    color: colors.c3D436C,
    letterSpacing: scale(0.3),
    marginBottom: scale(4),
  },
  subTitle: {
    fontFamily: fonts.Roboto.regular,
    fontWeight: '300',
    fontSize: scale(14),
    lineHeight: scale(18),
    color: colors.c8E92B2,
    letterSpacing: scale(0.3),
  },
  leftContainer: {
    flexDirection: 'row',
  },
  price: {
    fontFamily: fonts.Roboto.regular,
    fontWeight: '300',
    fontSize: scale(15),
    lineHeight: scale(17.58),
    color: colors.c3D436C,
    textAlign: 'right',
    marginBottom: scale(5),
  },
  percent: {
    fontFamily: fonts.Roboto.regular,
    fontWeight: '300',
    fontSize: scale(13),
    lineHeight: scale(18),
    color: colors.c3BBA7D,
    textAlign: 'right',
  },
});
