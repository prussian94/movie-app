import axios from "axios";

export async function fetchData(requestInfo) {
  return await axios
    .get(requestInfo.url, { headers: requestInfo.headers })
    .then(function (response) {
      // handle success
      console.log("response.data", response.data);
      return response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}
