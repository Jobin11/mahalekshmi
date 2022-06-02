import { Card, Button, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { Carousel } from 'react-bootstrap'

const Buzz = () => {
  return (
    <div>

<Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="mt-5"
        spacing={{ xs: 2 }} columns={{ xs: 4, sm: 12, md: 12 }}
      >



        <Grid xs={3}><h3 className='ms-5 me-5 '>#Buzz Style</h3></Grid>
        <Grid
         xs={3}
         
         textAlign="right"><h5 className='me-4' >View All</h5></Grid>
        <Grid xs={6}>


        <h3 className='me-4 ms-4' >#Happy Clients</h3>
           </Grid>


        </Grid>



      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        className=' me-3 mt-3'
        spacing={{ xs: 2 }} columns={{ xs: 4, sm: 12, md: 12 }}
      >

        <Grid xs={3}>
          <Card className='ms-5 me-3 mb-3'


            sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="330"
                image="/images/e548ba10fa5455c6d65072aa647f7cd1.jpg"
                alt=""
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  NEW ARRIVALS
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil)
                  by Cicero, written in 45 BC. This book is a treatise on the theory of ethics,
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions>

              <Button size="small">VIEW MORE</Button>
            </CardActions>
          </Card>


        </Grid>
        <Grid xs={3}>

          <Card className='ms-5 me-3 mb-3'


            sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="330"
                image="images/48874254816_023a2bf08e_b.jpg"
                backgroundSize="cover"
                alt=""
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                WHY DO WE USE IT
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions>

              <Button size="small">VIEW MORE</Button>
            </CardActions>
          </Card>

        </Grid>

        <Grid xs={6}>

        
          <Carousel className='ms-4 me-3'>
            <Carousel.Item>
              <img
                className="d-block w-100 "
                src="images/mlsb.jpg"
                alt="First slide"
                height="450"
                width="100%"
              />

              <CardContent>

                <Typography className='p-3 text-center mb-4' variant="body2" color="text.secondary">
                  <i className="fa fa-3x fa-solid text-light fa-quote-left me-3"></i>

                  Maecenas mollis, nisi quis placerat maximus, ipsum orci faucibus est,
                  quis eleifend felis sem quis velit. Sed blandit malesuada nunc at aliquet.
                  Nunc in pellentesque enim. Praesent fringilla, massa et faucibus iaculis,
                  orci neque vehicula erat, at posuere sapien tellus non arcu.

                </Typography>
                <h6 className='ms-3'><b># Happy Clients</b></h6>
                <p className='ms-3'>Sales Mahalekshmi Silks</p>
              </CardContent>

            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/banner-img-01.webp"
                alt="Second slide"
                height="450"
                width="100%"
              />
              <CardContent>

                <Typography className='p-3 text-center' variant="body2" color="text.secondary">
                  <i className="fa fa-3x fa-solid text-light fa-quote-left me-3"></i>

                  Maecenas mollis, nisi quis placerat maximus, ipsum orci faucibus est,
                  quis eleifend felis sem quis velit. Sed blandit malesuada nunc at aliquet.
                  Nunc in pellentesque enim. Praesent fringilla, massa et faucibus iaculis,
                  orci neque vehicula erat, at posuere sapien tellus non arcu.

                </Typography>
                <h6 className='ms-3'><b># Happy World</b></h6>
                <p className='ms-3'>Sales Mahalekshmi Silks</p>
              </CardContent>


            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 "
                src="images/mlsb.jpg"
                alt="First slide"
                height="450"
                width="100%"
              />

              <CardContent>

                <Typography className='p-3 text-center' variant="body2" color="text.secondary">
                  <i className="fa fa-3x fa-solid text-light fa-quote-left me-3"></i>

                  Maecenas mollis, nisi quis placerat maximus, ipsum orci faucibus est,
                  quis eleifend felis sem quis velit. Sed blandit malesuada nunc at aliquet.
                  Nunc in pellentesque enim. Praesent fringilla, massa et faucibus iaculis,
                  orci neque vehicula erat, at posuere sapien tellus non arcu.

                </Typography>
                <h6 className='ms-3'><b># Happy Clients</b></h6>
                <p className='ms-3'>Sales Mahalekshmi Silks</p>
              </CardContent>

            </Carousel.Item>

          </Carousel>


        </Grid>


      </Grid>
      <Grid
         container
         direction="row"
         justifyContent="space-evenly"
         className=' me-3 mt-3'
         spacing={{ xs: 2 }} columns={{ xs: 4, sm: 12, md: 12 }}
      >
        <Grid xs={3}>

          <Card className='ms-5 me-3 mb-4 '


            sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="330"
                image="images/48874254816_023a2bf08e_b.jpg"
                backgroundSize="cover"
                alt=""
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                WHAT IS LOREM IPSUM
                </Typography>
                <Typography variant="body2" color="text.secondary">
                All the Lorem Ipsum generators on the Internet tend to repeat predefined
                chunks as necessary, making this the first true generator on the Internet.
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions>

              <Button size="small">VIEW MORE</Button>
            </CardActions>
          </Card>

        </Grid>
        <Grid xs={3}>
          <Card className='ms-5 me-3 mb-4  '


            sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="330"
                image="images/48874254816_023a2bf08e_b.jpg"
                backgroundSize="cover"
                alt=""
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                WHERE CAN I GET SOME
                </Typography>
                <Typography variant="body2" color="text.secondary">
                There are many variations of passages of Lorem Ipsum available, but the majority have
                 suffered alteration in some form, by injected humour,
                 or randomised words which don't look even slightly believable. If you are going to use
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions>

              <Button size="small">VIEW MORE</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid xs={6}></Grid>
      </Grid>

    </div>
  )
}

export default Buzz