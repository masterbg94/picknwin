// Matches {
//   id: "4da62c22-aacc-414d-9884-66f9418d4885",
//   created_at: "2021-02-05 09:12:19.364822",
//   updated_at: "2021-02-05 09:12:19.364822",
//   date: null,
//   time: null,
//   team_one: {
//     id: "d1dfd8fa-d8f6-416a-8b44-7fe3a2a52b6e",
//     created_at: "2021-02-05 09:12:19.357537",
//     updated_at: "2021-02-05 09:12:19.357537",
//     team_name: "Estral",
//     team_logo: "https://cdn.pandascore.co/images/team/image/127594/143px_estral_esports_may_2020_logo_teamcard.png"
//   },
//   team_two: {
//     id: "6e88a54b-e37c-443e-886c-67ce58e8e9ea",
//     created_at: "2021-02-05 09:12:19.361680",
//     updated_at: "2021-02-05 09:12:19.361680",
//     team_name: "Guns and Rage",
//     team_logo: "https://cdn.pandascore.co/images/team/image/128467/170px_guns_and_rage_logo_black.png"
//   },
//   event: "event",
//   outcome: null,
//   team_one_points: 18.5,
//   team_two_points: 15.5,
//   premium: false,
//   locked: false
// }
export interface BasicResponse {
  message: string;
  data: any[];
  status: number;
}

export interface Matches {
  message: string;
  data: MatchesData[];
  status: number;
}

export interface MatchesData {
  id: string;
  created_at: string;
  updated_at: string;
  date: any;
  time: any;
  team_one: {
    id: string,
    created_at: string;
    updated_at: string;
    team_name: string;
    team_logo: string;
  };
  team_two: {
    id: string;
    created_at: string;
    updated_at: string;
    team_name: string;
    team_logo: string;
  };
  event: string;
  outcome: any;
  team_one_points: number;
  team_two_points: number;
  premium: boolean;
  locked: boolean;
}
