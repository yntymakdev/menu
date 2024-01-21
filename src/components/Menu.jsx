import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { Link, useNavigate } from "react-router-dom";
const Menu = ({
  readProduct,
  data,
  deleteProduct,
  editProduct,
  addtoOrders,
}) => {
  useEffect(() => {
    readProduct();
  }, []);

  const navigate = useNavigate();
  return (
    <section id="munu">
      <div className="container">
        <div class="munu">
          <h2>MENU </h2>
          <div className="cards">
            {data.map((el, index) => (
              <Card sx={{ width: "26  0px", height: "270px", padding: "10px" }}>
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
                  <button onClick={() => addtoOrders(el.id)}>
                    <AddIcon />
                  </button>
                  <Link to={`/edit/${el.id}`}>
                    <button onClick={() => editProduct(index)}>
                      <EditIcon />
                    </button>
                  </Link>
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
