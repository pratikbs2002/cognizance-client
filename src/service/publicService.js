import { getLocationData } from "./geoLocation.js";

const hostUrl = `${process.env.REACT_APP_SERVER_URL}/api/v1`;

export async function getImagesLinks() {
    let locationData = await getLocationData();
    return await fetch(`${hostUrl}/getAllImages`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ locationData: locationData })
    });
}

export async function getRegisterCountService() {
    let res = await fetch(`${hostUrl}/getEventCount`);
    let data = await res.json();
    return data;
}

// export async function getVisitorCount(type) {
//     let res = await fetch(`${hostUrl}/getVisitorCount?${type}`);
//     let data = await res.json();
//     return data;
// }
