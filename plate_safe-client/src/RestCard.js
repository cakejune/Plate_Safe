import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import AddIcon from "@mui/icons-material/Add";

import { styled } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { blue, yellow } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RestaurantModal from "./RestaurantModal";

function RestCard({ restaurant, addDish, deleteDish, editRestaurantLocation }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [dishName, setDishName] = useState("");
  const [allergen, setAllergen] = useState("");
  const [isAvoidable, setIsAvoidable] = useState("all");
  const [address, setAddress] = useState("");
  const thisRestaurantId = restaurant.id
  const [expanded, setExpanded] = useState(false);
  const [isContentEditable, setIsContentEditable] = useState(false);
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  function updateAddress(e) {
    e.preventDefault();
    setAddress(e.target.value);
  }

  function submitUpdate(e) {
    e.preventDefault();
    const newLocationObj = {
      location: address
    };
    // console.log(newLocationObj, restaurant.id);
    editRestaurantLocation(thisRestaurantId, {location: address});
  }

  function addDish(e) {
    setDishName(e.target.value);
  }

  function addAllergen(e) {
    setAllergen(e.target.value);
  }

  function addAvoidable(e) {
    setIsAvoidable(e.target.value);
  }

  function clearForm() {
    setDishName("");
    setAllergen("");
    setIsAvoidable();
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newDish = {
      name: dishName,
      allergen: allergen,
      avoidable: isAvoidable,
    };
    clearForm();
    addDish(restaurant.id, newDish);
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // console.log(restaurant)

  return (
    <div className="restaurant-item">
      <Card
        sx={{
          width: 345,
          height: 410,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: yellow[500] }} aria-label="recipe">
              🍴
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={<RestaurantModal deleteDish={deleteDish} restaurant={restaurant} key={restaurant.id}/>}
        />
        <CardMedia
          component="img"
          height="194"
          image={restaurant.image}
          alt={restaurant.dishes[0].name}
        />
        <CardContent>
          <Typography>
            <strong>Address:</strong>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {restaurant.location}
          </Typography>
          {/* <TextField
            sx={{ m: 1, background: "transparent" }}
            className="form-input"
            id="margin-normal"
            label="Restaurant Location"
            placeholder="Enter New Location..."
            value={address}
            onChange={updateAddress}
            required
          >
            Enter New Location
          </TextField> */}
          <form onSubmit={submitUpdate}>
          <TextField
            sx={{ m: 1, background: "transparent" }}
            className="form-input"
            id="margin-normal"
            label="Restaurant Location"
            placeholder="Enter New Location..."
            value={address}
            onChange={updateAddress}
            required
          >
            Enter New Location
          </TextField>
          <Button
            sx={{
              m: 0.5,
              p: 1,
              backgroundColor: "white",
              borderColor: "white",
            }}
            className="form-button"
            variant="outlined"
            type="submit"
            method="PATCH"
          >
            {<AddIcon />} Submit Updated Location
          </Button>
          </form>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default RestCard;

// <Card sx={{ maxWidth: 345 }}>
// <CardActionArea>
//   <CardMedia component="img" height="100" image={restaurant.image}/>
//   <CardContent sx={{ height: '230px', overflow: "scroll" }}>
//     <Typography gutterBottom variant="h5" component="div">
//       {restaurant.name}
//     </Typography>
//     <Typography variant="body2" color="text.secondary">
//       {restaurant.location}
//     </Typography>
//     <form onSubmit={submitUpdate}>
//     <TextField sx={{ m: 1, background: "transparent" }} className="form-input" id="margin-normal" label="Restaurant Location" placeholder="Enter New Location..." value={address} onChange={updateAddress} required>Enter New Location</TextField>
//     <Button sx={{ m: 0.5, p: 1, backgroundColor: "white", borderColor: 'white' }} className= "form-button" variant='outlined' type="submit">{<AddIcon/>} Submit Update</Button>
//     </form>
//   </CardContent>
// </CardActionArea>
// <Button onClick={handleOpen}>Details</Button>
// <Modal
//   open={open}
//   onClose={handleClose}
//   aria-labelledby="rest-modal-title"
//   aria-describedby="rest-modal-description"
// >
//   <Box sx={style}>
//     <Typography id="modal-modal-title" variant="h6" component="h2">
//       Restaurant Details
//     </Typography>
//     <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//       <ul>Dishes: {dishList} </ul>
//     </Typography>
//     <Typography>Add New Dish:</Typography>
//     <form onSubmit={handleSubmit}>
//       <TextField sx={{ m: 1, background: "transparent" }} className="form-input" id="margin-normal" label="Dish Name" placeholder="Enter Dish Name..." value={dishName} onChange={addDish} required />
//       <TextField sx={{ m: 1, background: "transparent" }} className="form-input" label="Allergen" placeholder="Enter Allergen Name..." value={allergen} onChange={addAllergen} required />
//       <Box sx={{ display: 'flex', background:"transparent"}}>
//         <TextField sx={{ m: 1, background: "transparent" }} className="form-dropdown" label="Is Avoidable" value={isAvoidable} onChange={addAvoidable} helperText="Please select if Allergen is Avoidable" required>
//           <MenuItem value="all">Select if Allergen is Avoidable</MenuItem>
//           <MenuItem value="True">True</MenuItem>
//           <MenuItem value="False">False</MenuItem>
//         </TextField>
//       </Box>
//       <Button sx={{ m: 0.5, p: 1, backgroundColor: "white", borderColor: 'white' }} className= "form-button" variant='outlined' type="submit">{<AddIcon/>} Add Dish</Button>
//     </form>
//   </Box>
// </Modal>
// </Card>
