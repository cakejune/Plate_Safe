import React from "react";
import RestCard from "./RestCard";
import PhotoAlbum from "react-photo-album";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


function Home({ restaurantData, deleteRestaurant }) {
  //here we have states. Restaurants is all the restaurants. deleteRestaurant is a
  //callback function that lives in App.js. That function will take a restaurant.
  // function handleClick(e){
  //     setRestaurantState(e.target.value)
  //     deleteRestaurant(restaurants.find_by(restaurant.name = e.target.name))
  // }

  //dummy handleClick function below
  function handleClick() {
    console.log(
      "this will eventually delete a restaurant",
      restaurantData,
      deleteRestaurant
    );
  }

  const photosv1 = [
    {
      src: "https://cdn.discordapp.com/attachments/1004488296493228134/1050445869075410954/CakeJune_photograph_of_arepas_dish_fork-and-knife_watermark_on__2df2f9f5-9b95-43a2-8f4e-da99f8c4514c.png",
      width: 1600,
      height: 900,
    },
    {
      src: "https://cdn.discordapp.com/attachments/1004488296493228134/1050446173804179507/CakeJune_photograph_of_chicken_tikka_masala_bottom_right_hand_c_1763ebb4-f99f-4e11-bd5e-9e233e57f90d.png",
      width: 1600,
      height: 900,
    },
    {
      src: "https://cdn.discordapp.com/attachments/1004488296493228134/1050462071822757918/CakeJune_Pencil_drawing_of_stinky_tofu_fc1d2c76-e401-4aa1-ab65-fafbdc146af1.png",
      width: 800,
      height: 600,
    },
    {
      src: "https://cdn.discordapp.com/attachments/1004488296493228134/1050463616803020990/CakeJune_painting_of_Linguini_with_Clams_dish_ff07a419-4c9d-4240-8397-cb0fd3b702b6.png",
      width: 1600,
      height: 900,
    },
    {
      src: "https://cdn.discordapp.com/attachments/1004488296493228134/1050446920109273149/CakeJune_oil_painting_of_Chicken_Milanese_d67deeab-406e-4a81-b926-42643f5b020c.png",
      width: 403,
      height: 403,
    },
  ];
  const photosv2 = [
    {
      src: "https://cdn.discordapp.com/attachments/1004488296493228134/1050479734703784047/CakeJune_Fish_and_Chips_dish_in_the_style_of_Monet_d5ffd98f-feb5-4975-9da8-348634108825.png",
      width: 800,
      height: 600,
    },
    {
      src: "https://cdn.discordapp.com/attachments/1004488296493228134/1050480614354194432/CakeJune_Chilli_con_Carne_dish_illustrated_by_Lane_Smith_11435aed-7ab8-49eb-b921-8d005027b7e2.png",
      width: 800,
      height: 600,
    },
    {
      src: "https://cdn.discordapp.com/attachments/1004488296493228134/1050485210103431208/CakeJune_Katsu_Curry_dish_at_a_japanese_restaurant_hyper-realis_1e210f10-831e-4ae5-9460-27297c726269.png",
      width: 1600,
      height: 900,
    },
    {
      src: "https://cdn.discordapp.com/attachments/1004488296493228134/1050485459760988232/CakeJune_Lasagna_b611d27a-b8e9-468d-b77a-409970b7d520.png",
      width: 800,
      height: 600,
    },
    {
      src: "https://cdn.discordapp.com/attachments/1004488296493228134/1050486299309645824/CakeJune_French_Toast_Sony_Alpha_7_ISO1900_Leica_M_81c7eb19-a6e7-4c04-8864-a76710133044.png",
      width: 929,
      height: 929,
    },
  ];

  // function render() {
  //     const { images } = restaurantData.images;
  //     return (
  //       <div className="gallery-wall">
  //         {/* Display each image in a grid layout */}
  //         <div className="images-grid">
  //           {images.map(image => (
  //             <div className="image-tile" key={image.id}>
  //               <img src={image.url} alt={image.name} />
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     );
  //   }
  // }
  const [expanded, setExpanded] = React.useState(false);
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <>
      <div className="containerContainer" style={{backgroundColor: 'black'}}>
       
          <PhotoAlbum
            className="image-slider"
            layout="rows"
            photos={photosv1}
          />
        
          <PhotoAlbum
            className="image-slider"
            layout="rows"
            photos={photosv2}
          />
      </div>
      <div style={{backgroundColor: "#ccc", height: '100vw'}}>HI </div>
    </>
  );
}

export default Home;
