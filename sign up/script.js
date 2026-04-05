function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

function startCourse() {
  document.getElementById('course').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => openLesson(0), 600);
}
function processPayment() {
  const cardNum = document.getElementById('card-num').value.replace(/\s/g,'');
  const exp = document.getElementById('card-exp').value.trim();
  const cvv = document.getElementById('card-cvv').value.trim();
  
   if (cardNum.length < 16 || !exp || cvv.length < 3) {
    showToast('⚠️ Please enter valid payment details', '⚠️');
    return;
  }
  
  // Simulate payment processing
  const btn = document.querySelector('#payment-step .btn-full');
  btn.textContent = '⏳ Processing...';
  btn.disabled = true;
  
  setTimeout(() => {
    state.registered = true;
    state.paid = true;
    saveState();
    showSuccessStep();
    document.getElementById('lockBanner').style.display = 'none';
    document.getElementById('progressSection').style.display = 'block';
    renderLessons();
    updateProgress();
    showToast('🎉 Payment successful! Welcome to MasterMind!', '🎉');
  }, 1800);
}
