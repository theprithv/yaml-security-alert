document.getElementById('demo-btn').addEventListener('click', function() {
    const btn = this;
    btn.disabled = true;
    btn.textContent = 'Verifying...';

    setTimeout(() => {
        alert('System Check Complete: All security monitors are active and healthy.');
        btn.disabled = false;
        btn.textContent = 'Check System Status';
    }, 1500);
});
