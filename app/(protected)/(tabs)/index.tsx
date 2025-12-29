import { Screen } from "@/src/components/Screen";
import WeeklyProgress from "@/src/components/WeeklyProgress";

export default function HomeScreen() {
  return (
    <Screen>
      <WeeklyProgress week={3} />
    </Screen>
  );
}
