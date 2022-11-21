import { RingLoader } from "react-spinners";
import { useContext } from "react";
import { pageContent } from "./../../ContextApi/PagesContext";

const Loader = ({ color }) => {
  const { dataLoaded } = useContext(pageContent);
  const override = {
    position: "fixed",
    left: "42%",
    top: "34%",
    zIndex: "999",
  };
  return (
    <RingLoader
      cssOverride={override}
      color={color ? color : ""}
      loading={!dataLoaded}
      size={200}
    />
  );
};

export default Loader;
