import { relayStylePagination } from '@apollo/client/utilities';

const typePolicies = {
  Query: { fields: { productsEntity: relayStylePagination() } },
};

export default typePolicies;
