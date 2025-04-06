newFunction();

function newFunction() {
      document.getElementById("menu-toggle").addEventListener("change", function () {
            const stickerContainer = document.querySelector(".sticker-container");
            const portfolioContainer = document.querySelector(".portfolio-container");

            if (this.checked) {
                  stickerContainer.style.display = "none";
                  portfolioContainer.style.marginTop = "20%";
            } else {
                  stickerContainer.style.display = "block";
                  portfolioContainer.style.marginTop = "";
            }
      });
}
