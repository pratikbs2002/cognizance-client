import React from "react";
import { useState } from "react";
import { Box, Button, Container, useToast } from "@chakra-ui/react";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { getZipFileService } from "../../service/publicService";
import { IoIosArrowBack } from "react-icons/io";
import skull from "../../assets/skull.png";
// import { useDropzone } from "react-dropzone";
// import { MdCloudUpload } from "react-icons/md";
import {
    // downloadMusicalNightRegistrationSheet,
    downloadNonTechEventRegistrationSheet,
    downloadTechEventRegistrationSheet,
    downloadWorkshopRegistrationSheet
    // uploadImage
} from "../../service/privateService";
// import styles from "./fileUploader";
import "../photoGallery/PhotoGallery.css";

export default function UploadImages(props) {
    const toast = useToast();
    const navigate = useNavigate();
    // const [files, setFiles] = useState([]);
    const [isDownloadingTechEventRegistrationSheet, setIsDownloadingTechEventRegistrationSheet] = useState(false);
    const [isDownloadingNonTechEventRegistrationSheet, setIsDownloadingNonTechEventRegistrationSheet] = useState(false);
    const [isDownloadingWorkshopRegistrationSheet, setIsDownloadingWorkshopRegistrationSheet] = useState(false);
    const [isDownloadingZipFile, setIsDownloadingZipFile] = useState(false);

    const handleDownloadTechEventRegistrationSheet = async () => {
        setIsDownloadingTechEventRegistrationSheet(true);
        const res = await downloadTechEventRegistrationSheet();

        if (res.status === 200) {
            const data = await res.blob();
            const url = window.URL.createObjectURL(data);
            const link = document.createElement("a");
            link.href = url;
            // const d = new Date();
            link.setAttribute("download", `Tech Events Registrations Sheet - Cognizance 2024.xlsx`);
            document.body.appendChild(link);
            link.click();
        } else {
            const parseRes = await res.json();
            // alert(parseRes.message);
            toast({
                description: parseRes.message,
                status: "info",
                duration: 5000,
                position: "top",
                isClosable: true
            });
        }
        setIsDownloadingTechEventRegistrationSheet(false);
    };

    const handleDownloadWorkshopRegistrationSheet = async () => {
        setIsDownloadingWorkshopRegistrationSheet(true);
        const res = await downloadWorkshopRegistrationSheet();

        if (res.status === 200) {
            const data = await res.blob();
            const url = window.URL.createObjectURL(data);
            const link = document.createElement("a");
            link.href = url;
            // const d = new Date();
            link.setAttribute("download", `Workshops Registrations Sheet - Cognizance 2024.xlsx`);
            document.body.appendChild(link);
            link.click();
        } else {
            const parseRes = await res.json();
            // alert(parseRes.message);
            toast({
                description: parseRes.message,
                status: "info",
                duration: 5000,
                position: "top",
                isClosable: true
            });
        }
        setIsDownloadingWorkshopRegistrationSheet(false);
    };

    const handleDownloadNonTechEventRegistrationSheet = async () => {
        setIsDownloadingNonTechEventRegistrationSheet(true);
        const res = await downloadNonTechEventRegistrationSheet();

        if (res.status === 200) {
            const data = await res.blob();
            const url = window.URL.createObjectURL(data);
            const link = document.createElement("a");
            link.href = url;
            // const d = new Date();
            link.setAttribute("download", `Non Tech Events Registrations Sheet - Cognizance 2024.xlsx`);
            document.body.appendChild(link);
            link.click();
        } else {
            const parseRes = await res.json();
            // alert(parseRes.message);
            toast({
                description: parseRes.message,
                status: "info",
                duration: 5000,
                position: "top",
                isClosable: true
            });
        }
        setIsDownloadingNonTechEventRegistrationSheet(false);
    };

    const fetchImages = async () => {
        setIsDownloadingZipFile(true);
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
                // const data = await res.blob();
                const data = await res.arrayBuffer();
                console.log(data);
                const link = document.createElement("a");
                link.href = window.URL.createObjectURL(new Blob([data], { type: "application/zip" }));
                console.log(link);
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
            console.error("Error fetching images:", error);
        } finally {
            setIsDownloadingZipFile(false);
        }
    };

    // const handleDownloadMusicalNightRegistrationSheet = async () => {
    //     const res = await downloadMusicalNightRegistrationSheet();

    //     if (res.status === 200) {
    //         const data = await res.blob();
    //         const url = window.URL.createObjectURL(data);
    //         const link = document.createElement("a");
    //         link.href = url;
    //         const d = new Date();
    //         link.setAttribute("download", `Musical Nights Registrations Sheet - Cognizance 2024.xlsx`);
    //         document.body.appendChild(link);
    //         link.click();
    //     } else {
    //         const parseRes = await res.json();
    //         // alert(parseRes.message);
    //         toast({
    //             description: parseRes.message,
    //             status: "info",
    //             duration: 5000,
    //             position: "top",
    //             isClosable: true
    //         });
    //     }
    // };

    // const thumbs = files.map((file) => (
    //     <div style={styles.thumb} key={file.name}>
    //         <div style={styles.thumbInner}>
    //             <img
    //                 src={file.preview}
    //                 style={styles.img}
    //                 // Revoke data uri after image is loaded
    //                 onLoad={() => {
    //                     URL.revokeObjectURL(file.preview);
    //                 }}
    //                 alt={file.name}
    //             />
    //         </div>
    //     </div>
    // ));

    // const { getRootProps, getInputProps } = useDropzone({
    //     accept: {
    //         "image/jpeg": [],
    //         "image/png": [],
    //         "image/jpg": []
    //     },
    //     onDrop: (acceptedFiles) => {
    //         setFiles(
    //             acceptedFiles.map((file) =>
    //                 Object.assign(file, {
    //                     preview: URL.createObjectURL(file)
    //                 })
    //             )
    //         );
    //     }
    // });

    // async function addImage() {
    //     try {
    //         const res = await uploadImage(files);
    //         // console.log(res);
    //         const parseRes = await res.json();
    //         // console.log(parseRes);
    //         return parseRes;
    //     } catch (err) {
    //         // console.error(err.message);
    //     }
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const isAdded = await addImage();
    //     if (isAdded) {
    //         navigate(`/`);
    //     }
    // };

    return (
        <>
            <div className="photo-gallery-parent-container">
                <div className="photo-gallery-navbar">
                    <div className="photo-gallery-back-button" onClick={() => navigate(`/`)}>
                        <IoIosArrowBack />
                        Back
                    </div>
                </div>
                {/* <Box justifyContent={"center"} alignItems="center" textAlign="center">
                    <FormControl maxW="100%" paddingTop={10}>
                        <section className="container">
                            <div {...getRootProps({ className: "dropzone" })}>
                                <aside style={styles.thumbsContainer}>{thumbs}</aside>
                                <Button leftIcon={<MdCloudUpload fontSize={20} />} colorScheme="blue" variant={"solid"}>
                                    <input {...getInputProps()} />
                                    Upload
                                </Button>
                            </div>
                        </section>
                        <FormLabel textAlign={"center"} marginTop={"10px"} fontSize={"sm"}>
                            JPEG/JPG
                        </FormLabel>
                        <FormHelperText id="name-helper-text" fontSize="sm" color="red.500">
                            {paymentInformationErrors.paymentTransactionReceipt}
                        </FormHelperText>
                    </FormControl>
                    <Button onClick={handleSubmit}>Submit</Button>
                </Box> */}
                <Box
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        alignItems: "center"
                    }}
                    paddingX={"10%"}
                    width={"100%"}
                    gap={20}
                    mt={10}
                >
                    <Container
                        gap={10}
                        display={"flex"}
                        justifyContent={"center"}
                        color={"white"}
                        alignContent={"center"}
                        flex={1}
                        maxWidth={"100%"}
                    >
                        <Box
                            padding={2}
                            paddingY={5}
                            rounded={"10px"}
                            textAlign={"center"}
                            fontWeight={"bold"}
                            flex={1}
                            borderRadius={"30px"}
                            backgroundColor={"rgba(0, 0, 0, 0.442)"}
                            display={"flex"}
                            alignItems={"center"}
                            gap={5}
                            justifyContent={"center"}
                        >
                            Tech Event Entries :
                            <Box width={"fit-content"} paddingY={3} fontSize={"2xl"}>
                                {props.registerCount.techCount}
                            </Box>
                        </Box>
                        <Box
                            padding={2}
                            paddingY={5}
                            rounded={"10px"}
                            textAlign={"center"}
                            fontWeight={"bold"}
                            flex={1}
                            borderRadius={"30px"}
                            backgroundColor={"rgba(0, 0, 0, 0.442)"}
                            display={"flex"}
                            alignItems={"center"}
                            gap={5}
                            justifyContent={"center"}
                        >
                            Non Tech Event Entries :
                            <Box width={"fit-content"} paddingY={3} fontSize={"2xl"}>
                                {props.registerCount.nonTechCount + 2}
                            </Box>
                        </Box>
                        <Box
                            padding={2}
                            paddingY={5}
                            rounded={"10px"}
                            textAlign={"center"}
                            fontWeight={"bold"}
                            flex={1}
                            borderRadius={"30px"}
                            backgroundColor={"rgba(0, 0, 0, 0.442)"}
                            display={"flex"}
                            alignItems={"center"}
                            gap={5}
                            justifyContent={"center"}
                        >
                            Workshop Entries :{" "}
                            <Box width={"fit-content"} paddingY={3} fontSize={"2xl"}>
                                {props.registerCount.workShopsCount}
                            </Box>
                        </Box>
                        <Box
                            padding={2}
                            paddingY={5}
                            rounded={"10px"}
                            textAlign={"center"}
                            borderRadius={"30px"}
                            backgroundColor={"rgba(0, 0, 0, 0.442)"}
                            fontWeight={"bold"}
                            flex={1}
                            display={"flex"}
                            alignItems={"center"}
                            gap={5}
                            justifyContent={"center"}
                        >
                            Total Entries :{" "}
                            <Box width={"fit-content"} paddingY={3} fontSize={"2xl"}>
                                {props.registerCount.totalCount + 2}
                            </Box>
                        </Box>
                        {/* <Box>Musical Night Entries: 3</Box> */}
                    </Container>

                    <Box display={"flex"} flexDirection={"column"} gap={10} width={"100%"} alignItems={"center"}>
                        <img
                            src={skull}
                            alt="skull"
                            style={{
                                width: "40%",
                                height: "40%",
                                position: "absolute",
                                top: "28%",
                                opacity: "5%"
                            }}
                        />
                        <Button
                            colorScheme="red"
                            onClick={handleDownloadTechEventRegistrationSheet}
                            width={"fit-content"}
                            loadingText="Downloading Tech Event Registration Sheet"
                            isLoading={isDownloadingTechEventRegistrationSheet}
                        >
                            Download Tech Event Registration Sheet
                        </Button>
                        <Button
                            colorScheme="red"
                            onClick={handleDownloadNonTechEventRegistrationSheet}
                            width={"fit-content"}
                            loadingText="Downloading Non Tech Event Registration Sheet"
                            isLoading={isDownloadingNonTechEventRegistrationSheet}
                        >
                            Download Non Tech Event Registration Sheet
                        </Button>
                        <Button
                            colorScheme="red"
                            onClick={handleDownloadWorkshopRegistrationSheet}
                            width={"fit-content"}
                            loadingText="Downloading Workshop Registration Sheet"
                            isLoading={isDownloadingWorkshopRegistrationSheet}
                        >
                            Download Workshop Registration Sheet
                        </Button>

                        <Button
                            colorScheme="red"
                            onClick={fetchImages}
                            loadingText="Downloading Payment Reciepts"
                            isLoading={isDownloadingZipFile}
                            width={"fit-content"}
                        >
                            Download Payment Reciepts
                        </Button>
                        {/* <Button onClick={handleDownloadMusicalNightRegistrationSheet} width={"fit-content"}>
                        Download Musical Night Registration Sheet
                    </Button> */}
                    </Box>
                </Box>
            </div>
        </>
    );
}
