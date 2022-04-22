import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard() {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    fakestore();
  }, []);

  const fakestore = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/category/men's clothing "
    );
    console.log(response);
    const jsonData = await response.json();
    console.log(jsonData);

    setProducts(jsonData);
  };
  fakestore();

  return (
    <>
      <h1>Men's Clothing</h1>
      {products.map((item) => {
        return (
          <>
            <Card
              sx={{ maxWidth: 300, maxHeight: 300, borderRadius: "30px" }}
              style={{ display: "inline-block", marginRight: 30 }}
            >
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt="green iguana"
              />
              <CardContent style={{ backgroundColor: " #2BD9AF" }}>
                <Typography gutterBottom variant="h5" component="div">
                  {item.price}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </>
        );
      })}
    </>
  );
}
