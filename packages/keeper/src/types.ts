export type KeeperMood =
  | "ready"
  | "celebrating"
  | "watching"
  | "warning";

export interface KeeperState {
  mood: KeeperMood;
  message: string;
}
