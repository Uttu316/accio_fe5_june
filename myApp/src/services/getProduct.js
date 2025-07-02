import { api } from ".";

export const getProduct = async (productId) => {
  return api({
    endpoint: `/products/${productId}`,
  });
};
