import { generateRandomChars } from "../../app/services/utils";

export function login({ username, password }) {
  return new Promise((resolve, reject) => {
    if(username === "test" && password === "test") {
      resolve({ username, token:  generateRandomChars()});
    } else if(username === "test"){
      reject({error: {description : "Invalid password !"}});
    } else if(password === "test"){
      reject({error: {description : "Invalid username !"}});
    } else {
      reject({error: {description : "Invalid username and password!"}})
    }
  });
}
