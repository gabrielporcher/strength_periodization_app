export type ExerciseName = "Supino" | "Agachamento" | "Levantamento terra";

export interface Exercise {
  name: ExerciseName;
  done: boolean;
}

export interface ExerciseSet {
  sets: number;
  weight: number;
  reps: number;
}

export interface WeeklyPlan {
  week: number;
  completed: boolean;
  exercisesIncluded?: Exercise[];
  warmup: ExerciseSet[];
  sets: ExerciseSet[];
}

export interface PeriodizationProgram {
  id: number;
  name: string;
  description: string;
  pr?: number;
  weeks: number;
  model: WeeklyPlan[];
}
