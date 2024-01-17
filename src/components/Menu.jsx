import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
const Menu = ({ readProduct, data, deleteProduct }) => {
  useEffect(() => {
    readProduct();
  }, []);
  return (
    <section id="munu">
      <div className="container">
        <div class="munu">
          <h2>MENU </h2>
          <div className="cards">
            {data.map((el) => (
              <Card sx={{ width: "260px", height: "270px", padding: "10px" }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={el.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {el.name}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    {el.price}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    marginTop: "-20px",
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <button>
                    <AddIcon />
                  </button>
                  <button>
                    <EditIcon />
                  </button>
                  <button onClick={() => deleteProduct(el.id)}>
                    <DeleteIcon />
                  </button>
                </CardActions>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
