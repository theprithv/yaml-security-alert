document.getElementById('demo-btn').addEventListener('click', function() {
    const btn = this;
    const originalText = btn.textContent;
    btn.disabled = true;
    
    const statuses = [
        'Connecting to Firewall...',
        'Checking YAML integrity...',
        'Validating SSH keys...',
        'Monitors Healthy!'
    ];

    let i = 0;
    const interval = setInterval(() => {
        if (i < statuses.length) {
            btn.textContent = statuses[i];
            i++;
        } else {
            clearInterval(interval);
            setTimeout(() => {
                alert('🛡️ System Audit Complete: All security protocols are active and monitoring for changes.');
                btn.disabled = false;
                btn.textContent = originalText;
            }, 500);
        }
    }, 600);
});
