import React, { useState } from "react";
import "./App.css";
import CardItem from "./components/Card";
import cards from "./components/cards.json";
import Grid from "@mui/material/Grid";

function App() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (title) => {
    setSelectedCard((prevSelectedCard) => {
      // Если уже выбрана текущая карточка, сбрасываем выбор
      return prevSelectedCard === title ? null : title;
    });
  };

  return (
    <div className="App">
      <Grid
        container
        spacing={1}
        justifyContent="center"
        alignItems="center"
        className="card-container"
      >
        {cards.map((card) => (
          <Grid item sm={6} md={4} lg={3} key={card.title}>
            {(selectedCard === card.title || selectedCard === null) && (
              <CardItem
                title={card.title}
                price={card.price}
                speed={card.speed}
                titleColor={card.titleColor}
                priceColor={card.priceColor}
                onClick={() => handleCardClick(card.title)}
                isSelected={selectedCard === card.title}
              />
            )}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
