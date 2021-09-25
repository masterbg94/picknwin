export interface PredictMatch {
  username: string;
  match_id: string;
  prediction: string;
  event: string;
}

/** TODO: Make real datatype for profile dashboard / need backend response fix */
export interface PredictionDashboard {
  game: string; // Isurus vs Infinity
  prediction: string; // Infinity win
  date: string; // 	Sep 21, 2021 11:35
  points: number; // 125.000
  status: boolean; // won/lose
}
