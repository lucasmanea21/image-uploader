import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "../App.css";

const SuccessCard = ({ imageList, imageUrl }) => {
  const [copied, setCopied] = useState(false);

  const handleRedirect = () => {
    window.location.href = imageUrl;
  };
  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(imageUrl);
  };
  return (
    <Card className="card">
      <CardContent className="content-wrapper">
        <Container className="header-wrapper">
          <CheckCircleIcon style={{ color: "#2bad3c", fontSize: 45 }} />
          <Typography variant="h5">Uploaded Successfully!</Typography>
        </Container>
        <Box
          className="drop-section"
          style={{
            border: "none",
            backgroundImage: `url(${imageList[0]?.data_url})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            cursor: "pointer",
          }}
          onClick={handleRedirect}
        />

        {imageUrl && (
          <>
            <Container className="input-wrapper">
              <input
                readOnly
                defaultValue={imageUrl}
                className="input"
                style={{ width: copied ? "50%" : "70%" }}
              />
              <Button
                style={{
                  width: copied ? "50%" : "30%",
                  padding: 0,
                }}
                id="copy-link"
                className="button"
                onClick={handleCopy}
              >
                {!copied ? "Copy Link" : "Copied to clipboard!"}
              </Button>{" "}
            </Container>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default SuccessCard;
