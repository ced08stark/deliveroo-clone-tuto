import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import Currency from "react-currency-formatter";
import { useNavigation } from '@react-navigation/native';


const BasketIcon = () => {
    const navigation = useNavigation()
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal)

    if(items.length===0) return null;
  return (
    <View className="absolute z-50 bottom-10 w-full">
      <TouchableOpacity className="bg-[#00CCBB] rounded-lg p-3 mx-2 flex-row items-center space-x-1" onPress={()=>navigation.navigate('Basket')}>
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">{items.length}</Text>
        <Text className="flex-1 text-white font-extabold text-center">View Basket</Text>
        <Text className="text-lg  text-white font-extrabold">
            <Currency quantity={basketTotal} currency="GBP" />
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default BasketIcon