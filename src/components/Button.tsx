import { Pressable, PressableProps } from "react-native";
import { Box } from "./Box";
import { Text } from "./Text";

type ButtonProps = {
  title: string;
  onPress: PressableProps["onPress"];
};

export function Button({ title, onPress }: ButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <Box
        backgroundColor="primary"
        justifyContent="center"
        alignItems="center"
        borderRadius="default"
      >
        <Text color="pureWhite">{title}</Text>
      </Box>
    </Pressable>
  );
}
