const creditCardBtn = document.getElementById("creditCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const payNowBtn = document.getElementById("payNow");
const status = document.getElementById("status");
const paymentForm = document.getElementById("paymentForm");

const checkRegister = () => {
  const userData = localStorage.getItem("registerData");
  if (!userData) {
    alert("Please complete registration before checkout.");
    window.location.href = "../Register Page/login.html";
    return false;
  }
  return true;
};

const setPaymentMethod = (method) => {
  if (method === "paypal") {
    paypalBtn.classList.add("active");
    creditCardBtn.classList.remove("active");
    Array.from(paymentForm.querySelectorAll("input")).forEach((i) => (i.disabled = true));
    status.innerHTML = "PayPal selected. Click Pay Now to continue.";
  } else {
    creditCardBtn.classList.add("active");
    paypalBtn.classList.remove("active");
    Array.from(paymentForm.querySelectorAll("input")).forEach((i) => (i.disabled = false));
    status.innerHTML = "Credit card selected. Complete form to pay.";
  }
};

const unlockLessons = () => {
  const paidData = JSON.parse(localStorage.getItem("userStatus") || "{}");
  paidData.isPaid = true;
  paidData.paidAt = new Date().toISOString();
  localStorage.setItem("userStatus", JSON.stringify(paidData));
};

const payAction = () => {
  if (!checkRegister()) return;

  const method = paypalBtn.classList.contains("active") ? "paypal" : "credit-card";
  if (method === "credit-card") {
    const cardName = document.getElementById("cardName").value.trim();
    const cardNumber = document.getElementById("cardNumber").value.trim();
    const expiry = document.getElementById("expiry").value.trim();
    const cvc = document.getElementById("cvc").value.trim();

    if (!cardName || !cardNumber || !expiry || !cvc) {
      status.innerHTML = "<span class='text-red-300'>Please fill in all card details.</span>";
      return;
    }
  }

  status.innerHTML = "<span class='text-yellow-300'>Processing payment... <i class='fas fa-spinner fa-spin'></i></span>";
  payNowBtn.disabled = true;

  setTimeout(() => {
    status.innerHTML = "<span class='text-emerald-300'>Payment Successful! Redirecting to Lesson 1 …</span>";
    unlockLessons();

    setTimeout(() => {
      window.location.href = "../Curriculum/Curriculum.html";
    }, 1500);
  }, 1800);
};

if (checkRegister()) {
  setPaymentMethod("credit-card");
  creditCardBtn.addEventListener("click", () => setPaymentMethod("credit-card"));
  paypalBtn.addEventListener("click", () => setPaymentMethod("paypal"));
  payNowBtn.addEventListener("click", payAction);
}