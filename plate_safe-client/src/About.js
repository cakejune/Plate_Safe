import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";

export default function About() {
  const portraitStyle = {
    width: "400",
    height: "400",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const members = [
    {
      name: "Aaron Toplin",
      position: "Chief Operating Offer",
      allergies: "none",
      image:
        "https://cdn.discordapp.com/attachments/1004488296493228134/1051932137596653588/CakeJune_Paella_man_in_the_style_of_a_french_impressionist_port_85434eca-6d9f-451f-8d8f-c6c5c53f9f30.png",
    },
    {
      name: "Jack Holmes",
      position: "Chief Executive Offer",
      allergies: "none",
      image:
        "https://cdn.discordapp.com/attachments/1004488296493228134/1051941728153763922/CakeJune_Portrait_of_a_legendary_skateboarderchef_3e1aae92-4d86-4e53-b101-e12ab5c4c50d.png",
    },
    {
      name: "Mark Shkreli",
      position: "Chief Financial Offer",
      allergies: "none",
      image:
        "https://cdn.discordapp.com/attachments/1004488296493228134/1051942669154263132/CakeJune_Spanish_portrait_of_a_tech_Financial_Officer_creative__6149e63d-85be-47ec-8b4c-c4d564a84252.png",
    },
    {
      name: "Jake Kuhn",
      position: "Chief Technical Offer",
      allergies:
        "pine nuts, walnuts, macadamia nuts, raw: [apples, peaches, plums, cherries, pears]",
      image:
        "https://cdn.discordapp.com/attachments/1004488296493228134/1051943536997711934/CakeJune_dutch_portrait_of_a_caucasian_man_with_a_soup_dumpling_c8c17e6c-4d52-4cae-8cf3-58274af92d60.png",
    },
  ];
  const bull = (
    <Box
      component="span"
      sx={{ display: "flex", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <>
      <div
        className="our-members"
        style={{
          backgroundImage:
            'url("https://cdn.discordapp.com/attachments/1004488296493228134/1051941507189440522/CakeJune_twitter_banner_for_a_company_called_Plate_Safe_with_a__b5aa8cc9-ba25-45bd-8dec-a75285da209a.png")',
        }}
      >
        <h2
          style={{
            marginTop: "50px",
            paddingTop: "350px",
            fontSize: "xxx-large",
            color: "red",
            fontFamily: "Monaco",
          }}
        >
          Meet Our Team
        </h2>
      </div>
      <div className="about-container">
        {members.map((member) => {
          return (
            <Card sx={portraitStyle} key={member.name}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Plate_🍽_Safe
                </Typography>
                <CardMedia
                  component="img"
                  height="1024"
                  width="1024"
                  image={member.image}
                />
                <Typography variant="h5" component="div">
                  {member.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {member.position}
                </Typography>
                <Typography variant="body2">
                  Allergies:
                  <br />
                  {member.allergies}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </>
  );
}
