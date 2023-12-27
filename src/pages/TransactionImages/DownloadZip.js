import React, { useEffect, useState } from "react";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { Button, Card, Container } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import JSZip from "jszip";
const DownloadZip = () => {
    const [imageList, setImageList] = useState([]);
    const navigate = useNavigate();

    const fetchImages = async () => {
        const storage = getStorage();
        const storageRef = ref(storage, "cz"); // Update this to your storage reference

        try {
            // Retrieve a list of items (images) in the storage reference
            const listResult = await listAll(storageRef);

            // Loop through the items and fetch download URLs and names
            const images = await Promise.all(
                listResult.items.map(async (item) => {
                    const downloadURL = await getDownloadURL(item);
                    return { name: item.name, url: downloadURL };
                })
            );

            console.log(images);

            const files = await Promise.all(
                images.map((url) =>
                    fetch(images[0].url)
                        .then((res) => {
                            console.log(res);
                            return res.blob();
                        })
                        .then((blob) => {
                            console.log(blob);
                            return { name: images[0].name, blob: blob };
                        })
                )
            );

            console.log(files);
            const jszip = new JSZip();
            files.forEach((file) => {
                jszip.file(file.name, file.blob);
            });

            const zipData = await jszip.generateAsync({
                type: "blob",
                streamFiles: true
            });

            console.log(zipData);

            const link = document.createElement("a");
            link.href = window.URL.createObjectURL(zipData);
            link.download = "payment-reciepts.zip";
            link.click();
            // Update state with the list of images
            setImageList(images);
        } catch (error) {
            // console.error("Error fetching images:", error);
        }
    };

    return (
        <>
            <div className="photo-gallery-parent-container">
                <div className="photo-gallery-navbar">
                    <div className="photo-gallery-back-button" onClick={() => navigate(`/`)}>
                        <IoIosArrowBack />
                        Back
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        fontSize: "40px",
                        fontWeight: "800",
                        color: "white",
                        paddingBottom: "10px",
                        marginBottom: "10px",
                        backgroundColor: "rgba(0, 0, 0, 0.442)"
                    }}
                >
                    Payment Reciept Images
                </div>
                <Container
                    marginTop="100px"
                    padding={"10px"}
                    maxW={"100%"}
                    display={"flex"}
                    flexWrap={"wrap"}
                    gap={"30px"}
                    alignItems={"center"}
                    justifyContent={"center"}
                >
                    <Button onClick={fetchImages}>Download Zip</Button>
                </Container>
            </div>
        </>
    );
};

export default DownloadZip;
