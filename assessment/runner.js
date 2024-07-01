import http from 'k6/http';

import { StaticOne, StaticTwo, StaticThree } from './payload.js';
import { login } from './gettoken.js'

// export const options = {
//     vus: 3,
//     duration: '1m',
// };

const url_register = `users/register`
const url_profile = `users/profile`
const url_reset_password = `users/forgot-password`
const url_otp_verification = `users/verify-reset-password-token`
const url_reset_verify_password = `users/reset-password`
const url_change_password = `users/change-password`
const url_logout = `users/logout`
const url_deleteuser = `users/delete-account`
const url_notes = `notes`

const register = {
    "name": "Sajan Khatri",
    "email": "test2055@gmail.com",
    "password": "Test@123"
}

const getnodebyid = JSON.stringify({
    "id": "{{note_id}}"
})

export default function () {
    StaticOne(url_register, JSON.stringify(register));

    const username = register.email
    const password = register.password
    const login_cred = JSON.stringify({
        "email": username,
        "password": password
    })
    const loginres = login(login_cred);

    const note = JSON.stringify({
        "title": "test plan",
        "description": "testplan for test assessment",
        "category": "Work"
    })
    const id = StaticThree(url_notes, loginres, note)

    const getnotesURL = `notes/${id}`
    StaticTwo(getnotesURL, loginres)
}