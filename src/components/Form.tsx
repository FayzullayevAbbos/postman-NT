import { useState } from "react";
import Dropdown from "./Dropdown";

function Form({ getApi }) {
  const [inp, setInp] = useState("");
  function submit(e) {
    e.preventDefault();
    getApi(inp);
  }
  return (
    <form
      onSubmit={submit}
      className="px-4 relative flex justify-between items-center gap-5 w-full  "
    >
      <input
        type="text"
        onChange={(e) => setInp(e.target.value)}
        value={inp}
        placeholder="Type here"
        className="input pl-[130px] text-[18px] h-[54px] input-bordered w-full max-w-full"
      />
      <button className="btn btn-info h-[54px] px-10 text-[20px] pb-1 text-white ">
        send
      </button>
      <Dropdown />
    </form>
  );
}

export default Form;
