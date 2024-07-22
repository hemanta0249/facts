document.addEventListener('DOMContentLoaded', function() {
    const nameDropdown = document.getElementById('name');
    const anmolImg = document.getElementById('anmol-img');
    const otherImg = document.getElementById('other-img');

    // Initial setup based on default selection (Anmol)
    anmolImg.style.display = 'inline-block';
    otherImg.style.display = 'none';

    // Event listener for dropdown change
    nameDropdown.addEventListener('change', function() {
        const selectedName = nameDropdown.value;

        if (selectedName === 'anmol' || selectedName === 'bhupi') {
            anmolImg.style.display = 'inline-block';
            otherImg.style.display = 'none';
        } else {
            anmolImg.style.display = 'none';
            otherImg.style.display = 'inline-block';
        }
    });
});
