import "./Place.css";

interface PlaceProps {
  key: string;
  title: string;
  location: { town: string; city: string; link: string };
  body: string;
  img: string;
  className: string;
}

function Place(props: PlaceProps): JSX.Element {
  return (
    <section className="container">
      {/* <div className="container"> */}
      <img src={props.img} alt="" className="picture" />
      {/* </div> */}
      {/* <div className="container"> */}
      <h2>{props.title}</h2>
      {/* </div> */}
      {/* <div className="container"> */}
      <h3>
        {props.location.town}, {props.location.city} (
        <a href={props.location.link} target="_blank" rel="noreferrer">
          map link
        </a>
        )
      </h3>
      {/* </div> */}
      {/* <div className="container"> */}
      <p>{props.body}</p>
      {/* </div> */}
    </section>
  );
}

export default Place;
