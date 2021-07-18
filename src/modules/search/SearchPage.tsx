import { NextPage } from "next";
import { Navbar } from "../../ui/Navbar";
import { SearchMap } from "./SearchMap";

export const SearchPage: NextPage = () => {
  return (
    <div className="page-container" style={{ height: "100vh" }}>
      <Navbar />
      <SearchMap />
    </div>
  );
};
