import { useState } from 'react'
import { Card } from '../components/Card'
import useMarvelAPI from '../hooks/useFetch'
import { Container } from '@mui/material'
import SearchBar from '../components/SearchBar'
import { PropagateLoader } from 'react-spinners'
const ENDPOINT = "https://gateway.marvel.com/v1/public/characters"

const home = () => {
    const { data, search } = useMarvelAPI(ENDPOINT)

    if (!data || !data.data) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <PropagateLoader color="#F0131E" />
            </div>
        )
    }


    return (
        <Container maxWidth="xl">
            <div className="flex flex-col gap-6 justify-center items-center w-120">
                <h2 className='text-3xl font-semibold'>MarvelApp</h2>
                <SearchBar onSearch={search} />
            </div>
            <div className="grid grid-cols-4 gap-6">
                {data.data.results.map((character) => (
                    <Card key={character.id} name={character.name} img={`${character.thumbnail.path}.${character.thumbnail.extension}`} info={character.description} comics={character.comics} />
                ))}
            </div>
        </Container>
    )
}

export default home