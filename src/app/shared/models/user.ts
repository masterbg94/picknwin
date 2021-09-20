import {BasicResponse} from './matches';

export interface Register {
  username: string;
  password: string;
  name: string;
  surname: string;
  email: string;
}

export interface Login {
  username: string;
  password: string;
}

// For https://api.picknwin.gg/register GET
export interface AllUsers {
  status: number;
  data: SingleRegistratedUser[];
  message: string;
}

export interface SingleRegistratedUser {
  id: string;
  created_at: string;
  updated_at: string;
  username: string;
  password: string;
  name: string;
  surname: string;
  email: string;
  role: string;
  points: number;
  all_time_points: number;
  avatar_id: string;
  steam_link: string;
}

export interface UpdateUser {
  username: string;
  password: string;
  name: string;
  surname: string;
  email: string;
}
