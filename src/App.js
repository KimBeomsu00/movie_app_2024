import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h3>I Love {name}</h3>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodLike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://i.namu.wiki/i/O1Z-Nm3Bq-grP5ebmnPeizxI6nmij93lv8GOc3PE_c3R-GLSiwljFk7N-7FBD0_hKyB5esEjjMXxRWzj0ypZ3w.webp",
    rating: 5,
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://i.namu.wiki/i/SdI6mHzKiWg-yJEqBpWhaACTth0ZSU_qSjhHCnQp5OxqwVl-PRIzql6bkmp1tm0YaHxjDoTbt-nBtiSE4nhqbQ.webp",
    rating: 5,
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "https://i.namu.wiki/i/dgjXU86ae29hDSCza-L0GZlFt3T9lRx1Ug9cKtqWSzMzs7Cd0CN2SzyLFEJcHVFviKcxAlIwxcllT9s2sck0RA.jpg",
    rating: 3,
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://i.namu.wiki/i/aN7eMJzy4XAy1yqpL3kHb41MBsSdfPjt1ZqMfDXYk6J3-je6M8dNVOMldpbxhZ-IlO9IfHXMzpZc1tVvat5IjQ.webp",
    rating: 5,
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "https://i.namu.wiki/i/UNmmpA1SU9xLXev2kk1wfb7BdkUcxVkXtQdvmuowcqLzNSo8KTYlXpVv4A8sayXGXLIkmxbo1NOwzQnBrfdIog.webp",
    rating: 5,
  },
];

function renderFood(dish) {
  return (
    <Food
      key={dish.id}
      name={dish.name}
      picture={dish.image}
      rating={dish.rating}
    />
  );
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodLike.map(renderFood)}
    </div>
  );
}



Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default App;