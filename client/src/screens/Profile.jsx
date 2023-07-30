import { useEffect, useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useHistory, useParams } from "react-router";
import girl from '../pictures/girl.png'
import jeem from '../pictures/jeem 1.png'
import circle from '../pictures/Ellipse 1.png'
import vector from '../pictures/Vector.png'
import quranOpen from '../pictures/quran (1).png'
import quranClosed from '../pictures/quran.png'
import sad from '../pictures/sad.png'
import smiley from '../pictures/smiley.png'

export default function Profile(props) {
  const [isOpenOne, setIsOpenOne] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);

  const handleToggleOne = () => {
    setIsOpenOne(!isOpenOne);
  };

  const handleToggleTwo = () => {
    setIsOpenTwo(!isOpenTwo);
  };

  return (
    <div>
      <div className="dropdown">
        <button className="dropdown-toggle" onClick={handleToggleOne}>
          <img src={jeem} />
          <img src={girl} />
          Student #26
          <img src={vector} />
        </button>
        {isOpenOne && (
          <div className="dropdown-menu">
          <p>sutdent 1</p>
            {/* content for the first container */}
          </div>
        )}
      </div>

      <div className="dropdow-two">
        <button className="dropdown-toggle" onClick={handleToggleTwo}>
          <img src={jeem} />
          <img src={girl} />
          Student #27
          <img src={vector} />
        </button>
        {isOpenTwo && (
          <div className="dropdown-menu">
          <p>gggg</p>
            {/* content for the second container*/}
          </div>
        )}
      </div>
    </div>
  );
};
