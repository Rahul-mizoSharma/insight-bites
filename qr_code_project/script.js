const images = [
    'https://loremflickr.com/200/200?random=1',
    'https://loremflickr.com/200/200?random=2',
    'https://loremflickr.com/200/200?random=3'
];

document.getElementById('generate').addEventListener('click', function() {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(randomImage)}&size=200x200`;
    
    document.getElementById('qrCode').innerHTML = `<img src="${qrCodeUrl}" alt="QR Code">`;
});