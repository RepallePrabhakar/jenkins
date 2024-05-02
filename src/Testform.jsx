import React from "react";

const Testform = () => {
  return (
    <>
      <form>
        <label>
          Enter your name:
          <input type="text" />
        </label>
        <br />
        <br />
        <label>
          Enter your age:
          <input type="number" />
          <br />
          <br />
        </label>
        <input type="submit" />
      </form>
    </>
  );
};

export default Testform;
