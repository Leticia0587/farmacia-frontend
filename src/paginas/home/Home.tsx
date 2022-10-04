import { Box, Button, Grid, Typography } from '@mui/material';
import './Home.css';

function Home() {
  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#3acc59" }}>
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20} >
            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja Bem Vinde</Typography>
            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>encontre aqui o que você procura!</Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
            </Box>
            <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#3F51B5", color: "white" }}>Ver Produtos</Button>
          </Box>
        </Grid>
        <Grid item xs={6} >
          <img src="https://thumbs.dreamstime.com/b/farmaceuta-wektoru-ilustracja-farmaceuta-na-tle-p%C3%B3%C5%82ki-z-lekarstwami-71719701.jpg" alt="" width="600px" height="500px" />
        </Grid>
        <Grid xs={12} style={{ backgroundColor: "white" }}>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;