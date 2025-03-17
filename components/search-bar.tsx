import { Search } from "lucide-react-native";
import { CustomInput } from "./custom-input";

type SearchBarProps = React.ComponentProps<typeof CustomInput>;

export function SearchBar(props: SearchBarProps) {
  return (
    <CustomInput
      placeholder="Search"
      leading={
        <Search
          size={20}
          color="gray"
        />
      }
      {...props}
    />
  );
}
