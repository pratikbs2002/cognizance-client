import { getLocationData } from "./geoLocation.js";

const hostUrl = `${process.env.REACT_APP_SERVER_URL}/api/v1`;

export async function getImagesLinks() {
    let locationData = await getLocationData();
    return await fetch(`${hostUrl}/getAllImages`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ locationData: locationData }),
    });
}
