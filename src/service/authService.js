import { getLocationData } from "./geoLocation.js";

const hostUrl = `${process.env.REACT_APP_SERVER_URL}/api/v1/auth`;

export async function login(token) {
    let locationData = await getLocationData(token);
    console.log(token);
    let response = await fetch(`${hostUrl}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            token: "Bearer " + token,
        },
        body: JSON.stringify({ locationData }),
    });
    let data = await response.json();
    return data;
}
