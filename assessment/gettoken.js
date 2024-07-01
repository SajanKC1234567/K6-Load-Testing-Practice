import http from 'k6/http';
let baseurl = `https://practice.expandtesting.com/notes/api/users/login`;

export function login(data) {
    const Authorizationoptions = {
        headers:{
            'Content-Type': 'application/json'
        },
    };
    const response = (http.post(baseurl, data, Authorizationoptions));
    const res = JSON.parse(response.body)
    const access_token = res.data.token;
    console.log(access_token)
    return access_token;
}