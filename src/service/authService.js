import { getLocationData } from "./geoLocation.js";

const hostUrl = `${process.env.REACT_APP_SERVER_URL}/api/v1/auth`;

export async function login() {
    let locationData = await getLocationData();
    let response = await fetch(`${hostUrl}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            token: sessionStorage.getItem("token"),
        },
        body: JSON.stringify({ locationData }),
    });
    let data = await response.json();
    return data;
}

export async function isProfileUpdatedAPI() {
    let locationData = await getLocationData();
    let response = await fetch(`${hostUrl}/isProfileUpdated`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            token: sessionStorage.getItem("token"),
        },
        body: JSON.stringify({ locationData }),
    });
    let data = await response.json();
    return data;
}

export async function updateProfileAPI(mobileNo, university, currentYear) {
    let locationData = await getLocationData();
    let response = await fetch(`${hostUrl}/updateProfile`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            token: sessionStorage.getItem("token"),
        },
        body: JSON.stringify({
            locationData: locationData,
            mobileNo: mobileNo,
            university: university,
            currentYear: currentYear,
        }),
    });
    let data = await response.json();
    return data;
}
