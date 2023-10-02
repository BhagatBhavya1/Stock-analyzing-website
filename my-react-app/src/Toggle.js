import React, { useState } from "react";
import Switch from "react-switch";

const ToggleButton = ({ initialState , onChange}) => {
  const [toggleState, setToggleState] = useState(initialState);

  const handleToggleChange = () => {
    const newState = !toggleState;
    setToggleState(newState);
    if (onChange) {
      onChange(newState);
    }
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
