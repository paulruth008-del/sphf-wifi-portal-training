const sessionKey = 'common-ground-demo-session';
const form = document.getElementById('login-form');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const memberId = document.getElementById('member-id').value.trim();
    const deviceName = document.getElementById('device-name').value.trim();
    const acceptTerms = document.getElementById('accept-terms').checked;
    const message = document.getElementById('form-message');

    if (!memberId || !deviceName || !acceptTerms) {
      message.textContent = 'Enter both demo details and accept the terms to continue.';
      return;
    }

    try {
      localStorage.setItem(sessionKey, JSON.stringify({ deviceName }));
      window.location.assign('status.html');
    } catch {
      message.textContent = 'Your browser could not save this demo session. Check that local storage is available.';
    }
  });
}

const sessionDevice = document.getElementById('session-device');
if (sessionDevice) {
  try {
    const session = JSON.parse(localStorage.getItem(sessionKey) || 'null');
    if (session?.deviceName) {
      sessionDevice.textContent = session.deviceName;
    }
  } catch {
    sessionDevice.textContent = 'Demo device';
  }
}

if (document.getElementById('logout-title')) {
  try {
    localStorage.removeItem(sessionKey);
  } catch {
    // The confirmation page remains usable when storage is unavailable.
  }
}
