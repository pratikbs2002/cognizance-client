import React, { useState } from 'react';
import {
    Box,
    Image,
    Text,

} from '@chakra-ui/react';

const MemberCard = ({ image, name, des }) => {

    return (
        <Box
            maxW={"250px"}
            borderWidth="5px"
            borderRadius="lg"
            overflow="hidden"
            backgroundColor={"rgba(0, 0, 0, 0.442)"}
            p={4}
            transition="box-shadow 0.3s"
            mx="auto"
            mb={4}
        >
            <Image src={image} alt={name} w="100%" h="auto" />
            <Text color="white" mt={2} fontSize="xl" fontWeight="semibold">
                {name}
            </Text>
            <Text color="white" mt={2} fontSize="xl" fontWeight="semibold">
                {des}
            </Text>

        </Box>
    );
};

export default MemberCard;
