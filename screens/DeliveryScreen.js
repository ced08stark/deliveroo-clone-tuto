import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import MapView from "react-native-maps";
import * as Progress from "react-native-progress";
import { XMarkIcon } from 'react-native-heroicons/outline';
import { Marker } from 'react-native-maps';




const DeliveryScreen = () => {


    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
  return (
    <View className="bg-[#00CCBB] flex-1 pt-5">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-4">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon size={33} color="white" />
          </TouchableOpacity>
          <Text className="text-white">Order Help</Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-3xl font-bold">45-55 Minutes</Text>
            </View>
            <Image
              source={{
                uri: "https://links.papareact.com/fls",
              }}
              className="h-20 w-20"
            />
          </View>
          <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />
          <Text className="mt-3 text-gray-500">
            Your order at {restaurant.name} is being prepared
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: 51.519238,
            longitude: -0.132349,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          pinColor="#00CCBB"
        />
      </MapView>
    </View>
  );
}

export default DeliveryScreen