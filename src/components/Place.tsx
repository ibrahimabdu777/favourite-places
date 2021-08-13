interface PlaceProps {
  title: string;
  location: { town: string; city: string; link: string };
  body: string;
  img: string;
}

function Place(props: PlaceProps): JSX.Element {
  return (
    <section>
      <img src={props.img} alt="" width="500" height="600" />
      <h2>{props.title}</h2>
      <h3>
        {props.location.town}, {props.location.city} (
        <a href={props.location.link} target="_blank">
          map link
        </a>
        )
      </h3>
      <p>{props.body}</p>
    </section>
  );
}

export default Place;
