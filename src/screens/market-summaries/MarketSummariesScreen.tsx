import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import allActions from 'redux-manager/allActions';

const MarketSummariesScreen = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allActions.market.getMarketHeaderRequest({}))
  }, [])
  
  return (
    <View style={{padding: 50}}>
      <Text>MarketSummariesScreen</Text>
    </View>
  )
}

export default MarketSummariesScreen

const styles = StyleSheet.create({})