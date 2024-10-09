import axios from "axios";
import { User } from "./api-types";

export class APIService {
  private static client = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  static async loginUser(userData: User): Promise<User> {
    const { data } = await APIService.client.post<User>(
      "/user/login",
      userData
    );

    return data;
  }
}
