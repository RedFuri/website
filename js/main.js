document.addEventListener("DOMContentLoaded", () => {
  const confirmBtn = document.getElementById("confirmDonateBtn");
  const totalEl = document.getElementById("donateTotal");
  if (!confirmBtn || !totalEl) return;
  let total = Number(totalEl.textContent) || 0;
  confirmBtn.addEventListener("click", () => {
    total += 500;
    totalEl.textContent = total;
  });
});
