import { IReturn, RemoteService } from "../remote/remote";

type User = {
  email: string;
  password: string;
}

type LoginReturn = {
  code: number;
  text: string;
}

const useLogin = async (data: User): Promise<IReturn<LoginReturn>> => {
  const remoteService = new RemoteService();

  const response = await remoteService.remote<LoginReturn>({
    method: "post",
    endpoint: `${process.env.REACT_APP_API_URL}/user/login`,
    authorization: "login-success",
    body: data,
    timeout: 0,
  });

  return response;
};

export default useLogin;
