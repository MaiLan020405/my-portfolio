const lantern = document.getElementById('lantern');

// Khi rê chuột vào, tạm dừng hiệu ứng xoay
lantern.addEventListener('mouseenter', () => {
    lantern.style.animationPlayState = 'paused';
});

// Khi đưa chuột ra ngoài, tiếp tục hiệu ứng xoay
lantern.addEventListener('mouseleave', () => {
    lantern.style.animationPlayState = 'running';
});