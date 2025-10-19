function handleSubmit() {
  const emailInput = document.getElementById("email");
  const emailValue = emailInput.value.toLowerCase();
  const errorEmail = document.getElementById("error-email");

  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const checkEmail = regex.test(emailValue);

  const sectionContent = document.querySelector("#info .section-content");
  const submitControl = document.querySelector(".submit-email");

  if (checkEmail) {
    sectionContent.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Vui lòng nhập đúng định dạng email";
  }
}

function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".view-more");
  const viewLess = element.querySelector(".view-less");
  if (viewMore && viewLess && viewLess.style.display === "none") {
    viewMore.style.display = "inline-block";
  }
}

function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".view-more");
  const viewLess = element.querySelector(".view-less");
  if (viewMore && viewLess && viewLess.style.display === "none") {
    viewMore.style.display = "none";
  }
}

function handleViewMore(element) {
  const parent = element.closest(".col-12, .col-md-6, .col-lg-4");
  const viewMore = parent.querySelector(".view-more");
  const viewLess = parent.querySelector(".view-less");
  const sectionContents = parent.querySelectorAll(".section-content");
  sectionContents.forEach((item) => (item.style.display = "block"));
  viewMore.style.display = "none";
  viewLess.style.display = "inline-block";
}

function handleViewLess(element) {
  const parent = element.closest(".col-12, .col-md-6, .col-lg-4");
  const viewMore = parent.querySelector(".view-more");
  const viewLess = parent.querySelector(".view-less");
  const sectionContents = parent.querySelectorAll(".section-content");
  sectionContents.forEach((item) => (item.style.display = "none"));
  viewLess.style.display = "none";
  viewMore.style.display = "inline-block";
}
