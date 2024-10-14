import { IReturn, RemoteService } from "../remote/remote";

interface IUser {
  email: string;
  password: string;
}

interface ILoginReturn {
  code: number;
  text: string;
}

const useLogin = async (data: IUser): Promise<IReturn<ILoginReturn>> => {
  const remoteService = new RemoteService();

  const response = await remoteService.remote<ILoginReturn>({
    method: "post",
    endpoint: `${process.env.REACT_APP_API_URL}/user/login`,
    authorization: "login-success",
    body: data,
    timeout: 0,
  });

  return response;
};

export default useLogin;
