import http from 'k6/http';
import { check } from 'k6';
let baseurl = `https://practice.expandtesting.com/notes/api/`;

export function checkHealth(url) {
    const Authorizationoptions = {
        headers: {
            'Content-Type': 'application/json'
        },
    };
    const response = (http.get(baseurl + `${url}`, Authorizationoptions));
    const health = JSON.parse(response.body)
    console.log(health)

    return health;
}

export function StaticOne(url, data) {
    const Authorizationoptions = {
        headers: {
            'Content-Type': 'application/json'
        },
    };
    const response = (http.post(baseurl + `${url}`, data, Authorizationoptions));
    const register = JSON.parse(response.body)
    console.log('response register', register)

    return register;
}

export function StaticTwo(url, token) {
    const Authorizationoptions = {
        headers: {
            'x-auth-token': token,
            'Content-Type': 'application/json'
        },
    };
    const response = (http.get(baseurl + url, Authorizationoptions));
    const notes = JSON.parse(response.body)
    console.log(notes)
    return notes;
}

export function StaticThree(url, token, data) {
    const Authorizationoptions = {
        headers: {
            'x-auth-token': token,
            'Content-Type': 'application/json'
        },
    };
    const response = http.post(baseurl + url, data, Authorizationoptions);
    const staticres = JSON.parse(response.body);
    const noteId = staticres.data.id;

    return noteId;
}