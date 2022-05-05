import Countries from "components/Countries";
import Header from "components/Header";
import { useState } from "react";

const Home = () => {
  const [query, setquery] = useState("");

  const handleQuery = (event) => {
    setquery(event.toLowerCase());
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Header handleQuery={handleQuery} query={query} />
      <Countries query={query} />
    </div>
  );
};
export default Home;
