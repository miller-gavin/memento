import * as React from "react";
import styled from "styled-components";

const unsplashAccessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const unsplashCollectionId = import.meta.env.VITE_UNSPLASH_COLLECTION_ID;

const StyledBackground = styled.div`
  width: 100%;
  height: 100%;
`;

export function App() {
  const [collection, setCollection] = React.useState();

  function getCollection() {
    fetch(
      `https://api.unsplash.com/collections/${unsplashCollectionId}/photos?client_id=${unsplashAccessKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCollection(data[1].urls.full);
      })
      .catch((error) => console.error(error));
  }

  React.useEffect(() => {
    getCollection();
  }, []);

  return (
    <>
      <StyledBackground>
        <img
          src={collection && collection}
          style={{ maxHeight: "100%", maxWidth: "100%" }}
        />
      </StyledBackground>
    </>
  );
}
