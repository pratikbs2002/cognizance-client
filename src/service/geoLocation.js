export async function getLocationData() {
    let locationData = {};
    await fetch("https://geolocation-db.com/json/")
        .then((response) => response.json())
        .then((data) => {
            locationData["country_name"] = data.country_name;
            locationData["latitude"] = data.latitude;
            locationData["longitude"] = data.longitude;
            locationData["IPv4"] = data.IPv4;
            locationData["isFound"] = true;
        })
        .catch((error) => {
            locationData["isFound"] = false;
            if (process.env.REACT_APP_MODE == "dev") console.log(error);
        });

    return locationData;
}
