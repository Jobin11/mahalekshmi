import { CardActions, CardContent, CardMedia, Grid, Typography, Button, ImageList, ImageListItem, Link } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import React, { useEffect, useState } from 'react';
import './Data'
import Data from './Data';
import './product.css'


const Product = () => {

    const [filter, setFilter] = useState(Data.products)

    const filterProduct = (cat) => {
        const updatedList = Data.products.filter((x) => x.category === cat)
        setFilter(updatedList);
    }
    const lessProduct = () => {

        const list = Data.products.filter((x) => x.price < 5000)
        setFilter(list)
    }

    const theme = createTheme();

    theme.typography.h3 = {
        fontSize: '1.2rem',
        '@media (min-width:600px)': {
            fontSize: '1.5rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2rem',
        },
    };

    return (
        <div theme={theme}>

            <ThemeProvider theme={theme}>


            
                <h1 className='text-center mb-4 heading one' >Best sellers</h1>
                <div className='buttons d-flex justify-content-center mb-5 pb-5'>
                    <Button href="" className='text-dark me-2' underline="none" onClick={() => (setFilter(Data.products))}>
                        {'SAREES'}


                    </Button>

                    <Button href="" className='text-dark me-2' underline="none" onClick={() => (filterProduct("Silk Saree"))}>
                        {'SILK SAREES'}


                    </Button>

                    <Button href="" className='text-dark me-2' underline="none" onClick={() => (filterProduct("Soft Silk Saree"))}>
                        {'SOFT SILK SAREES'}
                      

                    </Button>

                    <Button href="" className='text-dark me-2' underline="none" onClick={() => (filterProduct("tops and kurtis"))}>
                        {'TOP & KURTIS'}

                    </Button>

                    <Button className='text-dark me-2' underline="none" onClick={() => (lessProduct())}>
                        {'SAREES BELOW RS:5000'}


                    </Button>

                    <Button className='text-dark me-2' underline="none" onClick={() => (filterProduct("cotton sarees"))}>
                        {'COTTON SAREES'}
                  
                    </Button>


                </div>
            </ThemeProvider>



            <div className=' '>


                <Grid container>

                    {filter.map((product) => (
                        <Grid item xs={12} sm={8} md={3}>


                            <Card className='ms-5 mb-3 mt-3 me-5' sx={{ maxWidth: 345 }}>
                                <img width="100%" height="300" src={product.image}></img>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                       {product.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                       {product.category}
                                    </Typography>
                                    <Typography variant="body4" color="dark">
                                   <b><i class="fa fa-inr" aria-hidden="true"></i>  : {product.price}</b> 
                                    </Typography>
                                </CardContent>
                               
                            </Card>


                        </Grid>
                    ))}
                </Grid>


            </div>








        </div>
    )
}

export default Product