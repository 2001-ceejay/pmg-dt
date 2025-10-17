document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('actionBtn');
  if (!button) return;
  button.addEventListener('click', () => {
    alert('Button clicked! 🎉');
  });
});
