import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, {useLayoutEffect, useEffect} from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { QuestionMarkCircleIcon, StarIcon, MapPinIcon, ChevronRightIcon } from "react-native-heroicons/outline"
import DishRow from '../components/DishRow';

import { urlFor } from '../sanity';
import BasketIcon from '../components/BasketIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../features/restaurantSlice';

const RestaurantScreen = () => {
     const navigation = useNavigation();
     const dispatch = useDispatch();
     
     useLayoutEffect(() => {
       navigation.setOptions({
         headerShown: false,
       });
     }, []);

     const {
       params: {
         id,
         imgUrl,
         title,
         rating,
         genre,
         address,
         short_description,
         dishes,
         long,
         lat,
       },
     } = useRoute();

    useEffect(()=>{
      dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
      })
    );}, [])

   
    
  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          <Image
            source={{ uri: urlFor(imgUrl).url() }}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row flex-2 my-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon color="green" opacity={0.4} size={22} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">{rating}</Text> . {genre}
                </Text>
              </View>
              <View className=" flex-row items-center space-x-1">
                <MapPinIcon color="gray" opacity={0.4} size="22" />
                <Text className="text-xs text-gray-500">
                  Nearby . {address}
                </Text>
              </View>
            </View>
            <Text className="text-xs mt-2 pb-4 text-gray-500">
              {short_description}
            </Text>
          </View>
          <TouchableOpacity className="flex-row items-center space-x-2 border-y border-gray-300">
            <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
            <Text classname="pl-2 flex-1 text-ms font-bold">
              have a foods allergy?
            </Text>
            <ChevronRightIcon color="#00CC88" />
          </TouchableOpacity>
        </View>

        <View className="pb-36">
          <Text className="px-4 pt-6 font-bold text-xl">Menu</Text>
          {/* DisheRows */}
          {dishes.map((dishe) => (
            <DishRow
              key={dishe._id}
              id={dishe._id}
              name={dishe.name}
              description={dishe.description}
              price={dishe.price}
              image={dishe.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
}

export default RestaurantScreen