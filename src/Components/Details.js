import { Text } from "@chakra-ui/react";
import React from "react";

function Details({ ...props }) {
    return (
        <>
            <Text pt="2" fontSize="sm">
                Birth year: {props.data.birth_year}
            </Text>
            <Text pt="2" fontSize="sm">
                Eye color: {props.data.eye_color}
            </Text>
            <Text pt="2" fontSize="sm">
                Hair color: {props.data.hair_color}
            </Text>
            <Text pt="2" fontSize="sm">
                Mass: {props.data.mass}
            </Text>
            <Text pt="2" fontSize="sm">
                Skin color: {props.data.skin_color}
            </Text>
        </>
    );
}

export default Details;
