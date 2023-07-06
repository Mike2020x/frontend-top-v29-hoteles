import { PropagateLoader } from "react-spinners";
import "./index.scss";

const Loading = () => {
  return (
    <div className="loading-container">
      <PropagateLoader color="#e74c3c" loading={true} />
    </div>
  );
};

export default Loading;
