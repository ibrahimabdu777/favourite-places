import Place from "./Place";
import Wisely from "./images/Wisely.jpg";
function MainBody(): JSX.Element {
  return (
    <main>
      <Place
        title={"Wisely car park"}
        location={{
          town: "Wisely Gardens",
          city: "Woking",
          link: "https://goo.gl/maps/MaqgiEHvfT1QMrPt5",
        }}
        body={"the car park is a very nice place"}
        img={Wisely}
      />
    </main>
  );
}

export default MainBody;
