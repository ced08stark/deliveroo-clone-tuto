import React, {useState, useEffect} from "react";
import { Text, View, ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";
import sanityClient from "../sanity";
import { urlFor } from "../sanity";


const Categories = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => { sanityClient.fetch(`*[_type == "category"]`).then((data) => {
    setCategories(data)
  })}, []);
  console.log(categories);


    return (
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {categories.map((category) => (
          <CategoryCard
            key = {category._id}
            imgUrl={urlFor(category.image).width(200).url()}
            title={category.title}
          />
        ))}

        
      </ScrollView>
    );
}
 
export default Categories;