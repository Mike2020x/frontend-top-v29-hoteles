import { PropagateLoader } from "react-spinners";
import PropTypes from "prop-types";
import "./index.scss";

const Loading = ({ height }) => {
  return (
    <div className="loading-container" style={{ height }}>
      <PropagateLoader color="#e74c3c" loading={true} />
    </div>
  );
};

Loading.propTypes = {
  height: PropTypes.string
};

export default Loading;
