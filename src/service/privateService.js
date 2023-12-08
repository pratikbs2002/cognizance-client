import { getLocationData } from "./geoLocation.js";

const hostUrl = `${process.env.REACT_APP_SERVER_URL}/api/v1/admin`;

export async function uploadImage(files, image) {
    let locationData = await getLocationData();
    let formData = new FormData();
    let names = [];
    files.forEach((element) => {
        names.push(element.name);
        formData.append(
            element.name,
            "blob" in element ? element.blob : element,
            element.name
        );
    });
    formData.append("locationData", locationData);
    formData.append("names", names);
    // console.log(formData);
    return await fetch(`${hostUrl}/uploadImage`, {
        method: "POST",
        body: formData,
    });
}

export async function downloadTechEventRegistrationSheet() {
    let locationData = await getLocationData();
    return await fetch(`${hostUrl}/get-tech-event-registration-sheet`, {
        method: "POST",
        headers: {
            token: sessionStorage.token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            locationData: locationData,
        }),
    });
}

export async function downloadNonTechEventRegistrationSheet() {
    let locationData = await getLocationData();
    return await fetch(`${hostUrl}/get-non-tech-event-registration-sheet`, {
        method: "POST",
        headers: {
            token: sessionStorage.token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            locationData: locationData,
        }),
    });
}

export async function downloadWorkshopRegistrationSheet() {
    let locationData = await getLocationData();
    return await fetch(`${hostUrl}/get-workshop-registration-sheet`, {
        method: "POST",
        headers: {
            token: sessionStorage.token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            locationData: locationData,
        }),
    });
}

export async function downloadMusicalNightRegistrationSheet() {
    let locationData = await getLocationData();
    return await fetch(`${hostUrl}/get-musical-night-registration-sheet`, {
        method: "POST",
        headers: {
            token: sessionStorage.token,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            locationData: locationData,
        }),
    });
}
