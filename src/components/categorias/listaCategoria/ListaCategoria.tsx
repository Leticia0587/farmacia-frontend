import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@mui/material';
import './ListaCategoria.css';
import useLocalStorage from 'react-use-localstorage';
import Categoria from '../../../models/Categoria';
// import { busca } from '../../../service/Service';
// import { useSelector } from 'react-redux';
// import { TokenState } from '../../../store/tokens/tokensReducer';
// import { toast } from 'react-toastify';

function ListaCategoria() {
    
const [categoria, setCategoria] = useState<Categoria[]>([])
let navigate = useNavigate();
const [token, setToken] = useLocalStorage('token');

//   const token = useSelector<TokenState, TokenState["tokens"]>(
//     (state) => state.tokens
//   );

useEffect(()=>{
    if(token == ''){
//       toast.error('Você precisa estar logado', {
//         position: "top-right",
//         autoClose: 2000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: false,
//         draggable: false,
//         theme: "colored",
//         progress: undefined,
//     });
    navigate("/login")
    }
}, [token])


// async function getCategoria(){
//     await busca("/categoria", setCategoria, {
//     headers: {
//         'Authorization': token
//     }
//     })
// }


// useEffect(()=>{
//     getCategoria()
// }, [categoria.length])

return (
    <>
    {
    categoria.map(categoria =>(

    <Box m={2} key={categoria.id} display="flex" flexWrap="wrap" justifyContent="center">

        <Card variant="outlined" className='margin'>
        <CardContent>

            <Typography color="textSecondary" gutterBottom>
            Categoria
            </Typography>

            <Typography variant="h5" component="h2">
            {categoria.tipo}
            </Typography>
        </CardContent>


        <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

            <Link to={`/formularioCategoria/${categoria.id}`} className="text-decorator-none">
                <Box mx={1}>
                <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    atualizar
                </Button>
                </Box>
            </Link>


            <Link to={`/deletarCategoria/${categoria.id}`} className="text-decorator-none">
                <Box mx={1}>
                <Button variant="contained" size='small' color="secondary">
                    deletar
                </Button>
                </Box>
            </Link>

            </Box>
        </CardActions>
        </Card>
    </Box>
    ))
    }
    </>
);
}

export default ListaCategoria;