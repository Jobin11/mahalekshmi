import React from 'react'
import './best.css'
import Grid from '@mui/material/Grid';
import { CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Card, Button } from 'react-bootstrap';







const Best = () => {

  return (
    <>

      <Grid
        container
        direction="row"
        justifyContent="center"


      >
 

        <Grid container

          className=' mt-3'
          columns={{ sm: 12, md: 12 }}>
          <Grid xs={6}>

            <Card className="bg-dark text-white ms-3 me-3 mb-3" width="300px" height="300px" id="card">
              <Card.Img height="300px" src="images/Rectangle_356.webp" alt="Card image" />
              <Card.ImgOverlay className="mt-5 ">
                <Card.Title className='mt-5'><h1>SILKS SAREES</h1></Card.Title>
                <Card.Text><b>
                  Clothing should reflect not only the apperance of Women,But also the inner world
                </b>
                </Card.Text>

                <Button id='button' variant="danger">DISCOVER MORE</Button>
              </Card.ImgOverlay>
            </Card>




          </Grid>


          {/* <img  width="100%" height="300px" src="images/images (1).jpg" alt="" /> */}

          <Grid className=" " variant="masonry" item xs={3}>

            <Card className="bg-dark text-white ms-3 me-3 mb-3" width="300px" height="300px" id="card">
              <Card.Img height="300px" src="images/Rectangle_365_2.webp" alt="Card image" />
              <Card.ImgOverlay className="mt-5 ">
                <Card.Title className='mt-5'><h1>SOFT SILKS SARESS

                </h1></Card.Title>

                <Button id='button' variant="danger">DISCOVER MORE</Button>
              </Card.ImgOverlay>
            </Card>




          </Grid>



          {/* image="" */}
          <Grid xs={3}>

            <Card className="bg-dark text-white mb-3 ms-3 me-3 " width="300px" height="300px" id="card">
              <Card.Img height="300px" src="images/Rectangle_364.webp" alt="Card image" />
              <Card.ImgOverlay className="mt-5 ">
                <Card.Title className='mt-5'><h1>SAREES JUDE SILKS</h1></Card.Title>


                <Button className=' ms-3' id='button' variant="danger">DISCOVER MORE</Button>
              </Card.ImgOverlay>
            </Card>




          </Grid>


        </Grid>


      </Grid>


      <Grid
        container
        direction="row"
        justifyContent="center"


      >


        <Grid container

          className=' mt-3'
          columns={{ sm: 12, md: 12 }}>


          <Grid xs={3}>

            <Card className="bg-dark text-white ms-3 me-3 mb-3" width="300px" height="300px" id="card">
              <Card.Img height="300px" src="images/Group_1396_2.webp" alt="Card image" />
              <Card.ImgOverlay className="mt-5 ">
                <Card.Title className='mt-5'><h1>SOFT SILKS SARESS

                </h1></Card.Title>


                <Button id='button' variant="danger">DISCOVER MORE</Button>
              </Card.ImgOverlay>
            </Card>




          </Grid>








          {/* image="" */}
          <Grid xs={3}>

            <Card className="bg-dark text-white mb-3 ms-3 me-3" width="300px" height="300px" id="card">
              <Card.Img height="300px" src="images/Rectangle_363_3.webp" alt="Card image" />
              <Card.ImgOverlay className="mt-5 ">
                <Card.Title className='mt-5'><h1>SAREES JUDE SILKS</h1></Card.Title>


                <Button className=' ms-3' id='button' variant="danger">DISCOVER MORE</Button>
              </Card.ImgOverlay>
            </Card>




          </Grid>

          <Grid xs={6}>

            <Card className="bg-dark text-white ms-3 me-3 mb-3" width="300px" height="300px" id="card">
              <Card.Img height="300px" src="images/Rectangle_361_4.webp" alt="Card image" />
              <Card.ImgOverlay className="mt-5 ">
                <Card.Title className='mt-5'><h1>SILKS SAREES</h1></Card.Title>
                <Card.Text><b>
                  Clothing should reflect not only the apperance of Women,But also the inner world
                </b>
                </Card.Text>

                <Button id='button' variant="danger">DISCOVER MORE</Button>
              </Card.ImgOverlay>
            </Card>




          </Grid>




        </Grid>




      </Grid>
      <Grid conatiner
        className=' mt-3'
        columns={{ sm: 12, md: 12 }}>

        <Grid xs={12}>


          <Card className="bg-dark text-white mb-3 ms-3 me-3 " width="300px" height="300px" id="card">
            <Card.Img height="300px" src="images/Foreground_7.webp" alt="Card image" />
            <Card.ImgOverlay className="mt-5 ">
              <Card.Title className='mt-5'><h1>NEW PRODUCTS</h1></Card.Title>


              <Button className=' ms-3' id='button' variant="danger">DISCOVER MORE</Button>
            </Card.ImgOverlay>
          </Card>



        </Grid>
      </Grid>

    </>


  );
}

export default Best