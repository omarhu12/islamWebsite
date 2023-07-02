// const boxes = document.querySelectorAll(".box");

// window.addEventListener("scroll", checkBoxes);

// function checkBoxes() {
//   const triggerBottom = (window.innerHeight / 6) * 3;
//   boxes.forEach((box) => {
//     const boxTop = box.getBoundingClientRect().top;

//     if (boxTop < triggerBottom) {
//       box.classList.add("show");
//     } else {
//       box.classList.remove("show");
//     }
//   });
// }

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const boxes = document.querySelectorAll(".box");
boxes.forEach((el) => observer.observe(el));
