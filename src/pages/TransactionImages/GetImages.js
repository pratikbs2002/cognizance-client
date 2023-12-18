import React, { useEffect, useState } from "react";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { Card, Container } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const ImageGallery = () => {
    const [imageList, setImageList] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
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

                // Update state with the list of images
                setImageList(images);
            } catch (error) {
                // console.error("Error fetching images:", error);
            }
        };

        // Call the fetchImages function when the component mounts
        fetchImages();
    }, []); // Empty dependency array ensures that the effect runs only once on mount

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
                    {imageList.map((image, index) => (
                        <Card width={"300px"} height={"400px"} key={index.id} position={"relative"} bg="white">
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                    height: "100%",
                                    alignItems: "center",
                                    justifyContent: "space-around",
                                    position: "relative"
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        height: "230px",
                                        color: "white",
                                        padding: "10px",
                                        marginBottom: "10px",
                                        textAlign: "center",
                                        objectFit: "cover",
                                        objectPosition: "center"
                                    }}
                                >
                                    <img
                                        src={image.url}
                                        alt={image.name}
                                        style={{ maxWidth: "100%", maxHeight: "200px" }}
                                    />
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        width: "100%",
                                        color: "white",
                                        marginBottom: "10px",
                                        textAlign: "center"
                                    }}
                                >
                                    <p
                                        style={{
                                            justifyContent: "flex-end",
                                            justifyItems: "flex-end",
                                            color: "black",
                                            padding: "10px"
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "18px",
                                                fontWeight: "500"
                                            }}
                                        >
                                            Name:{" "}
                                        </span>
                                        {image.name}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </Container>
            </div>
        </>
    );
};

export default ImageGallery;
