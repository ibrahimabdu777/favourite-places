import Place from "./Place";
import Wisely from "./images/Wisely.jpg";
import "./MainBody.css";

const data = [
  {
    title: "Wisely car park",
    location: {
      town: "Wisely Gardens",
      city: "Woking",
      link: "https://goo.gl/maps/MaqgiEHvfT1QMrPt5",
    },
    body: "the car park is a very nice place",
    image: Wisely,
  },
  {
    title: "Wisely car park 2",
    location: {
      town: "Wisely Gardens",
      city: "Woking",
      link: "https://goo.gl/maps/MaqgiEHvfT1QMrPt5",
    },
    body: "the car park is a very nice place",
    image: Wisely,
  },
];

function MainBody(): JSX.Element {
  return (
    <main className="places-container">
      {data.map(function (place) {
        return (
          <Place
            key={place.title}
            title={place.title}
            location={{
              town: place.location.city,
              city: place.location.town,
              link: place.location.link,
            }}
            body={place.body}
            img={place.image}
            className="Place"
          />
        );
      })}
    </main>
  );
}

// function MainBody(): JSX.Element {
//   return (
//     <main className="places-container">
//       <Place
//         title={"Wisely car park"}
//         location={{
//           town: "Wisely Gardens",
//           city: "Woking",
//           link: "https://goo.gl/maps/MaqgiEHvfT1QMrPt5",
//         }}
//         body={"the car park is a very nice place"}
//         img={Wisely}
//         className="Place"
//       />
//       <Place
//         title={"Wisely car park"}
//         location={{
//           town: "Wisely Gardens",
//           city: "Woking",
//           link: "https://goo.gl/maps/MaqgiEHvfT1QMrPt5",
//         }}
//         body={"the car park is a very nice place"}
//         img={Wisely}
//         className="Place"
//       />
//     </main>
//   );
// }

export default MainBody;
