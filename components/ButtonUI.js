import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const icons = {
  faAngleLeft: faAngleLeft,
  faAngleRight: faAngleRight,
  faBars: faBars,
};

const ButtonUI = ({ clickHandler, icon }) => {
  const matchingIcon = icons[icon];
  return (
    <button onClick={clickHandler}>
      <FontAwesomeIcon icon={matchingIcon} />
    </button>
  );
};
export default ButtonUI;
