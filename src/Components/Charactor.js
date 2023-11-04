import { StarIcon } from "@chakra-ui/icons";
import { Card, CardHeader, Button, Heading, Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function setLocalUrlStorage(val) {
    window.localStorage.setItem("likes", JSON.stringify(val))
}

function getLocalUrlStrorage() {
    return JSON.parse(window.localStorage.getItem("likes"))
}

function Charactor({ ...props }) {
    const [urls, setUrls] = useState([]);

    useEffect(() => {
        const localUrl = getLocalUrlStrorage();
        if (localUrl) {
            setUrls(getLocalUrlStrorage());
        } else {
            setLocalUrlStorage([]);
        }
    }, []);

    function handleLike(url) {
        let LUrls = getLocalUrlStrorage();
        if (LUrls.includes(url)) {
            LUrls = LUrls.filter((e) => e !== url);
        } else {
            LUrls.push(url);
        }
        setLocalUrlStorage(LUrls);
        setUrls(LUrls)
    }
    return (
        <Card>
            <CardHeader>
                <Box display={"flex"} justifyContent={"space-between"}>
                    <Link to={"/view"} state={{ url: props.item.url }}>
                        <Heading size="sm">{props.item.name}</Heading>
                    </Link>
                    <StarIcon
                        cursor="pointer"
                        onClick={() => handleLike(props.item.url)}
                        color={
                            urls.includes(props.item.url)
                                ? "blue.500"
                                : "whiteAlpha.500"
                        }
                    />
                </Box>
            </CardHeader>
        </Card>
    );
}

export default Charactor;
