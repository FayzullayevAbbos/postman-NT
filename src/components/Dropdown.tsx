function Dropdown() {
  return (
    <div className=" absolute top-1  left-5 shadow-none ">
      <div className=" btn bg-inherit outline-none px-8 text-[20px] shadow-none">
        {" "}
        post{" "}
      </div>
      <ul className="bg-[#1D232A] text-[20px] rounded-lg mt-2 gap-3 py-2 hidden shadow-2xl flex flex-col items-end ">
        <li className="hover:bg-[#2B3039] rounded-lg text-center pb-2 w-full">
          get
        </li>
        <li className="hover:bg-[#2B3039] rounded-lg text-center pb-2 w-full">
          get
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
