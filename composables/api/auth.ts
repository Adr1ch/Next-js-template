import getBaseUrl from "@/lib/get-base-url/getBaseUrl";
import { authPath } from "@/utils/const";

const authUser = async (
  body: {} = {
    identifier: "",
    password: "",
  }
) => {
  console.log("Message before POST request");

  const rawResponse = await fetch(`${getBaseUrl()}${authPath}`, {
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

export default authUser;
