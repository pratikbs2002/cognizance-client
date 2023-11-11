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
    console.log(formData);
    return await fetch(`${hostUrl}/uploadImage`, {
        method: "POST",
        body: formData,
    });
}
