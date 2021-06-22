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

function Townprint(props) {
  return (
    <>
      <li id={"town" + (props.index + 1)}>{props.towns.name}</li>
    </>
  );
}

function Town(props) {
  return (
    <>
      <ul>
        {props.towns.map((town, index) => {
          return <Townprint index={index} towns={town}></Townprint>;
        })}
      </ul>
    </>
  );
}

function Cityprint(props) {
  const [getFlag, setFlag] = useState(false);

  const hideANDshow = (e) => {
    e.stopPropagation();
    if (getFlag) setFlag(false);
    else setFlag(true);
  };

  return (
    <>
      <li id={"city" + (props.index + 1)} onClick={hideANDshow}>
        {props.cities.name}
        {getFlag && <Town towns={props.cities.towns}></Town>}
      </li>
    </>
  );
}

function City(props) {
  return (
    <>
      <ul>
        {states.cities.map((city, index) => {
          return <Cityprint index={index} cities={city}></Cityprint>;
        })}
      </ul>
    </>
  );
}

function State(props) {
  const [getFlag, setFlag] = useState(false);

  const toggleState = (e) => {
    e.stopPropogation();
    if (getFlag) {
      setFlag(false);
    } else setFlag(true);
  };

  return (
    <>
      <li id={`state${props.index + 1}`} onClick={toggleState}>
        {props.states.name}
        {getFlag && <City>{props.states.cities}</City>}
      </li>
    </>
  );
}

function App() {
  return (
    <div id="main">
      {states.map((state, index) => {
        return <State index={index} states={state}></State>;
      })}
    </div>
  );
}

export default App;

// {states.map((stateName, index) => {
//   return (
//     <div key={index}>
//       <h1 id={`state${index + 1}`} onClick={toggeleState}>
//         {stateName.name}
//       </h1>

//       {stateName.cities.map((subItem1, i) => {
//         return (
//           <div key={i}>
//             {showCities ? (
//               <h3 id={`city${i + 1}`} onClick={toggeleCities}>
//                 {subItem1.name}
//               </h3>
//             ) : null}

//             {subItem1.towns.map((subItem2, j) => {
//               return (
//                 <div key={j}>
//                   {showTowns ? (
//                     <h5 id={`town${j + 1}`}>{subItem2.name}</h5>
//                   ) : null}
//                 </div>
//               );
//             })}
//           </div>
//         );
//       })}
//     </div>
//   );
// })}

// const toggeleState = () => {
//   setShowCities(!showCities);
// };

// const toggeleCities = () => {
//   setShowTowns(!showTowns);
// // };
