import { useQuery } from "@apollo/client";
import { Redirect } from "react-router-dom";

import { GET_FARMER } from "../../graphql/farmers";
import FarmerItem from "./FarmerItem";
import * as Routes from "../../routes";
import Spinner from "../Spinner/Spinner";

const Farmer = ({ farmerId }) => {
  const id = parseInt(farmerId);

  const { data, loading, error } = useQuery(GET_FARMER, {
    variables: { id },
  });

  return (
    <>
      {loading && <Spinner loading={loading} />}
      {error && <Redirect to={Routes.LANDING} />}
      {data && <FarmerItem farmer={data.getFarmer} />}
    </>
  );
};

export default Farmer;
