import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { getProducts } from "../../../services/superwallAPI";
import Product from "./Product";
import UserContext from "../../../Context/UserContext";

const tempList = [
  {
    id: 1,
    description: "Macarrão Farfalle Granoro Puglia Import Italia Pacote 500g",
    price: 18.64,
    imgSrc:
      "https://http2.mlstatic.com/D_NQ_NP_655852-MLB45579585320_042021-O.webp",
  },
  {
    id: 2,
    description: "Jack Daniel's Old No. 7 1 L",
    price: 169.9,
    imgSrc:
      "https://http2.mlstatic.com/D_NQ_NP_703616-MLA44936252729_022021-O.webp",
  },
  {
    id: 3,
    description: "Leite UHT Integral Nestlé Ninho Forti+ Caixa com Tampa 1l",
    price: 7.79,
    imgSrc:
      "https://http2.mlstatic.com/D_NQ_NP_883824-MLU47584648627_092021-O.webp",
  },
  {
    id: 4,
    description:
      "Azeite de Oliva Extra Virgem Português Andorinha Clássicos Vidro 500ml",
    price: 18.9,
    imgSrc:
      "https://http2.mlstatic.com/D_NQ_NP_636595-MLU47590944103_092021-O.webp",
  },
  {
    id: 5,
    description: "Sabão em pó Omo Lavagem Perfeita caixa 2.2 kg",
    price: 36.2,
    imgSrc:
      "https://http2.mlstatic.com/D_NQ_NP_680367-MLA50710055105_072022-O.webp",
  },
  {
    id: 6,
    description: "Papel higiênico Neve Supreme folha tripla 20 m de 16 un",
    price: 37.79,
    imgSrc:
      "https://http2.mlstatic.com/D_NQ_NP_736891-MLA43474770479_092020-O.webp",
  },
  {
    id: 7,
    description: "Pack Cerveja Heineken Lata 350ml - 12 Und",
    price: 47.89,
    imgSrc:
      "https://http2.mlstatic.com/D_NQ_NP_843129-MLB50582013578_072022-O.webp",
  },
  {
    id: 8,
    description: "Suco de uva tinto Aurora sem glúten 1.5 L",
    price: 18.39,
    imgSrc:
      "https://http2.mlstatic.com/D_NQ_NP_659368-MLA44374991835_122020-O.webp",
  },
];

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useContext(UserContext);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data);
    });
  }, []);

  function addToCart(product){

    console.log(product);
  }

  return (
    <Container>
      {products.map((product, index) => {
        return (
          <React.Fragment key={index}>
            <Product productData={product} onClick={() => addToCart(product)} />
          </React.Fragment>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  & {
    width: calc(100vw - (100vw - 100%));

    flex-wrap: wrap;

    padding: 20px 0px;

    margin: 60px 0px;

    font-weight: 700;
    font-size: 15px;
  }
`;
