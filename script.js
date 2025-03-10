document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const numTravelers = document.getElementById('numTravelers').value;
    const contactName = document.getElementById('contactName').value;
    const contactPhone = document.getElementById('contactPhone').value;
    const joinLand = document.getElementById('joinLand').checked;

    if (!contactName.trim()) {
        alert('ชื่อผู้ติดต่อห้ามเป็นค่าว่าง');
        return; // contactName is blank
    }

    if (!contactPhone.trim()) {
        alert('เบอร์ผู้ติดต่อห้ามเป็นค่าว่าง');
        return; // contactPhone is blank
    }

    const numTravelersValue = parseInt(numTravelers, 10);
    if (isNaN(numTravelersValue) || numTravelersValue < 1 || numTravelersValue > 15) {
        alert('จำนวนผู้ร่วมเดินทางต้องเป็นตัวเลขระหว่าง 1 ถึง 15');
        return; // number of travelers is out of range
    }

    if (joinLand) {
        const confirmJoinLand = confirm('ต้องการซื้อบัตรโดยสารเครื่องบินเองใช่หรือไม่');
        if (confirmJoinLand) {
            alert('คุณเลือกซื้อบัตรโดยสารเครื่องบินเอง');
        }
    }

    alert('ลงทะเบียนสำเร็จ!');
    window.location.href = 'index.html';
});