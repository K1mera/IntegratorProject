import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import style from '../modulesCss/detail.module.css'


export const Detail = () => {

    const { id } = useParams()
    const [Character, setCharacter] = useState({})

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);

    console.log(Character);

    return (
        <div className={ style.container }>
            <div className={ style.info }>
                <h1>{ Character.name }</h1>
                <br/>
                <h2>species: { Character.species }</h2>
                <h2>gender: { Character.gender }</h2>
                <h2>status: { Character.status }</h2>
                <h2>location: { Character.location?.name }</h2>
                <h2>origin: { Character.origin?.name }</h2>
            </div>
            <div >
                <img src={ Character.image } className={ style.img } />
            </div>
            
            
        </div>
    )
}
