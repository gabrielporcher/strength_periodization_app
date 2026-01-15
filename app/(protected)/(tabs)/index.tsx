import { Button } from "@/src/components/Button";
import { Screen } from "@/src/components/Screen";
import WeeklyProgress from "@/src/components/WeeklyProgress";
import { PeriodizationRepository } from "@/src/storage/PeriodizationRepository";

export default function HomeScreen() {
  const program = PeriodizationRepository.getAll();
  console.log(program);
  return (
    <Screen>
      {program[0] ? (
        <WeeklyProgress week={3} />
      ) : (
        <Button title="Novo" onPress={() => {}} />
      )}
    </Screen>
  );
}
