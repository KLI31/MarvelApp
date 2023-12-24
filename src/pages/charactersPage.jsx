import React, { useState } from "react";
import { Container } from "@mui/material";
import SearchBar from "../components/SearchBar";
import { PropagateLoader } from "react-spinners";
import useMarvelAPI from "../hooks/useFetch";
import { CardDetails } from "../components/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@mui/material";

const ENDPOINT = "https://gateway.marvel.com/v1/public/characters";

const CharactersPage = () => {
    const { data, search } = useMarvelAPI(ENDPOINT);
    const [startIndex, setStartIndex] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
    };

    if (!data || !data.data) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <PropagateLoader color="#F0131E" />
            </div>
        );
    }

    const charactersToShow = data.data.results.slice(startIndex, startIndex + 4);

    return (
        <Container maxWidth="xl">
            <div className="flex flex-col items-center justify-center gap-10">
                <h1 className="text-3xl font-semibold">Peliculas y series de marvel</h1>
                <SearchBar onSearch={search} />
            </div>
            <Container className="mt-10">
                <Slider {...settings}>
                    {charactersToShow.map((character) => (
                        <div className="flex gap-4">
                            <CardDetails
                                key={character.id}
                                name={character.name}
                                img={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                                comic={character.comics.items}
                                movie={character.series.items}
                            />
                        </div>
                    ))}
                </Slider>
                <div className="mt-10 flex justify-center gap-5">
                    <Button
                        variant="contained"
                        onClick={() => setStartIndex(Math.max(0, startIndex - 4))}
                        disabled={startIndex === 0}
                    >
                        Anterior
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => setStartIndex(Math.min(data.data.results.length - 4, startIndex + 4))}
                        disabled={startIndex + 4 >= data.data.results.length}
                    >
                        Siguiente
                    </Button>
                </div>
            </Container >
        </Container >
    );
};

export default CharactersPage;

