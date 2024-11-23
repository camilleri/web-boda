import "./Header.css";
import Languages from "./Languages";

export function Header() {
  return (
    <header>
      <div className="header-div">
        <div>Icono</div>
        <Languages />
      </div>
    </header>
  );
}
