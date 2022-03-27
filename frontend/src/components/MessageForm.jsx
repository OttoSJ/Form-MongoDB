import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createMessage } from "../features/messages/messageSlice";

function MessageForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createMessage({ message: text }));
    setText("");
  };
  // console.log(text);
  return (
    <section>
      <form className="message-form" onSubmit={onSubmit}>
        <div className="message-form message-input-container">
          <input
            className="message-input"
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div>
            <button type="submit" className="message-button">
              Post
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default MessageForm;
