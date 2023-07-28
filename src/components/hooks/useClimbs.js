import { useQuery, gql } from "@apollo/client";

const GET_CLIMBS = gql`
  query MyQuery {
    areas {
      content {
        description
      }
      totalClimbs
      areaName
      id
    }
  }
`;

export const useClimbs = () => {
  const { error, loading, data } = useQuery(GET_CLIMBS);

  return {
    error,
    data,
    loading,
  };
};
