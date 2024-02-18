function CodePanel({ data }) {
  console.log(data);

  return (
    <div className="bg-[#2B3039] h-[60%] w-full flex flex-col ">
      <div className="w-full h-10 "></div>
      <div className="scrol-me px-10 w-full h-full">
        [
        {data?.map((d) => {
          return (
            <div>
              <div className="pl-5">{`{`}</div>
              {Object.keys(d).map((key) => {
                console.log(d[key]);

                return (
                  <div className="ml-10">
                    <span className="text-[#9CDCFE] ">{`"${key}"`} </span>
                    <span>:</span>
                    <span className="text-[#CE9178] pl-2 ">
                      {typeof key != "object" ? `"${d[key]} "` : Object.keys(d[key]).map((k) => {
                        return (
                          <div className="ml-10">
                          <span className="text-[#9CDCFE] ">{`"${k}"`} </span>
                          <span>:</span>
                          <span className="text-[#CE9178] pl-2 ">
                          {`"${d[key][k]} "`}
                          </span>
                          ,
                        </div>)
                        
                        })}
                    </span>
                    ,
                  </div>
                );
              })}
              <div className="pl-5">{`}`}</div>,
            </div>
          );
        })}
        ]
      </div>
      <div className=" w-full h-5"></div>
    </div>
  );
}

export default CodePanel;
