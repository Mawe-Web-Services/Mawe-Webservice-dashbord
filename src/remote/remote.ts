import Axios, { AxiosInstance } from "axios";

export interface IAxiosInstanceParams {
  authorization: string;
  timeout?: number;
  connection: string;
}

export interface IReturn<T> {
  result: T;
  error?: Error;
}

type HttpMethod = 'get' | 'post' | 'put' | 'delete';

export interface IRequest {
  authorization: string;
  method: HttpMethod;
  endpoint: string;
  timeout: number;
  body?: object;
  query?: string;
}

export class RemoteService {
  private authorization: string;
  private axiosInstance: AxiosInstance | undefined;
  constructor() {
    this.authorization = 'your-auth-token';
  }

  public async getAxiosIntance({
    authorization,
    timeout,
    connection,
  }: IAxiosInstanceParams) {
    this.authorization = authorization;
    this.axiosInstance = Axios.create({
      baseURL: connection,
      timeout: timeout,
      headers: {
        Authorization: this.authorization,
      },
    });

    return this.axiosInstance;
  }

  public async remote<T>({
    authorization,
    method,
    endpoint,
    body,
    timeout,
  }: IRequest): Promise<IReturn<T>> {
    this.authorization = authorization;
    try {
      const axiosInstance: AxiosInstance = await this.getAxiosIntance({
        authorization: this.authorization,
        timeout: timeout,
        connection: endpoint,
      });
      const config = {
        method,
        url: `${endpoint}`,
        ...(method !== "get" && { data: body }),
      };
      const response = await axiosInstance.request(config);

      return { result: response?.data };
    } catch (err) {
      const error = err as Error;
      return { error, result: undefined as unknown as T };
    }
  }
}
