import React from "react";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
// import {Button}
// 'Button' is not defined       react/jsx-no-undef
//   Line 7:21:   'handleOpen' is not defined   no-undef
//   Line 9:9:    Unexpected use of 'open'      no-restricted-globals
//   Line 10:12:  'handleClose' is not defined  no-undef
//   Line 14:4:   'Box' is not defined          react/jsx-no-undef
//   Line 14:12:  'style' is not defined        no-undef
//   Line 15:6:   'Typography' is not defined   react/jsx-no-undef
//   Line 18:6:   'Typography' is not define

export default function RestaurantModal({ restaurant, deleteDish }) {
  const modalBannerStyle = {
    height: "100px",
    borderWidth: "4px",
    borderStyle: "inset",
    margin: "auto",
    display: "block",
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "white",
    // backgroundImage: `url("${restaurant.image}")`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    border: "2px solid #000",
    overflowY: "scroll",
    boxShadow: 24,
    p: 4,
  };
  const dishStyle = {
    height: "100px",
    borderWidth: "4px",
    borderBottom: "dashed",
    margin: "auto",
    display: "block",
  };

  const restaurantImage = restaurant.image;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleDeleteDish(dish) {
    deleteDish(dish.id);
  }

  const dishList = restaurant.dishes.map((dish) => {
    return (
      <>
        <div className="dishDiv" style={dishStyle} key={dish.id}>
          <p>
            {dish.name}{" "}
            <IconButton aria-label="delete" onClick={()=>handleDeleteDish(dish)}>
              <DeleteIcon />
            </IconButton>
          </p>

          <p>
            {dish.a_preps.length > 0 ? (
              dish.a_preps.map((a_prep) => {
                return (
                  <h5 key={a_prep.id}>
                    Allergen: {a_prep.allergen.name} <br></br>Avoidable:{" "}
                    {a_prep["avoidable?"] ? "Yes" : "No"}
                  </h5>
                );
              })
            ) : (
              <h5>Allergen: No Allergen In Dish</h5>
            )}
          </p>
        </div>
        {/* <ul key={dish.id}>
        <li>
          {dish.name}
          <button onClick={()=>handleDeleteDish(dish)}>Delete Dish</button>
        </li>
        {dish.a_preps.length > 0 ? (
          dish.a_preps.map((a_prep) => {
            return (
              <h5 key={a_prep.id}>
                Allergen: {a_prep.allergen.name} <br></br>Avoidable:{" "}
                {a_prep["avoidable?"] ? "Yes" : "No"}
              </h5>
            );
          })
        ) : (
          <h5>Allergen: No Allergen In Dish</h5>
        )}
      </ul> */}
      </>
    );
  });
  return (
    <>
      <Button onClick={handleOpen}>{restaurant.name}</Button>
      <Modal
        key={`${restaurant.name[0]}${restaurant.name[1]}`}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ textAlign: "center" }}
          >
            <img src={restaurantImage} style={modalBannerStyle} />
            {restaurant.name}
          </Typography>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}> */}
          Dish List: {dishList}
          {/* </Typography> */}
        </Box>
      </Modal>
    </>
  );
}
