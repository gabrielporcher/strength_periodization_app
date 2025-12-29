import { PeriodizationProgram } from "./types";

export const periodizationModels: PeriodizationProgram[] = [
  {
    id: 1,
    name: "10 semanas",
    description: "Treinamento de 10 semanas para aumentar a força",
    weeks: 10,
    model: [
      {
        week: 1,
        completed: false,
        warmup: [
          { sets: 1, weight: "50%", reps: 8 },
          { sets: 1, weight: "55%", reps: 5 },
        ],
        sets: [{ sets: 6, weight: "60%", reps: 4 }],
      },
      {
        week: 2,
        completed: false,
        warmup: [
          { sets: 1, weight: "50%", reps: 8 },
          { sets: 1, weight: "55%", reps: 5 },
        ],
        sets: [{ sets: 6, weight: "60%", reps: 4 }],
      },
      {
        week: 3,
        completed: false,
        warmup: [
          { sets: 1, weight: "50%", reps: 8 },
          { sets: 1, weight: "55%", reps: 5 },
        ],
        sets: [{ sets: 5, weight: "70%", reps: 4 }],
      },
      {
        week: 4,
        completed: false,
        warmup: [
          { sets: 1, weight: "50%", reps: 8 },
          { sets: 1, weight: "55%", reps: 5 },
          { sets: 1, weight: "60%", reps: 5 },
        ],
        sets: [{ sets: 4, weight: "75%", reps: 4 }],
      },
      {
        week: 5,
        completed: false,
        warmup: [
          { sets: 1, weight: "50%", reps: 8 },
          { sets: 1, weight: "55%", reps: 5 },
          { sets: 1, weight: "60%", reps: 4 },
        ],
        sets: [{ sets: 4, weight: "80%", reps: 5 }],
      },
    ],
  },
];
