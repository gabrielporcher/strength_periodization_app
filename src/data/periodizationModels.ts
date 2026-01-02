import { PeriodizationProgram } from "./types";

/*
- MVP vai suportar somente 1 exercício por periodização; Futuramente deve ser capaz de funcionar com os 3 exercicios
- elaborar lógica para que o 2º treino da semana seja mais leve (70% +-)
- elaborar lógica  para treinos não feitos / semanas perdidas
- ajustar a lógica da semana 9
*/

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
          { sets: 1, weight: 0.5, reps: 8 },
          { sets: 1, weight: 0.55, reps: 5 },
        ],
        sets: [{ sets: 6, weight: 0.6, reps: 4 }],
      },
      {
        week: 2,
        completed: false,
        warmup: [
          { sets: 1, weight: 0.5, reps: 8 },
          { sets: 1, weight: 0.55, reps: 5 },
        ],
        sets: [{ sets: 6, weight: 0.6, reps: 4 }],
      },
      {
        week: 3,
        completed: false,
        warmup: [
          { sets: 1, weight: 0.5, reps: 8 },
          { sets: 1, weight: 0.55, reps: 5 },
        ],
        sets: [{ sets: 5, weight: 0.7, reps: 4 }],
      },
      {
        week: 4,
        completed: false,
        warmup: [
          { sets: 1, weight: 0.5, reps: 8 },
          { sets: 1, weight: 0.55, reps: 5 },
          { sets: 1, weight: 0.6, reps: 5 },
        ],
        sets: [{ sets: 4, weight: 0.75, reps: 4 }],
      },
      {
        week: 5,
        completed: false,
        warmup: [
          { sets: 1, weight: 0.5, reps: 8 },
          { sets: 1, weight: 0.55, reps: 5 },
          { sets: 1, weight: 0.6, reps: 4 },
        ],
        sets: [{ sets: 4, weight: 0.8, reps: 5 }],
      },
      {
        week: 6,
        completed: false,
        warmup: [
          { sets: 1, weight: 0.5, reps: 8 },
          { sets: 1, weight: 0.55, reps: 5 },
          { sets: 1, weight: 0.7, reps: 3 },
        ],
        sets: [{ sets: 3, weight: 0.8, reps: 3 }],
      },
      {
        week: 7,
        completed: false,
        warmup: [
          { sets: 1, weight: 0.5, reps: 8 },
          { sets: 1, weight: 0.55, reps: 5 },
          { sets: 1, weight: 0.7, reps: 3 },
          { sets: 1, weight: 0.8, reps: 2 },
        ],
        sets: [{ sets: 2, weight: 0.9, reps: 2 }],
      },
      {
        week: 8,
        completed: false,
        warmup: [
          { sets: 1, weight: 0.5, reps: 8 },
          { sets: 1, weight: 0.55, reps: 5 },
        ],
        sets: [{ sets: 6, weight: 0.7, reps: 3 }],
      },
      {
        week: 9,
        //NESTA SEMANA PRECISA DE 3 A 4 DIAS DE DESCANSO
        //TREINAR 1X CADA MUSCULO NA SEMANA SOMENTE
        completed: false,
        warmup: [
          { sets: 1, weight: 0.5, reps: 8 },
          { sets: 1, weight: 0.55, reps: 5 },
        ],
        sets: [{ sets: 2, weight: 0.65, reps: 2 }],
      },
      {
        week: 10,
        completed: false,
        warmup: [
          { sets: 1, weight: 0.5, reps: 8 },
          { sets: 1, weight: 0.6, reps: 5 },
          { sets: 1, weight: 0.7, reps: 3 },
          { sets: 1, weight: 0.8, reps: 2 },
          { sets: 1, weight: 0.9, reps: 1 },
        ],
        sets: [{ sets: 1, weight: 1.0, reps: 1 }], //{ sets: 1, weight: 1.1, reps: 2 }, ir além, buscar o novo pr.
      },
    ],
  },
];
