import React, { useState } from "react";
import "./styles.css";

const myTravels = {
  Maharashtra: [
    {
      Name: "Gateway Of India",
      Description:
        "It is one of the most visited places in Mumbai. Please do have Pav Bhaji too and you can also visit Elephanta Cave.",
      Rating: "Rating : 4.5/5"
    },
    {
      Name: "Shirdi",
      Description:
        "It is a town in Maharashtra and is known as the home of revered spiritual leader Sai Baba.",
      Rating: "Rating : 5/5"
    },
    {
      Name: "Matheran",
      Description:
        "It is one of the famous hill stations in Maharashtra. Do check it out in Winter.",

      Rating: "Rating : 4/5"
    }
  ],

  Varanasi: [
    {
      Name: "Baba Vishwanath Temple",
      Description:
        "It is one of the most famous temple in Varanasi having shivling, and a holy place for Hindus.",
      Rating: "Rating : 5/5"
    },

    {
      Name: "BHU",

      Description:
        "One of the famous Universities across Globe and the campus is amazing.",
      Rating: "Rating : 4.5/5"
    },

    {
      Name: "Sankat Mochan Mandir",

      Description:
        "One of the famous temple in Benaras of Lord Hanuman. Many devotees gather around every time.",
      Rating: "Rating : 5/5"
    }
  ],

  Uttarakhand: [
    {
      Name: "Kedarnath",
      Description:
        "One of the famous holy place for Hindus. It should be in your bucket list.",

      Rating: "Rating : 5/5"
    },
    {
      Name: "Badrinath",
      Description:
        "Again of the famous temple of Lord Vishnu. The atmosphere around is amazing.",

      Rating: "Rating : 5/5"
    },
    {
      Name: "Nainital",

      Description:
        "It is a Himalayan Resort town in Kumaon region. best to visit from March to June.",
      Rating: "Rating : 3.5/5"
    }
  ]
};

const genreNames = Object.keys(myTravels);

export default function App() {
  const [travelsList, setTravelsList] = useState(myTravels.Maharashtra);

  function genreClickHandler(genre) {
    var travels = myTravels[genre];
    setTravelsList(travels);
  }

  function getTravelsPost(travels) {
    var name = travels.Name;
    var desc = travels.Description;
    var rating = travels.Rating;
    var travelList = (
      <li>
        <div style={{ padding: "0rem 1rem" }}>
          <h3 style={{ marginBottom: "0.5rem" }}>{name}</h3>

          <p style={{ fontSize: "0.9rem" }}>{desc}</p>
          <p>{rating}</p>
        </div>
      </li>
    );
    return travelList;
  }

  return (
    <div className="App">
      <nav>
        <h1>My Travel Recommendtions</h1>
      </nav>
      <header>
        <p>
          Checkout some of my favorite places that I've visited across India.
        </p>
      </header>
      <div>
        {genreNames.map((genre) => {
          return (
            <button
              key={genre}
              className="btn"
              onClick={() => genreClickHandler(genre)}
            >
              {genre}
            </button>
          );
        })}
      </div>
      <hr />
      <ul>
        {travelsList.map((travels) => {
          return getTravelsPost(travels);
        })}
      </ul>
    </div>
  );
}
