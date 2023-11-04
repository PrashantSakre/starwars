import { Card, CardHeader, Heading, Tag } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Film({ ...props }) {
    const [film, setFilm] = useState({});

    useEffect(() => {
        axios.get(props.url).then((d) => {
            setFilm(d.data);
        });
    }, [props.url]);

    return (
        <Tag size={"lg"} variant="solid">
            {film.title}
        </Tag>
    );
}

export default Film;
