const ACCESS_TOKEN = "ACCESS_TOKEN";
const API_BASE_URL = "http://localhost:8080";

interface Options {
  method: string;
  headers: Headers;
  body?: string;
  url: string;
}

export function call(api: string, method: string, request: any) {
  const header = new Headers({
    "Content-Type": "application/json",
  });

  const accessToketn = localStorage.getItem(ACCESS_TOKEN);
  if (accessToketn && accessToketn != null && accessToketn != "") {
    header.append("Authorization", "Bearer " + accessToketn);
  }

  const options = {
    method: method,
    url: API_BASE_URL + api,
    headers: header,
  } as Options;

  if (request) {
    options.body = JSON.stringify(request);
  }

  return fetch(options.url, options)
    .then((response) =>
      response.json().then((json) => {
        if (!response.ok) {
          //response가 ok면 정상적인 응답 아니면 에러
          return Promise.reject(json);
        }
        return json;
      }),
    )
    .catch((error) => {
      console.log(error.status);
      if (error.status === 403) {
        window.location.href = "/login";
      }
      return Promise.reject(error);
    });
}

export function signin(userDTO: any) {
  return call("/auth/signin", "POST", userDTO).then((response) => {
    if (response.token) {
      localStorage.setItem(ACCESS_TOKEN, response.token);
      window.location.href = "/";
    }
  });
}

export function signout() {
  localStorage.setItem(ACCESS_TOKEN, "");
  window.location.href = "/login";
}

export function signup(userDTO: any) {
  return call("auth/signup", "POST", userDTO);
}
