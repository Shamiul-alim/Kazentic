import { AuthApiInstance } from "../api/AuthApi";

class AuthService {
  async signup({ ...params }) {
    const result = await AuthApiInstance.signup({ ...params });
    return result;
  }
}

const AuthServiceInstance = new AuthService();
export { AuthService, AuthServiceInstance };
