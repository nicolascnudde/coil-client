import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

import theme from "../../contexts/Theme";

const spinner = css`
  display: block;
  margin: 0 auto;
`;

const Spinner = ({ color = theme.colors.darkGreen, loading, size = 50 }) => {
  return (
    <ClipLoader size={size} loading={loading} css={spinner} color={color} />
  );
};

export default Spinner;
