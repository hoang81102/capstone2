function renderProductList(productArr) {
  var contentHTML = "";
  productArr.forEach(function (item) {
    var content = `<tr>
     <td ><img style="width:100px;" src="${item.img}" alt=""></td>
    <td>${item.name}</td>
    <td>${item.price}</td>
    <td>${item.desc}</td>
    <td>
    <button 
    onclick=xoaSP(${item.id})
    class="btn btn-danger">Xoa</button>
    <button'
    onclick=suaSP(${item.id})
     class="btn btn-warning">Sua</button>
    </td>
                </tr>`;
    contentHTML += content;
  });
  document.getElementById("tblDanhSachSP").innerHTML = contentHTML;
  //
}

function batLoading() {
  document.getElementById("spinner").style.display = "flex";
}

function tatLoading() {
  document.getElementById("spinner").style.display = "none";
}

function layThongTinTuForm() {
  var tenSP = document.getElementById("TenSP").value;
  var giaSP = document.getElementById("GiaSP").value;
  var hinhSP = document.getElementById("HinhSP").value;
  var moTaSP = document.getElementById("moTaSP").value;
  // ko có id trong create
  return {
    name: tenSP,
    price: giaSP,
    img: hinhSP,
    desc: moTaSP,
  };
}
function showThongTinLenForm(product) {
  document.getElementById("TenSP").value = product.name;
  document.getElementById("GiaSP").value = product.price;
  document.getElementById("HinhSP").value = product.img;
  document.getElementById("moTaSP").value = product.desc;
}
