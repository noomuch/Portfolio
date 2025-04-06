newFunction();

function newFunction() {
      document.getElementById("menu-toggle").addEventListener("change", function () {
            const sticker = document.querySelector(".sticker");
            if (this.checked) {
                  sticker.style.display = "none";
            } else {
                  sticker.style.display = "block";
            }
      });
}
