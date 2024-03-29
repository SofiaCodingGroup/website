import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { Container } from '@material-ui/core';
import RadioGroup from '../../common/RadioGroup/RadioGroup';
import Selects from '../../common/Selects/Selects';
const Home = () => {
  useEffect(() => {}, []);
  return (
    <Container style={{ paddingTop: 50 }}>
      <Grid container spacing={5}>
        <Grid md={6} item>
          <RadioGroup />
          <Selects />
        </Grid>
        <Grid md={6} item id="map-container" />
      </Grid>
    </Container>
  );
};

export default Home;
