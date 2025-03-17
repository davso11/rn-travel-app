import { cn } from "@/lib/utils";
import { View, TextInput } from "react-native";

type CustomInputProps = React.ComponentPropsWithRef<typeof TextInput> & {
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  containerClassName?: string;
  pill?: boolean;
};

export function CustomInput({
  leading,
  trailing,
  className,
  containerClassName,
  pill,
  ...rest
}: CustomInputProps) {
  return (
    <View
      className={cn(
        "h-14 flex-row rounded-xl bg-zinc-200/80 px-5",
        pill && "rounded-full",
        containerClassName,
      )}
    >
      {!!leading && (
        <View className="items-center justify-center">{leading}</View>
      )}

      <TextInput
        className={cn(
          "flex-1 text-lg leading-[18px]",
          {
            "pl-3": !!leading,
            "pr-3": !!trailing,
          },
          className,
        )}
        {...rest}
      />

      {!!trailing && (
        <View className="items-center justify-center">{trailing}</View>
      )}
    </View>
  );
}
