import Place from "./Place";
import Wisely from "./images/Wisely.jpg";
import "./MainBody.css"
function MainBody(): JSX.Element {
  return (
    <main className="places-container">
      <Place
        title={"Wisely car park"}
        location={{
          town: "Wisely Gardens",
          city: "Woking",
          link: "https://goo.gl/maps/MaqgiEHvfT1QMrPt5",
        }}
        body={"the car park is a very nice place"}
        img={Wisely}
        className="Place"
      />
      <Place
        title={"Wisely car park"}
        location={{
          town: "Wisely Gardens",
          city: "Woking",
          link: "https://goo.gl/maps/MaqgiEHvfT1QMrPt5",
        }}
        body={"the car park is a very nice place"}
        img={Wisely}
        className="Place"
      />
    </main>
  );
}

export default MainBody;
