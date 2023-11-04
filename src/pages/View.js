import {
    Box,
    Card,
    CardBody,
    CardHeader,
    Grid,
    GridItem,
    Heading,
    Stack,
    StackDivider,
    Text,
    Button,
    HStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Film from "../Components/Film";
import Details from "../Components/Details";

function View() {
    const navigate = useNavigate();
    let location = useLocation();
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(location.state.url).then((d) => {
            setData(d.data);
        });
    }, [location]);

    return (
        <Box p={4}>
            <Box mb={4}>
                <Button onClick={() => navigate("/")}>Back</Button>
            </Box>
            {data ? (
                <Card>
                    <CardBody>
                        <Stack divider={<StackDivider />}>
                            <Heading size={"lg"}>{data.name}</Heading>
                            <Box>
                                <Details data={data} />
                            </Box>
                            <Box>
                                <Heading size="lg">Films Appeared In</Heading>
                                <HStack mt={4} spacing={4}>
                                    {data?.films?.map((d) => (
                                        <Film url={d} key={d} />
                                    ))}
                                </HStack>
                            </Box>
                        </Stack>
                    </CardBody>
                </Card>
            ) : (
                "loading..."
            )}
        </Box>
    );
}

export default View;
