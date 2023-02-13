import axios from "axios";

class Api {
  get(url: string) {
    return axios({
      method: "GET",
      url,
      baseURL: "",
    }).catch((err) => this.errorHandling(err));
  }

  errorHandling(error: any) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    console.log(error.config);
    return Promise.reject(error);
  }
}

export default new Api();
