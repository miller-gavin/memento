import * as React from "react";
import styled from "styled-components";
import { Islands } from "./islands";

const unsplashAccessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const unsplashCollectionId = import.meta.env.VITE_UNSPLASH_COLLECTION_ID;

const StyledBackground = styled.div`
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const StyledCycleImageButton = styled.button`
  cursor: pointer;
  font-family: "Cutive Mono", monospace;
  background: grey;
  width: fit-content;
  padding: 05px;
  margin: 10px 45px 20px 45px;
  border-radius: 10px;
  display: flex;
  border: none;
  position: absolute;
  top: 10px;
`;

export function App() {
  const [collection, setCollection] = React.useState<string[]>();
  const [imageIndex, setImageIndex] = React.useState(0);
  const [currentImageUrl, setCurrentImageUrl] = React.useState<
    string | undefined
  >("");

  function getCollection() {
    fetch(
      `https://api.unsplash.com/collections/${unsplashCollectionId}/photos?client_id=${unsplashAccessKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        const mappedData = data.map((image: Record<any, any>) => {
          return image.urls.full;
        });

        setCollection(mappedData);
      })
      .catch((error) => console.error(error));
  }

  React.useEffect(() => {
    getCollection();
  }, []);

  function handleClick() {
    if (imageIndex === 2) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  }

  function CycleImageButton() {
    return (
      <StyledCycleImageButton>
        <span onClick={() => handleClick()}>Cycle Image</span>;
      </StyledCycleImageButton>
    );
  }

  return (
    <>
      <StyledBackground>
        <img
          src={collection?.[imageIndex]}
          style={{ maxHeight: "100%", maxWidth: "100%" }}
        />
        <CycleImageButton />
        <Islands />
      </StyledBackground>
    </>
  );
}
