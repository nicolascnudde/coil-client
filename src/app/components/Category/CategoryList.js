import { useQuery } from "@apollo/client";
import styled from "styled-components";

import CategoryListItem from "./CategoryListItem";
import { GET_ALL_CATEGORIES } from "../../graphql/categories";
import Spinner from "../Spinner/Spinner";

const StyledList = styled.ul`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  flex-wrap: no-wrap;
`;

const CategoryList = () => {
  const { loading, error, data } = useQuery(GET_ALL_CATEGORIES);

  if (loading) return <Spinner loading={loading} />;
  if (error) return `Couldn't load the categories!`;

  return (
    <StyledList>
      {data.categories.map((e) => {
        return (
          <CategoryListItem
            key={e.id}
            id={e.id}
            image={e.image}
            name={e.name}
          />
        );
      })}
    </StyledList>
  );
};

export default CategoryList;
