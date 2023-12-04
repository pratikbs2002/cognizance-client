import { getLocationData } from "./geoLocation.js";

const hostUrl = `${process.env.REACT_APP_SERVER_URL}/api/v1/event-registration`;

export async function registerEvent(eventData) {
    let locationData = await getLocationData();
    let response = await fetch(`${hostUrl}/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            token: sessionStorage.getItem("token"),
        },
        body: JSON.stringify({
            locationData: locationData,
            eventData: eventData,
        }),
    });
    let data = await response.json();
    return data;
}
