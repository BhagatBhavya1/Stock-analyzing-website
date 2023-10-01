import React, { useState } from "react";
import Switch from "react-switch";

const ToggleButton = ({ initialState }) => {
  const [toggleState, setToggleState] = useState(initialState);

  const handleToggleChange = () => {
    setToggleState(!toggleState);
  };

  return (
    <Switch
      onChange={handleToggleChange}
      checked={toggleState}
      onColor="#86d3ff"
      offColor="#ccc"
    />
  );
};

export default ToggleButton;
