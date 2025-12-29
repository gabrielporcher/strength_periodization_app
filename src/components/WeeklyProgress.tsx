import React from "react";
import Svg, { Circle, G } from "react-native-svg";
import { Box } from "./Box";
import { Text } from "./Text";

type WeeklyProgressProps = {
  week: number;
};

const WeeklyProgress = ({ week = 0 }: WeeklyProgressProps) => {
  const totalWeeks = 10;
  const radius = 100;
  const strokeWidth = 12;
  const circumference = 2 * Math.PI * radius;

  const dashLength = circumference / totalWeeks - 4;
  const gap = 4;

  const center = radius + strokeWidth;

  return (
    <Box
      alignItems="center"
      justifyContent="center"
      backgroundColor="gray2"
      height={300}
    >
      <Svg
        width={radius * 2 + strokeWidth * 2}
        height={radius * 2 + strokeWidth * 2}
      >
        {/*rotacionado -90° para começar no topo */}
        <G rotation={-90} origin={`${center}, ${center}`}>
          {Array.from({ length: totalWeeks }).map((_, index) => {
            const offset = -index * (dashLength + gap); // desloca cada dash
            const isActive = index < week;

            return (
              <Circle
                key={index}
                cx={center}
                cy={center}
                r={radius}
                stroke={isActive ? "green" : "black"}
                strokeWidth={strokeWidth}
                fill="transparent"
                strokeDasharray={`${dashLength}, ${circumference}`}
                strokeDashoffset={offset}
              />
            );
          })}
        </G>
      </Svg>

      <Box position="absolute" alignItems="center" justifyContent="center">
        <Text variant="title28">{week}</Text>
        <Text variant="text18">semana</Text>
      </Box>
    </Box>
  );
};

export default WeeklyProgress;
