window.addEventListener("load", () => {
  // console.log("로딩완료");
  const pics = document.querySelectorAll(".pic");
  const lightBox = document.querySelector("#lightBox");
  const lightBoxImg = document.querySelector("#lightBox-img");
  //   console.log(pics);
  pics.forEach((pic, index) => {
    // console.log(pic);
    pic.addEventListener("click", () => {
      //   console.log(pic);
      lightBox.style.display = "block";
      // 클릭시 해당하는 이미지를 가지고 온다.
      const bigSrc = pic.dataset.src;
      console.log(bigSrc);
      // console.log(lightBoxImg.src);
      lightBoxImg.src = bigSrc;
      console.log(lightBoxImg)
    });
  });
  lightBox.addEventListener("click", () => {
    lightBox.style.display = "none";
  });
});
