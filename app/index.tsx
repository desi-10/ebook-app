import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";

const IndexPage = () => {
  const categories = [
    {
      id: 1,
      name: "Fiction",
      description: "Explore Fiction",
      image: "https://picsum.photos/id/240/200",
    },
    {
      id: 2,
      name: "Science",
      description: "Explore Science",
      image: "https://picsum.photos/id/241/200",
    },
    {
      id: 3,
      name: "History",
      description: "Explore History",
      image: "https://picsum.photos/id/242/200",
    },
    {
      id: 4,
      name: "Art",
      description: "Explore Art",
      image: "https://picsum.photos/id/243/200",
    },
    {
      id: 5,
      name: "Poetry",
      description: "Explore Poetry",
      image: "https://picsum.photos/id/244/200",
    },
    {
      id: 6,
      name: "Travel",
      description: "Explore Travel",
      image: "https://picsum.photos/id/245/200",
    },
    {
      id: 7,
      name: "Music",
      description: "Explore Music",
      image: "https://picsum.photos/id/246/200",
    },
    {
      id: 8,
      name: "Philosophy",
      description: "Explore Philosophy",
      image: "https://picsum.photos/id/247/200",
    },
    {
      id: 9,
      name: "Psychology",
      description: "Explore Psychology",
      image: "https://picsum.photos/id/248/200",
    },
    {
      id: 10,
      name: "Math",
      description: "Explore Math",
      image: "https://picsum.photos/id/249/200",
    },
  ];
  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="">
        <View className="px-5 ">
          <View className="flex flex-row justify-between items-center py-10">
            <View className="">
              {/* // add hi emoji */}

              <Text className="text-3xl dark:text-white font-bold">
                Good morning, Desi 👋
              </Text>
              <Text className="text-sm dark:text-white">Today, 8:00 AM</Text>
            </View>
            <View className="flex flex-row  items-center">
              {/* Notification Icon */}
              <Ionicons
                name="notifications-outline"
                size={24}
                color={"black"}
                className="mr-3 dark:text-white"
              />

              {/* Search Icon */}
              <Ionicons
                name="search-outline"
                size={24}
                color="black"
                className="dark:text-white"
              />
            </View>
          </View>
          <View className="px-4 bg-red-500 w-full flex flex-row justify-between p-5 rounded-lg">
            <View className="flex justify-between ">
              <View>
                <Text className="text-2xl font-bold text-white">
                  Continue Reading
                </Text>
                <Text className="text-lg text-white">The New York Times</Text>
              </View>
              <View>
                <Text className=" text-white mb-2">Page 1 of 3</Text>
                <View className="w-full bg-slate-300 rounded-lg overflow-hidden">
                  {/* Progress bar */}
                  <View className="w-[50%] h-1 bg-white"></View>
                </View>
              </View>
            </View>
            <View>
              <Image
                source={{ uri: "https://picsum.photos/200" }}
                className="w-36 h-36 rounded-lg"
              />
            </View>
          </View>

          <View className="mt-5">
            <Text className="text-2xl dark:text-white font-bold">
              Categories
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View className="flex flex-row mr-3 mt-3">
                {categories.map((category) => (
                  <View key={category.id} className="items-center mr-5">
                    <Pressable className="flex justify-center items-center hover:bg-gray-200 h-20 w-20 rounded-full">
                      <Image
                        source={{ uri: category.image }}
                        className="w-10 h-10 rounded-full"
                      />
                      <View className="mt-2 flex items-center">
                        <Text className="text-sm dark:text-white">
                          {category.name}
                        </Text>
                      </View>
                    </Pressable>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>

          <View className="mt-5">
            <Text className="text-2xl dark:text-white font-bold">Trending</Text>
            <View className="">
              <FlatList
                data={categories}
                numColumns={2}
                columnWrapperStyle={{
                  justifyContent: "space-between", // Ensures columns are spaced evenly
                }}
                renderItem={({ item }) => (
                  <View className="flex-1 px-2 mt-5">
                    <Pressable>
                      <Image
                        source={{ uri: item.image }}
                        className="h-48 w-full"
                        resizeMode="cover"
                      />
                      <View className="mt-2">
                        <Text className="font-bold text-lg dark:text-white">
                          {item.name}
                        </Text>
                        <Text className="text-sm text-gray-500">
                          {item.description}
                        </Text>
                      </View>
                    </Pressable>
                  </View>
                )}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default IndexPage;
