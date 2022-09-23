export const API_URL = 'https://dogsapi.origamid.dev/json/';

//POST
export function TOKEN_POST(body) {
  return {
    url: API_URL + '/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'applicantion/json',
      },
      body: JSON.stringify(body),
    },
  };
}
