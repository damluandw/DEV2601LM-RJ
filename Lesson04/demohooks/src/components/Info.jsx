import React, { useContext } from "react";
import {ThemeContext} from '../App'

function Info() {
    const theme = useContext(ThemeContext)
  return (
    <div>
      <p className={theme}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum magni
        dolores maiores modi vitae alias hic amet reprehenderit nulla esse
        consequatur, cumque iste maxime distinctio illum blanditiis neque, nemo
        at.
      </p>
    </div>
  );
}

export default Info;
