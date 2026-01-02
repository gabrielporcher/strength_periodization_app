import { Exercise, ExerciseSet, PeriodizationProgram } from "../data/types";
import { storage } from "./mmkv";

export class PeriodizationRepository {
  private static readonly ALL_IDS_KEY = "periodization:all";

  private static byIdKey(id: number) {
    return `periodization:${id}`;
  }

  private static getAllIds(): number[] {
    const raw = storage.getString(this.ALL_IDS_KEY);
    return raw ? JSON.parse(raw) : [];
  }

  private static saveAllIds(ids: number[]) {
    storage.set(this.ALL_IDS_KEY, JSON.stringify(ids));
    98;
  }

  private static saveProgram(program: PeriodizationProgram) {
    storage.set(this.byIdKey(program.id), JSON.stringify(program));
  }

  static getAll(): PeriodizationProgram[] {
    return this.getAllIds()
      .map((id) => this.getById(id))
      .filter(Boolean) as PeriodizationProgram[];
  }

  static getById(id: number): PeriodizationProgram | null {
    const raw = storage.getString(this.byIdKey(id));
    return raw ? JSON.parse(raw) : null;
  }

  static create(program: PeriodizationProgram) {
    const ids = this.getAllIds();

    if (!ids.includes(program.id)) {
      ids.push(program.id);
      this.saveAllIds(ids);
    }

    this.saveProgram(program);
  }

  static delete(id: number) {
    const ids = this.getAllIds().filter((pid) => pid !== id);
    this.saveAllIds(ids);
    storage.remove(this.byIdKey(id));
  }

  static markWeekCompleted(
    programId: number,
    weekNumber: number,
    completed: boolean
  ) {
    const program = this.getById(programId);
    if (!program) return;

    program.model = program.model.map((week) =>
      week.week === weekNumber ? { ...week, completed } : week
    );

    this.saveProgram(program);
  }

  static updateExerciseDone(
    programId: number,
    weekNumber: number,
    exerciseName: Exercise["name"],
    done: boolean
  ) {
    const program = this.getById(programId);
    if (!program) return;

    const week = program.model.find((w) => w.week === weekNumber);
    if (!week || !week.exercisesIncluded) return;

    week.exercisesIncluded = week.exercisesIncluded.map((ex) =>
      ex.name === exerciseName ? { ...ex, done } : ex
    );

    this.saveProgram(program);
  }

  static updateSet(
    programId: number,
    weekNumber: number,
    setIndex: number,
    data: Partial<ExerciseSet>
  ) {
    const program = this.getById(programId);
    if (!program) return;

    const week = program.model.find((w) => w.week === weekNumber);
    if (!week || !week.sets[setIndex]) return;

    week.sets[setIndex] = {
      ...week.sets[setIndex],
      ...data,
    };

    this.saveProgram(program);
  }

  static updateWarmupSet(
    programId: number,
    weekNumber: number,
    setIndex: number,
    data: Partial<ExerciseSet>
  ) {
    const program = this.getById(programId);
    if (!program) return;

    const week = program.model.find((w) => w.week === weekNumber);
    if (!week || !week.warmup[setIndex]) return;

    week.warmup[setIndex] = {
      ...week.warmup[setIndex],
      ...data,
    };

    this.saveProgram(program);
  }

  static updatePR(programId: number, pr: number) {
    const program = this.getById(programId);
    if (!program) return;

    program.pr = pr;
    this.saveProgram(program);
  }
}
