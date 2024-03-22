import React from "react";
import Card from '@mui/material/Card';
import "./Card.css";

function CardItem(props) {
  const titleStyle = {
    backgroundColor: props.titleColor || "#000000",
    color: "#ffffff"
  };

  const priceStyle = {
    backgroundColor: props.priceColor || "#000000",
    color: "#ffffff"
};

  const handleClick = () => {
    if (props.onClick) {
      props.onClick(); // Вызываем функцию обработки клика, переданную из родительского компонента
    }
  };

  return (
    <Card variant="outlined">
      <div className={`card-item ${props.isSelected
        ? "selected"
        : ""}`} // Добавляем класс "selected", если тариф выбран
        onClick={handleClick} // Добавляем обработчик клика на карточку
    >
        <div className="card-title" style={titleStyle}>
          {props.title}
        </div>
        <div className="card-price" style={priceStyle}>
          {props.price}
        </div>
        <div className="card-speed">{props.speed}</div>
        <div className="card-footer">Объем включенного графика не ограничен</div>
      </div>
    </Card>
  );
}

export default CardItem;