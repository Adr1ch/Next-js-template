import getBaseUrl from "@/lib/get-base-url/getBaseUrl";
import { registerPath } from "@/utils/const";

const registerUser = async (
  body: {} = {
    email: "",
    username: "",
    password: "",
  }
) => {
  console.log("Message before POST request");

  const rawResponse = await fetch(`${getBaseUrl()}${registerPath}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const response = await rawResponse.json();

  console.log("Message after POST request");

  return response;
};

export default registerUser;
