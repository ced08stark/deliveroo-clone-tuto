import React from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";

const CategoryCard = ({imgUrl, title}) => {
    return (
    <TouchableOpacity className="mr-2">
        <Image source={{
            uri: imgUrl,
        }} className="h-20 w-20 rounded -z-10" />
        <Text className="text-white absolute bottom-1 z-50 font-semibold">
           {title}
        </Text>
    </TouchableOpacity>
    )
        
    
}
 
export default CategoryCard;