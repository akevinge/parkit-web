import { NextPage } from "next";
import { Navbar } from "../../ui/Navbar";
import { SearchMap } from "./SearchMap";

export const SearchPage: NextPage = () => {
  return (
    <div
      className="page-container"
      style={{
        maxHeight: "100vh",
        height: "100vh",
        display: "grid",
        gridTemplateRows: "auto 1fr",
      }}
    >
      <Navbar />
      <SearchMap />
    </div>
  );
};
