import axios from "api/axiosMiddleware";

const authService = {
  async signIn(data: LoginState) {
    // const formData = new FormData();
    // formData.append("email", data.email);
    // formData.append("password", data.password);

    return axios({
      url: "/login",
      method: "POST",
      data,
    }).then((res) => res.data);
  },
};

export default authService;
