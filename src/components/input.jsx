import React from "react";
function Input(props) {
  function conditionrender() {
    props.click(true);
  }
  return (
    <div>
      <form className="create-note">
        <input
          onClick={conditionrender}
          type="text"
          placeholder="Take a note ..."
        />
      </form>
    </div>
  );
}
export default Input;
