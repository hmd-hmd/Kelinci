document.getElementById("btnBuy").addEventListener("click", function () {
    document.getElementById("payment").style.display = "block" ;
});

function paySuccess() {
    document.getElementById("payStatus").innerHTML = "Status Pembayaran";
    document.getElementById("paymentMethod").style.display ="none";
    document.getElementById("paySuccess").style.display = "block";
    alert("Berhasil");
};