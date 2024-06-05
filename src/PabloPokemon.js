import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Container,
  CardActionArea,
  Button,
  ImageList,
  ImageListItem,
  ButtonGroup,
} from "@mui/material";

const PabloPokemon = () => {
  const [pabloPokemones, setpabloPokemones] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); //Es null por que no hay error y el error seria un objeto

  const [pokemonSeleccionado, setPokemonSeleccionado] = useState(null); //Es null por que no hay error y el error seria un objeto

  useEffect(() => {
    //Corre antes de pintar o renderizar
    const traerPabloPokemones = async () => {
      const respuesta = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=20"
      );
      if (!respuesta.ok) {
        setError("Ocurrio un error");
      } else {
        const data = await respuesta.json();
        setpabloPokemones(data.results); // Aquí está la corrección
        console.log(data.results);
      }
    };

    traerPabloPokemones();
  }, []);

  // ` Backtick
  // ` Backtick
  const fetchDetallePokemon = async (id) => {
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!respuesta.ok) {
      setError("Ocurrio un error");
    } else {
      const data = await respuesta.json();
      setPokemonSeleccionado(data); // Aquí está la corrección
      console.log(data);
    }
  };

  return (
    <div>
      <h1>Lista Pablo Pokemones</h1>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ImageList cols={5} rowHeight={120}>
            {pabloPokemones.map((pabloPokemon, index) => (
              <ImageListItem key={index}>
                <Button
                  key={index}
                  variant="outlined"
                  onClick={() => fetchDetallePokemon(index + 1)}
                >
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                      index + 1
                    }.png`}
                    alt={pabloPokemon.name}
                  />
                  {pabloPokemon.name}
                </Button>
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Grid>

      <hr />

      <h1>Detalle de Pokemon</h1>

      {/* Este elemento aparece solo cuando pokemonsSeleccionado es diferente a Null */}
      <Container>
        {pokemonSeleccionado && (
          <Card>
            <CardContent>
              <Typography variant="h3" className="FirstName">
                <b>Nombre: </b>
                {pokemonSeleccionado.name}
              </Typography>
              <img src={pokemonSeleccionado.sprites.front_default} alt="" />
              <Typography variant="H5" component={"div"}>
                Altura: {pokemonSeleccionado.height}
              </Typography>
              <p>Peso: {pokemonSeleccionado.weight}</p>
              <p>Experiencia base: {pokemonSeleccionado.base_experience}</p>
              <p>Tipos:</p>
              <p> Habilidades:</p>
            </CardContent>
          </Card>
        )}
      </Container>
    </div>
  );
};

export default PabloPokemon;
