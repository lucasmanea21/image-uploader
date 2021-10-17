import { Button, Card, CardContent, Typography } from "@material-ui/core";
import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import { ImageIcon } from "../image.js";
import axios from "axios";

const UploadCard = ({
  setIsLoading,
  setIsSuccess,
  setImageList,
  setImageUrl,
}) => {
  const [images, setImages] = useState([]);
  const serverUrl = "http://https://image-uploader-challange.herokuapp.com";
  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    setIsLoading(true);
    setImageList(imageList);
    let formData = new FormData();
    formData.append("image", imageList[0].file);

    const headers = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    axios
      .post(`${serverUrl}/file/upload`, formData, headers)
      .then((res) => {
        setIsLoading(false);
        setIsSuccess(true);
        setImageUrl(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <ImageUploading
      multiple
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
      dataURLKey="data_url"
    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        <Card className="card">
          <CardContent className="content-wrapper">
            <Typography variant="h5">Upload your image </Typography>
            <div
              style={isDragging ? { color: "red" } : undefined}
              className="drop-section"
              onClick={onImageUpload}
              {...dragProps}
            >
              <ImageIcon />
              <Typography variant="body2" className="text">
                Drag & Drop it here
              </Typography>
            </div>
            <Typography className="text" variant="body2">
              {" "}
              Or
            </Typography>
            <Button onClick={onImageUpload} className="button">
              Choose a file
            </Button>
          </CardContent>
        </Card>
      )}
    </ImageUploading>
  );
};

export default UploadCard;
