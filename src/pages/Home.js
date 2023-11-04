import React, { useEffect, useState } from "react";
import {
    Box,
    Container,
    Grid,
    GridItem,
    Heading,
} from "@chakra-ui/react";
import axios from "axios";
import Pagination from "rc-pagination";
import Charactor from "../Components/Charactor";

function Home() {
    const [currentPage, setCurrentPage] = useState(1);
    const [count, setCount] = useState();
    const [allList, setAllList] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchList(currentPage);
    }, []);

    function handlePageChange(current, pageSize) {
        fetchList(current);
    }

    function fetchList(page) {
        setLoading(true)
        axios.get(`https://swapi.dev/api/people?page=${page}`).then((d) => {
            setCount(d.data.count);
            setAllList(d.data.results);
            setLoading(false)
        });
    }

    return (
        <Box p={4}>
            <Heading>All Starwars Character</Heading>
            {allList ? (
                <>
                    <Box py={4}>
                        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                            {allList.map((item) => {
                                return (
                                    <GridItem w="100%" key={item.url}>
                                        <Charactor item={item} />
                                    </GridItem>
                                );
                            })}
                        </Grid>
                    </Box>
                    <Container>
                        <Pagination
                            nextIcon={"Next >"}
                            prevIcon={"< Previous"}
                            jumpNextIcon={"..."}
                            jumpPrevIcon={"..."}
                            total={count}
                            onChange={handlePageChange}
                        />
                        {loading ? 'Updating...' : null}
                    </Container>
                </>
            ) : (
                "Loading..."
            )}
        </Box>
    );
}

export default Home;
