import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react-native";
import { View, Text, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useDestinations } from "@/hooks/destinations";

export function DestinationList() {
  const { data } = useDestinations();
  const isOdd = data.length % 2 !== 0;

  return (
    <View className="w-full flex-row flex-wrap gap-5">
      {data.map((d) => {
        return (
          <ImageBackground
            key={d.id}
            source={d.image}
            resizeMode="cover"
            className={cn(
              "h-72 w-1/3 grow overflow-hidden rounded-3xl bg-zinc-300",
            )}
          >
            <LinearGradient
              colors={["transparent", "transparent", "rgba(0,0,0,0.7)"]}
              style={{
                position: "absolute",
                inset: 0,
                flex: 1,
              }}
            />

            <View className="flex-1 flex-row items-end p-4">
              <View className="flex-1">
                <Text
                  className="text-lg font-bold text-white"
                  numberOfLines={1}
                >
                  {d.name}
                </Text>
                <View className="flex-row items-center gap-x-1">
                  <MapPin
                    size={12}
                    color="#ffffff"
                  />
                  <Text className="text-sm text-white">{d.location}</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        );
      })}

      {isOdd && <View className="w-1/3 grow rounded-3xl" />}
    </View>
  );
}
