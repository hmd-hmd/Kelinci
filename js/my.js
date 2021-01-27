document.getElementById("btnBuy").addEventListener("click", function () {
    document.getElementById("payment").style.display = "block" ;
});

function sent() {
    document.getElementById("sentMessage").style.display = "block" ;
    console.log("asuu")
};

function buy() {
    document.getElementById("payStatus").innerHTML = "Status Pembayaran";
    document.getElementById("paymentMethod").style.display ="none";
    document.getElementById("paySuccess").style.display = "block";
    alert("Berhasil");
};