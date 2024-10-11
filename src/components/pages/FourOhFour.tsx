import { Link } from "react-router-dom";
import "./FourOhFour.scss";
export default function FourOhFour() {
  return (
    <div className="parent404">
      <div className="message404">
        <h1>Nothing here!</h1>
        <p>There's nothing to see at this location.</p>
        <p>
          <Link to="/">Better go back home...</Link>
        </p>
      </div>
    </div>
  );
}
