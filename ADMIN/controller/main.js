// lấy dssp từ server và render ra layout

var idProductUpdate = null;

function fetchProductList() {
  batLoading();
  productServ
    .getList()
    .then(function (res) {
      renderProductList(res.data);
      // console.log(res.data);
      tatLoading();
    })
    .catch(function (err) {
      tatLoading();
    });
  //
}
fetchProductList();
//   xoá sp
function xoaSP(id) {
  batLoading();
  productServ
    .delete(id)
    .then(function (res) {
      // sau khi xoá thành công trên server thì gọi api lấy danh sách mới nhất từ server
      fetchProductList();
      tatLoading();
    })
    .catch(function (err) {
      tatLoading();
    });
}

function themSP() {
  var newProduct = layThongTinTuForm();

  productServ
    .create(newProduct)
    .then(function (res) {
      // nếu thêm thành công thì gọi lại api lấy danh sách MỚI NHẤT từ server
      fetchProductList();
      $("#myModal").modal("hide");
    })
    .catch(function (err) {});
}

function suaSP(id) {
  idProductUpdate = id;
  $("#myModal").modal("show");
  batLoading();
  // gọi api lấy chi tiết ,get id
  productServ
    .getById(id)
    .then(function (res) {
      tatLoading();
      showThongTinLenForm(res.data);
    })
    .catch(function (err) {
      tatLoading();
    });

  // đưa thông tin lên form
}
function capNhatSP() {
  var product = layThongTinTuForm();
  productServ
    .update(idProductUpdate, product)
    .then(function (res) {
      fetchProductList();
      $("#myModal").modal("hide");
    })
    .catch(function (err) {});
}
// promise chaining, promise all
