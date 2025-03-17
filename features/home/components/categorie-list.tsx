import { View, Text, FlatList } from "react-native";

const DATA = [
  { id: "1", title: "Beach" },
  { id: "2", title: "Mountain" },
  { id: "3", title: "Site" },
  { id: "4", title: "Forest" },
];

export function CategorieList() {
  return (
    <FlatList
      horizontal
      data={DATA}
      showsHorizontalScrollIndicator={false}
      contentContainerClassName="px-5"
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View className="w-5" />}
      renderItem={({ item }) => {
        return (
          <View className="items-center gap-y-1.5">
            <View className="size-28 rounded-3xl bg-zinc-300" />
            <Text className="text-sm">{item.title}</Text>
          </View>
        );
      }}
    />
  );
}
