import React from 'react'
import './best.css'
import Grid from '@mui/material/Grid';
import { CardContent, CardMedia , Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Card ,Button } from 'react-bootstrap';







const Best = () => {

  return (
<>

    <Grid    container
    direction="row"
    justifyContent="center"
  
    
  >
    {/* <div className="img-wrapper">
<img  width="100%" height="300px" src="images/banner-img-01.webp" alt="" />
<span><Grid className="top mb-5"  xs={4}>
  <div >
  <h1 >SILKS SAREES</h1>
  <p >Clothing should reflect not only the apperance of Women,
  
    But also the inner world.
    </p>
    <Button className='mb-5' color="error"  variant="contained">DISCOVER MORE</Button>
  </div>
  
 
    </Grid>
    </span>
   
 
 
</div> */}
  
      <Grid container 
  
      className=' mt-3'
       columns={{  sm: 12, md: 12 }}>
      <Grid className="" variant="masonry" item xs={6}>

<Card className="bg-dark text-white ms-3 me-3 mb-3" width="300px" height="300px" id="card">
  <Card.Img height="300px" src="images/banner-img-01.webp" alt="Card image" />
  <Card.ImgOverlay className="mt-5 ">
    <Card.Title className='mt-5'><h1>SILKS SAREES</h1></Card.Title>
    <Card.Text><b>
    Clothing should reflect not only the apperance of Women,But also the inner world
    </b>
    </Card.Text>
 
    <Button  id='button' variant="danger">DISCOVER MORE</Button> 
  </Card.ImgOverlay>
</Card>
   



        </Grid>
   

{/* <img  width="100%" height="300px" src="images/images (1).jpg" alt="" /> */}

     <Grid className=" " variant="masonry" item xs={3}>

<Card className="bg-dark text-white ms-3 me-3 mb-3" width="300px" height="300px" id="card">
  <Card.Img height="300px" src="images/images (1).jpg" alt="Card image" />
  <Card.ImgOverlay className="mt-5 ">
    <Card.Title className='mt-5'><h1>SOFT SILKS SARESS

</h1></Card.Title>
    
 
    <Button  id='button' variant="danger">DISCOVER MORE</Button> 
  </Card.ImgOverlay>
</Card>
   



        </Grid>




      
      
      
     
         {/* image="" */}
        <Grid className=" " variant="masonry" item xs={3}>

<Card className="bg-dark text-white mb-3 ms-3 me-3 " width="300px" height="300px" id="card">
  <Card.Img height="300px" src="images/banner-16-nov-mob-2.jpg" alt="Card image" />
  <Card.ImgOverlay className="mt-5 ">
    <Card.Title className='mt-5'><h1>SAREES JUDE SILKS</h1></Card.Title>
   
 
    <Button className=' ms-3' id='button' variant="danger">DISCOVER MORE</Button> 
  </Card.ImgOverlay>
</Card>
   



        </Grid>

    
      </Grid>
    

    </Grid>





    <Grid    container
    direction="row"
    justifyContent="center"
  
    
  >
    {/* <div className="img-wrapper">
<img  width="100%" height="300px" src="images/banner-img-01.webp" alt="" />
<span><Grid className="top mb-5"  xs={4}>
  <div >
  <h1 >SILKS SAREES</h1>
  <p >Clothing should reflect not only the apperance of Women,
  
    But also the inner world.
    </p>
    <Button className='mb-5' color="error"  variant="contained">DISCOVER MORE</Button>
  </div>
  
 
    </Grid>
    </span>
   
 
 
</div> */}
  
      <Grid container 
  
      className=' mt-3'
       columns={{  sm: 12, md: 12 }}>

   

{/* <img  width="100%" height="300px" src="images/images (1).jpg" alt="" /> */}

     <Grid className=" " variant="masonry" item xs={3}>

<Card className="bg-dark text-white ms-3 me-3 mb-3" width="300px" height="300px" id="card">
  <Card.Img height="300px" src="images/images (1).jpg" alt="Card image" />
  <Card.ImgOverlay className="mt-5 ">
    <Card.Title className='mt-5'><h1>SOFT SILKS SARESS

</h1></Card.Title>
    
 
    <Button  id='button' variant="danger">DISCOVER MORE</Button> 
  </Card.ImgOverlay>
</Card>
   



        </Grid>




      
      
      
     
         {/* image="" */}
        <Grid className=" " variant="masonry" item xs={3}>

<Card className="bg-dark text-white mb-3 ms-3 me-3" width="300px" height="300px" id="card">
  <Card.Img height="300px" src="images/banner-16-nov-mob-2.jpg" alt="Card image" />
  <Card.ImgOverlay className="mt-5 ">
    <Card.Title className='mt-5'><h1>SAREES JUDE SILKS</h1></Card.Title>
   
 
    <Button className=' ms-3' id='button' variant="danger">DISCOVER MORE</Button> 
  </Card.ImgOverlay>
</Card>
   



        </Grid>

        <Grid className="" variant="masonry" item xs={6}>

<Card className="bg-dark text-white ms-3 me-3 mb-3" width="300px" height="300px" id="card">
  <Card.Img height="300px" src="images/banner-img-01.webp" alt="Card image" />
  <Card.ImgOverlay className="mt-5 ">
    <Card.Title className='mt-5'><h1>SILKS SAREES</h1></Card.Title>
    <Card.Text><b>
    Clothing should reflect not only the apperance of Women,But also the inner world
    </b>
    </Card.Text>
 
    <Button  id='button' variant="danger">DISCOVER MORE</Button> 
  </Card.ImgOverlay>
</Card>
   



        </Grid>




      </Grid>
    

    

    </Grid>

</>


  );
}

export default Best