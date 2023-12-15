import { getLocationData } from "./geoLocation.js";

const hostUrl = `${process.env.REACT_APP_SERVER_URL}/api/v1/event`;

export async function getAllRegisteredEvents() {
    let locationData = await getLocationData();
    let response = await fetch(`${hostUrl}/all`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            token: sessionStorage.getItem("token"),
        },
        body: JSON.stringify({
            locationData: locationData,
        }),
    });
    let data = await response.json();
    return data;
}
export async function getTechCount(){
    let res=await fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/getEventCount`);
    let data=await res.json();
    console.log(data);
    return data;
}
export async function getVisitorCount(type){
    let res=await fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/getVisitorCount?${type}`);
    let data=await res.json();
    return data;
}