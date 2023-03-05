import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import {ArrowRightIcon} from "react-native-heroicons/outline"
import RestaurantCard from './RestaurantCard'
import sanityClient from '../sanity'


const FeaturedRow = ({id, title, description}) => {

  const [restaurants, setRestaurants] = useState([]);

  useEffect(()=>{
    sanityClient
      .fetch(
        `
          *[_type == "featured" && _id == $id] {
            ...,
            restaurants[]->{
            ...,
            dishes[]->,
            type->{
              name
            } 
        },
      }[0]
    `,
        { id: id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
  }, []);

  //console.log(restaurants);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
      >
        {restaurants?.map((resto) => (
          <RestaurantCard
            key={resto.id}
            id={resto.id}
            imgUrl={resto.image}
            title={resto.name}
            rating={resto.rating}
            genre={resto.type?.name}
            address={resto.address}
            short_description={resto.short_description}
            dishes={resto.dishes}
            long={resto.long}
            lat={resto.lat}
          />
        ))}
       
        
      </ScrollView>
    </View>
  );
}

export default FeaturedRow