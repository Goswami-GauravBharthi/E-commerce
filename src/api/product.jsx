import axios from "axios";
const api = axios.create({
  baseURL: "https://api.pujakaitem.com",
});

export const getProductData = async () => {
  try {
    const res = await api.get("/api/products");
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getSingleProduct = async (id) => {
  try {
    const res = await api.get(`/api/products/${id}`);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};
