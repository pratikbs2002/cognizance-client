import React from "react";
// import { useState } from "react";
import { Box, Button, Container, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
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

    const handleDownloadTechEventRegistrationSheet = async () => {
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
    };

    const handleDownloadWorkshopRegistrationSheet = async () => {
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

    const handleDownloadNonTechEventRegistrationSheet = async () => {
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
    };

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
                        <Button
                            colorScheme="red"
                            onClick={handleDownloadTechEventRegistrationSheet}
                            width={"fit-content"}
                        >
                            Download Tech Event Registration Sheet
                        </Button>
                        <Button
                            colorScheme="red"
                            onClick={handleDownloadNonTechEventRegistrationSheet}
                            width={"fit-content"}
                        >
                            Download Non Tech Event Registration Sheet
                        </Button>
                        <Button
                            colorScheme="red"
                            onClick={handleDownloadWorkshopRegistrationSheet}
                            width={"fit-content"}
                        >
                            Download Workshop Registration Sheet
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
