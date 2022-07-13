window.onscroll = () => {
  appearTop();
};

var count = 0;
function show_slider() {
  var slider = document.getElementById("slider-menu");
  slider.style.transform = "translateX(0%)";

  var close_slider = document.getElementById("close-btn");
  close_slider.style.display = "block";

  var open_slider = document.getElementById("open-btn");
  open_slider.style.display = "none";
}

function hide_slider() {
  var slider = document.getElementById("slider-menu");
  slider.style.transform = "translateX(100%)";

  var close_slider = document.getElementById("close-btn");
  close_slider.style.display = "none";

  var open_slider = document.getElementById("open-btn");
  open_slider.style.display = "block";
}

function cart_clicked() {
  var bag = document.getElementById("bag-modal-container");
  bag.style.display = "flex";
  var cart = document.getElementById("cart");
  cart.style.color = "#161616";

  var profile = document.getElementById("profile");
  profile.style.color = "#e96235";

  var offers = document.getElementById("offers");
  offers.style.color = "#e96235";
}

function offers_clicked() {
  var hot_offers = document.getElementById("offers-modal-container");
  hot_offers.style.display = "flex";
  var offers = document.getElementById("offers");
  offers.style.color = "#161616";

  var cart = document.getElementById("cart");
  cart.style.color = "#e96235";

  var profile = document.getElementById("profile");
  profile.style.color = "#e96235";
}

function profile_clicked() {
  var profiletap = document.getElementById("profile-modal-container");
  profiletap.style.display = "flex";
  var profile = document.getElementById("profile");
  profile.style.color = "#161616";

  var cart = document.getElementById("cart");
  cart.style.color = "#e96235";

  var offers = document.getElementById("offers");
  offers.style.color = "#e96235";
}

function show_pro() {
  var pro_icon = document.getElementById("pro-icon");
  var pro_cat = document.getElementById("pro-cat");
  var pro_det = document.getElementById("pro-det");
  pro_icon.style.display = "none";
  pro_cat.style.display = "none";
  pro_det.style.display = "none";

  var pro_1 = document.getElementById("pro-1");
  var pro_2 = document.getElementById("pro-2");
  pro_1.style.display = "flex";
  pro_2.style.display = "flex";

  var close_btn = document.getElementById("hide-pro");
  close_btn.style.display = "block";
}

function openProducts() {
  document.getElementById("demo-pro-det").style.display = "flex";
}

function demo_hide_pro() {
  document.getElementById("demo-pro-det").style.display = "none";
}

function update_bag() {
  count = count + 1;
  var bag = document.getElementById("bag");
  bag.innerHTML = count + " Item Selected";
  bag.style.color = "black";

  document.getElementById("clicked").value = "Added";
}

// open close modal

function open_modal() {
  // var modal = document.getElementById("modal-container");
  // modal.style.display = "flex";

  document.getElementById("loginModalContainer").style.display = "block";
}

function close_modal() {
  var modal = document.getElementById("modal-container");
  modal.style.display = "none";
}

function close_offers_modal() {
  var modal = document.getElementById("offers-modal-container");
  modal.style.display = "none";

  var offers = document.getElementById("offers");
  offers.style.color = "#e96235";
}

function close_bag_modal() {
  var modal = document.getElementById("bag-modal-container");
  modal.style.display = "none";

  var cart = document.getElementById("cart");
  cart.style.color = "#e96235";
}

function close_profile_modal() {
  var modal = document.getElementById("profile-modal-container");
  modal.style.display = "none";

  var profile = document.getElementById("profile");
  profile.style.color = "#e96235";
}

//show hide register login form

function show_register_form() {
  var register = document.getElementById("register-form");
  register.style.display = "block";

  var login = document.getElementById("login-form");
  login.style.display = "none";
}

function show_login_form() {
  var register = document.getElementById("register-form");
  register.style.display = "none";

  var login = document.getElementById("login-form");
  login.style.display = "block";
}

function appearTop() {
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    document.getElementById("top").style.display = "block";
  } else {
    document.getElementById("top").style.display = "none";
  }
}
