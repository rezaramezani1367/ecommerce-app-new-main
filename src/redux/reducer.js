import { productLoading, productSuccess, productError } from "./constants";

export const products = (
  state = { productLoading: false, productData: [], productError: "" },
  { type, payload }
) => {
  switch (type) {
    case productLoading:
      return payload;
    case productSuccess:
      return payload;
    case productError:
      return payload;

    default:
      return state;
  }
};
