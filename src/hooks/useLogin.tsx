import { IReturn, RemoteService } from "../remote/remote";

const useLogin = async (data: any): Promise<IReturn<any>> => {
  const remoteService = new RemoteService();

  const response = await remoteService.remote<any>({
    method: "post",
    endpoint: `${process.env.REACT_APP_API_URL}/user/login`,
    authorization: "login-success",
    body: data,
    timeout: 0,
  });

  return response;
};

export default useLogin;
