import React, { Component, useState } from "react";

const states = [
  {
    name: "Madhya Pradesh",

    cities: [
      {
        name: "Indore",

        towns: [
          {
            name: "Mhow"
          },

          {
            name: "Dewas"
          }
        ]
      },

      {
        name: "Bhopal",

        towns: [
          {
            name: "Manit"
          },

          {
            name: "Berasia"
          }
        ]
      },

      {
        name: "Gwalior",

        towns: [
          {
            name: "Ajaypur"
          }
        ]
      }
    ]
  },

  {
    name: "Jharkhand",

    cities: [
      {
        name: "Dhanbad",

        towns: [
          {
            name: "IIT(ISM) Dhanbad"
          },

          {
            name: "Hirapur"
          }
        ]
      },

      {
        name: "Wasseypur",

        towns: [
          {
            name: "Sardar khan's"
          },

          {
            name: "Faizal khan's"
          }
        ]
      },

      {
        name: "Mirzapur",

        towns: [
          {
            name: "Kaleen bhaiya's"
          },

          {
            name: "Guddu bhaiya's"
          }
        ]
      }
    ]
  },

  {
    name: "Assam",

    cities: [
      {
        name: "Guwhati",

        towns: [
          {
            name: "Amin"
          },

          {
            name: "Jalah"
          }
        ]
      },

      {
        name: "Jungle1",

        towns: [
          {
            name: "Tiger found at IIT Guwahati"
          },

          {
            name: "Leopard found in IIT Guwahati"
          }
        ]
      },

      {
        name: "Tezpur",

        towns: [
          {
            name: "Dibrugarh"
          },

          {
            name: "Silchar"
          }
        ]
      }
    ]
  },

  {
    name: "Bihar",

    cities: [
      {
        name: "Patna",

        towns: [
          {
            name: "Sonpur"
          },

          {
            name: "Maner"
          }
        ]
      },

      {
        name: "Gaya",

        towns: [
          {
            name: "Bakraur"
          },

          {
            name: "Barachatti"
          }
        ]
      },

      {
        name: "Darbhanga",

        towns: [
          {
            name: "Singhwara"
          },

          {
            name: "Jale"
          }
        ]
      }
    ]
  }
];

function App() {
  const [showCities, setShowCities] = useState(false);

  const [showTowns, setShowTowns] = useState(false);

  const toggeleState = () => {
    setShowCities(!showCities);
  };

  const toggeleCities = () => {
    setShowTowns(!showTowns);
  };

  return (
    <div id="main">
      {states.map((stateName, index) => {
        return (
          <div key={index}>
            <h1 id={`state${index + 1}`} onClick={toggeleState}>
              {stateName.name}
            </h1>

            {stateName.cities.map((subItem1, i) => {
              return (
                <div key={i}>
                  {showCities ? (
                    <h3 id={`city${i + 1}`} onClick={toggeleCities}>
                      {subItem1.name}
                    </h3>
                  ) : null}

                  {subItem1.towns.map((subItem2, j) => {
                    return (
                      <div>
                        {showTowns ? (
                          <h5 id={`town${j + 1}`}>{subItem2.name}</h5>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default App;
