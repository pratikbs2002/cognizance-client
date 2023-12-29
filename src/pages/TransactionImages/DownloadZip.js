import React, { useEffect, useState } from "react";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { Button, Card, Container, useToast } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { getZipFileService } from "../../service/publicService";

const DownloadZip = () => {
    const navigate = useNavigate();
    const toast = useToast();
    const [isLoading, setIsLoading] = useState(false);

    const fetchImages = async () => {
        setIsLoading(true);
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

            const res = await getZipFileService(images);

            console.log(res);

            if (res.status === 200) {
                const data = await res.blob();
                const link = document.createElement("a");
                link.href = window.URL.createObjectURL(data);
                toast({
                    description: "Zip file downloaded successfully!",
                    status: "success",
                    duration: 5000,
                    position: "top",
                    isClosable: true
                });
                link.download = "payment-reciepts.zip";
                link.click();
            } else {
                toast({
                    description: "Zip file not found! Please try again later.",
                    status: "error",
                    duration: 5000,
                    position: "top",
                    isClosable: true
                });
            }
        } catch (error) {
            // console.error("Error fetching images:", error);
        } finally {
            setIsLoading(false);
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
                    <Button onClick={fetchImages} loadingText="Downloading Payment Reciepts" isLoading={isLoading}>
                        Download Payment Reciepts
                    </Button>
                </Container>
            </div>
        </>
    );
};

export default DownloadZip;
