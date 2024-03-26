const BASE_URL = "https://633ec05b0dbc3309f3bc5455.mockapi.io/product";
var productServ = {
  getList: () => {
    return axios({
      url: BASE_URL,
      method: "GET",
    });
  },
  delete: (id) => {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: "DELETE",
    });
  },
  create: (product) => {
    return axios({
      url: BASE_URL,
      method: "POST",
      data: product,
    });
  },
  getById: function (id) {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: "GET",
    });
  },
  update: function (id, product) {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: "PUT",
      data: product,
    });
  },
};
