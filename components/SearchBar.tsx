import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

interface Props {
  onPress?: () => void;
  placeholder: string;
}

const SearchBar = ({ onPress, placeholder }: Props) => {
  return (
    <View className="flex-row px-5 py-4 bg-[#05001D] rounded-full items-center">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#ab8bff"
      />
      <TextInput
        onPress={onPress}
        onChange={() => {}}
        placeholder={placeholder}
        value=""
        placeholderTextColor="#ab8bff"
        className="flex-1 ml-2"
      />
    </View>
  );
};

export default SearchBar;
