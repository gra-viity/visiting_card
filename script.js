const addContactBtn = document.querySelector('.contact-option:last-child');

addContactBtn.addEventListener('click', function () {
    // Generate vCard string
    const vCardString = generateVCardString();

    // Create temporary URL
    const vCardURL = window.URL.createObjectURL(new Blob([vCardString], { type: 'text/vcard' }));

    // Create a temporary download link
    const downloadLink = document.createElement('a');
    downloadLink.href = vCardURL;
    downloadLink.download = 'contact.vcf';

    // Trigger download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    // Remove temporary URL
    window.URL.revokeObjectURL(vCardURL);
});

function generateVCardString() {
    // Replace with your actual contact information
    return `BEGIN:VCARD\nVERSION:4.0\nFN:John Doe\nTEL;TYPE=work,voice:+1234567890\nEMAIL:john.doe@example.com\nEND:VCARD`;
}
