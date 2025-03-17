import { Link } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DestinationList } from "@/features/home/components/destination-list";
import { CategorieList } from "@/features/home/components/categorie-list";
import { SearchBar } from "@/components/search-bar";

function Root() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-8"
      >
        <View className="flex-row items-center px-5 py-4">
          <Text className="flex-1 text-3xl font-bold">Let's Discover</Text>
          <Link href="/profile">
            <View className="size-12 rounded-full bg-zinc-300" />
          </Link>
        </View>

        <View className="mt-8 px-5">
          <SearchBar
            pill={true}
            placeholder="Search for a destination"
          />
        </View>

        <View className="mt-10">
          <View className="mb-6 flex-row items-center justify-between px-5">
            <Text className="text-lg font-semibold">Categories</Text>
            <Link href="/">See all</Link>
          </View>
          <CategorieList />
        </View>

        {/* Destinations */}
        <View className="mt-10 gap-y-6 px-5">
          <Text className="text-lg font-semibold">Destinations</Text>
          <DestinationList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Root;
