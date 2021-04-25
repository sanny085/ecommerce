import React, { useState, useEffect } from "react";
import { Axios } from "axios";

import { random, commerce } from "faker";
import { Container, Col, Row } from "reactstrap";

const apiKey = "INSET_YOUR_KEY_HERE";
const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";

const localurl = "https://jsonkeeper.com/b/KU2V";

const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);

  //   const fetchPhotos = async () => {
  //     const response = await Axios.get(url, {
  //       header: {
  //         Authorization: apiKey
  //       }
  //     });

  const fetchPhotos = async () => {
    const { data } = await Axios.get(localurl);
    console.log("Fetching photo from localjson"+ data);
  };

  const { photos } = data;

  useEffect(() => {
    fetchPhotos();
  }, []);
};

export default BuyPage;
