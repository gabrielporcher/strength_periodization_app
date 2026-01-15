import { PropsWithChildren } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box, BoxProps } from "./Box";

export function Screen({
  children,
  ...boxProps
}: PropsWithChildren & BoxProps) {
  const { top } = useSafeAreaInsets();
  console.log(top);
  return (
    <Box
      flex={1}
      backgroundColor="background"
      paddingHorizontal="s16"
      style={{ paddingTop: top }}
      {...boxProps}
    >
      {children}
    </Box>
  );
}
