import { IReturn, RemoteService } from "../remote/remote";

interface IGetMe {
  email: string;
}

export interface IMeReturn {
  _id: string;
  email: string;
  username: string;
  client_id: string;
  client_secret_key: string;
  password: string;
  clusters: string[];
}

const useMe = async (data: IGetMe): Promise<IReturn<IMeReturn>> => {
  const remoteService = new RemoteService();

  const response = await remoteService.remote<IMeReturn>({
    method: "post",
    endpoint: `${process.env.REACT_APP_API_URL}/user/me`,
    authorization: "me-success",
    body: data,
    timeout: 0,
  });

  return response;
};

export default useMe;
