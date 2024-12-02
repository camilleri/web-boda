import "./Carrousel.css";

function Carrousel() {
  return (
    <div className="center">
      <div className="carousel-wrapper">
        {/* <!-- abstract radio buttons for slides --> */}
        <input id="slide1" type="radio" name="controls" />
        <input id="slide2" type="radio" name="controls" />
        <input id="slide3" type="radio" name="controls" checked />
        <input id="slide4" type="radio" name="controls" />
        <input id="slide5" type="radio" name="controls" />

        <label htmlFor="slide1" className="nav-dot"></label>
        <label htmlFor="slide2" className="nav-dot"></label>
        <label htmlFor="slide3" className="nav-dot"></label>
        <label htmlFor="slide4" className="nav-dot"></label>
        <label htmlFor="slide5" className="nav-dot"></label>

        {/* <!-- arrows --> */}
        <label htmlFor="slide1" className="left-arrow">
          {" "}
          {"<"}{" "}
        </label>
        <label htmlFor="slide2" className="left-arrow">
          {" "}
          {"<"}{" "}
        </label>
        <label htmlFor="slide3" className="left-arrow">
          {" "}
          {"<"}{" "}
        </label>
        <label htmlFor="slide4" className="left-arrow">
          {" "}
          {"<"}{" "}
        </label>
        <label htmlFor="slide5" className="left-arrow">
          {" "}
          {"<"}{" "}
        </label>

        <label htmlFor="slide1" className="right-arrow">
          {" "}
          {">"}{" "}
        </label>
        <label htmlFor="slide2" className="right-arrow">
          {" "}
          {">"}{" "}
        </label>
        <label htmlFor="slide3" className="right-arrow">
          {" "}
          {">"}{" "}
        </label>
        <label htmlFor="slide4" className="right-arrow">
          {" "}
          {">"}{" "}
        </label>
        <label htmlFor="slide5" className="right-arrow">
          {" "}
          {">"}{" "}
        </label>

        <div className="carousel">
          <ul>
            <li>
              <img src="https://raw.githubusercontent.com/osef-art/osef-art.github.io/master/src/assets/wallpapers/canyon.jpg" />
            </li>
            <li>
              <img
                src="https://m.media-amazon.com/images/I/31Y+R3Y3nvL._SL1000_.jpg"
                alt=""
              />
            </li>
            <li>
              <img src="https://raw.githubusercontent.com/osef-art/ministick/main/data/img/main/ministick-clip-3.gif" />
            </li>
            <li>
              <img src="https://raw.githubusercontent.com/osef-art/osef-art.github.io/master/src/assets/wallpapers/smoke.jpg" />
            </li>
            <li>
              <img
                src="https://images.ctfassets.net/9l3tjzgyn9gr/photo-157575/d224d518da6c26515a470a9b7e490df8/157575-honey-bun-baby.jpg?fm=jpg&fl=progressive&q=50&w=1200"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Carrousel;
