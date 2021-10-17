import { useState } from "react";
import "./App.css";
import { Box, Card, LinearProgress, Typography } from "@material-ui/core";
import UploadCard from "./components/UploadCard";
import SuccessCard from "./components/SuccessCard";
import FavoriteIcon from "@material-ui/icons/Favorite";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [imageList, setImageList] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  return (
    <>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "96vh",
        }}
      >
        {!isLoading ? (
          !isSuccess ? (
            <UploadCard
              setIsLoading={setIsLoading}
              setIsSuccess={setIsSuccess}
              setImageList={setImageList}
              setImageUrl={setImageUrl}
            />
          ) : (
            <SuccessCard imageList={imageList} imageUrl={imageUrl} />
          )
        ) : (
          <Card
            style={{
              width: "50%",
              padding: "50px 20px",
              borderRadius: 10,
            }}
          >
            <Typography variant="h5"> Uploading...</Typography>
            <LinearProgress
              style={{
                width: "100%",
                height: "1vh",
                marginTop: "30px",
              }}
              color="primary"
            />
          </Card>
        )}
      </Box>
      <footer style={{ display: "flex" }}>
        <Typography
          variant="body3"
          style={{ alignItems: "center", display: "flex" }}
        >
          Built with{" "}
          <FavoriteIcon
            style={{ fontSize: 15, margin: "0 3px", color: "#ff1717" }}
          />{" "}
          by
        </Typography>{" "}
        <a
          href="https://github.com/lucasmanea21"
          style={{ textDecoration: "none", color: "#ff1717", margin: "0 5px" }}
        >
          Lucas Manea
        </a>
      </footer>
    </>
  );
}

export default App;
