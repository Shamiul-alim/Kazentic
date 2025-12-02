import { getAxios } from "../../../configurations/axios-config";

class AuthApi {
  async signup({ ...params }) {
    try {
      const response = await getAxios({
        url: `/users/admin`,
        method: "POST",
        data: params,
      });
      return response;
    } catch (err) {
      throw err;
    }
  }

}

const AuthApiInstance = new AuthApi();
export { AuthApi, AuthApiInstance };
