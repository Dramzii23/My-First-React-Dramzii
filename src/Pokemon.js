import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Container,
  CardActionArea,
} from "@mui/material";

const Pokemon = () => {
  const [pokemones, setPokemones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); //Es null por que no hay error y el error seria un objeto

  useEffect(() => {
    const traerPokemones = async () => {
      try {
        const respuesta = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=20"
        );
        if (!respuesta.ok) {
          setError("Ocurrio un error");
        } else {
          const data = await respuesta.json();
          setPokemones(data.results);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    traerPokemones();
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Typography variant="h3">{error}</Typography>
        ) : (
          pokemones.map((pokemon) => (
            <Grid item key={pokemon.name} xs={12} sm={6} md={4}>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h5">{pokemon.name}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default Pokemon;
