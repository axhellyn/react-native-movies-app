import { images } from "@/constants/images";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

const TabIcon = ({ focused, title, icon }: any) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-row flex-1 min-w-28 min-h-16 items-center justify-center mt-4 rounded-full w-full overflow-hidden gap-2"
      >
        <Image source={icon} className="size-5" tintColor="#151312" />
        <Text className="text-base font-semibold">{title}</Text>
      </ImageBackground>
    );
  }

  return (
    <View className="size-full justify-center items-center rounded-full mt-4">
      <Image source={icon} tintColor={"#A8B5DB"} className="size-5" />
    </View>
  );
};

export default TabIcon;
