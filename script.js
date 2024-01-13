document.addEventListener("DOMContentLoaded", function () {
  var swit = document.querySelector(".switcher");
  var activeImage = document.querySelector(".active-image");
  var imageContainer = document.querySelector(".imageContainer");
  var infotxt = document.querySelector(".info-txt");
  swit.addEventListener("click", function () {
    swit.style.color =
      swit.style.color === "white" || swit.style.color === ""
        ? "hsl(178, 100%, 50%)"
        : "white";

    activeImage.style.display =
      activeImage.style.display === "none" || activeImage.style.display === ""
        ? "flex"
        : "none";

    infotxt.style.color =
      infotxt.style.color === "white" || infotxt.style.color === ""
        ? "hsl(178, 100%, 50%)"
        : "white";
  });
  activeImage.addEventListener("click", function () {
    swit.style.color =
      swit.style.color === "white" || swit.style.color === ""
        ? "hsl(178, 100%, 50%)"
        : "white";

    activeImage.style.display =
      activeImage.style.display === "none" || activeImage.style.display === ""
        ? "flex"
        : "none";

    infotxt.style.color =
      infotxt.style.color === "white" || infotxt.style.color === ""
        ? "hsl(178, 100%, 50%)"
        : "white";
  });
  imageContainer.addEventListener("click", function () {
    swit.style.color =
      swit.style.color === "white" || swit.style.color === ""
        ? "hsl(178, 100%, 50%)"
        : "white";

    activeImage.style.display =
      activeImage.style.display === "none" || activeImage.style.display === ""
        ? "flex"
        : "none";

    infotxt.style.color =
      infotxt.style.color === "white" || infotxt.style.color === ""
        ? "hsl(178, 100%, 50%)"
        : "white";
  });
  infotxt.addEventListener("click", function () {
    swit.style.color =
      swit.style.color === "white" || swit.style.color === ""
        ? "hsl(178, 100%, 50%)"
        : "white";

    activeImage.style.display =
      activeImage.style.display === "none" || activeImage.style.display === ""
        ? "flex"
        : "none";

    infotxt.style.color =
      infotxt.style.color === "white" || infotxt.style.color === ""
        ? "hsl(178, 100%, 50%)"
        : "white";
  });
});
