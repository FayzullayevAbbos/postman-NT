import { useEffect, useState } from "react";
import CodePanel from "./components/CodePanel";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
  const [data, setData] = useState(null);
  // buni typeni aniq berishni iloji yuq

  async function getApi(url: string) {
    fetch(url)
      .then((response) => response.json())
      .then((d) => setData(d))
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getApi("https://api.escuelajs.co/api/v1/products");
  }, []);

  return (
    <div className="h-full flex flex-col w-full  justify-between items-start">
      <Navbar />
      <Form getApi={getApi} />
      <CodePanel data={data} />
    </div>
  );
}

export default App;
