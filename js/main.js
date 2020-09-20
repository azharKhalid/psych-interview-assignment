$(function () {
  const btns = document.querySelectorAll(".activeButtons");
  const companyName1 = document.getElementById("companyName1");
  const companyName2 = document.getElementById("companyName2");
  btns.forEach((btn) => {
    btn.addEventListener("click", (btn) => {
      let key = btn.target.attributes[0].value;
      let name = btn.target.textContent;
      if (btn.target.classList.contains("active1")) {
        btn.target.classList.remove("active1");
      } else {
        btn.target.classList.add("active1");
        deSelectRest(key);
        changeTheValue(name);
      }
    });
  });

  deSelectRest = (key) => {
    btns.forEach((btn) => {
      if (btn.attributes[0].value !== key) {
        btn.classList.remove("active1");
      }
    });
  };
  changeTheValue = (name) => {
    companyName1.textContent = name;
    companyName2.textContent = name;
  };
});
