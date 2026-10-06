const form = document.getElementById('login-form');
const message = document.getElementById('form-message');

if (form && message) {
  form.addEventListener('submit', (event) => {
    const memberId = document.getElementById('member-id');
    const deviceName = document.getElementById('device-name');
    const acceptTerms = document.getElementById('accept-terms');

    if (!memberId.value.trim() || !deviceName.value.trim() || !acceptTerms.checked) {
      event.preventDefault();
      message.textContent = 'Please complete all required fields and accept the demo terms.';
      return;
    }

    event.preventDefault();
    message.textContent = 'Form accepted for training demo. In a real system, this would submit to a server or captive portal gateway.';
  });
}
