import React, { useState } from 'react';
import {
    Box,
    Image,
    Text,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';

const ComboCard = ({ name, image, price }) => {
    const [isTeamRegistered, setIsTeamRegistered] = useState(false);

    const boxShadowColor = useColorModeValue(
        isTeamRegistered ? 'rgba(72, 187, 120, 0.5)' : 'rgba(239, 68, 68, 0.5)',
        isTeamRegistered ? 'rgba(72, 187, 120, 0.2)' : 'rgba(239, 68, 68, 0.2)'
    );
    const borderColor = useColorModeValue(
        isTeamRegistered ? 'green.500' : 'red.500',
        isTeamRegistered ? 'green.300' : 'red.300'
    );
    const handleRegisterTeam = () => {
        setIsTeamRegistered(!isTeamRegistered);
    };

    return (
        <Box
            maxW={"250px"}
            borderWidth="5px"
            borderRadius="lg"
            overflow="hidden"
            backgroundColor={"rgba(0, 0, 0, 0.442)"}
            borderColor={borderColor}
            p={4}
            boxShadow={`0 0 30px ${boxShadowColor}`}
            transition="box-shadow 0.3s"
            mx="auto"
            mb={4}
        >
            <Image src={image} alt={name} w="100%" h="auto" />
            <Text color="white" mt={2} fontSize="xl" fontWeight="semibold">
                {name}
            </Text>
            <Text mt={2} color="white">
                ${price}
            </Text>
            <Button
                mt={4}
                backgroundColor="white"
                onClick={handleRegisterTeam}
                variant="outline"
                w="100%"
            >
                {isTeamRegistered ? 'Unregister Team' : 'Register Team'}
            </Button>
        </Box>
    );
};

export default ComboCard;
