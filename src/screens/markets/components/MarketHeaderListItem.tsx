import {StyleSheet, Text, View} from 'react-native';
import React, {memo, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from 'redux-manager/rootReducers';
import {Button} from '@rneui/themed';
import {scale} from 'utils/helpers/device';
import {colors, fonts} from 'assets';

interface Props {
  title: string;
  selectedItem: string;
  setSelectedItem: (selectedItem: string) => void;
}

const MarketHeaderListItem = ({
  title,
  selectedItem,
  setSelectedItem,
}: Props) => {
  const marketHeaderItem = useSelector((state: RootState) =>
    state.market.marketHeader.find(item => item.title === title),
  );
  console.log({title})

  return (
    <View>
      <Button
        onPress={() => {
          setSelectedItem(title);
        }}
        title={title}
        buttonStyle={
          selectedItem === title ? styles.buttonActive : styles.buttonInactive
        }
        titleStyle={
          selectedItem === title
            ? styles.buttonTitleActive
            : styles.buttonTitleInactive
        }
      />
    </View>
  );
};

export default memo(MarketHeaderListItem);

const styles = StyleSheet.create({
  buttonActive: {
    width: scale(78),
    height: scale(32),
    backgroundColor: colors.c6992FF,
    borderRadius: scale(6),
    marginHorizontal: scale(5.5),
  },
  buttonInactive: {
    width: scale(78),
    height: scale(32),
    backgroundColor: colors.cE4E9F9,
    borderRadius: scale(6),
    marginHorizontal: scale(5.5),
  },
  buttonTitleActive: {
    fontFamily: fonts.Roboto.bold,
    fontWeight: '500',
    fontSize: scale(13),
    lineHeight: scale(15.23),
    textAlign: 'center',
    color: colors.white,
  },
  buttonTitleInactive: {
    fontFamily: fonts.Roboto.bold,
    fontWeight: '500',
    fontSize: scale(13),
    lineHeight: scale(15.23),
    textAlign: 'center',
    color: colors.c8E92B2,
  },
});
