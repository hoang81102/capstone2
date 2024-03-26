function renderProductList(productArr) {
  var contentHTML = "";
  productArr.forEach(function (item) {
    var content = `<div class="item" style="    background-color: #070120;        padding-bottom: 10px;
"  >
    <div > <img style="width:100%;
" src="${item.img}" alt=""></div>

<div>
<h2 class="label-style">${item.name}</h2>
    <h3>${item.price}</h3>
    <p>${item.desc}</p>
    <div style="text-align: center;" > 
    <button  "
    onclick=xoaSP(${item.id})
    class="bt " ;style="background-color: green;">
    <i class="fa fa-shopping-basket "></i> Đặt Hàng</button></div>

   </div>
    
      </div>`;
    contentHTML += content;
  });
  document.getElementById("tblDanhSachSP").innerHTML = contentHTML;
  //
}
