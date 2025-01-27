$("#range_01").ionRangeSlider({
    skin: "round",
    grid: true,
    from: 5,
    values: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
});
$("#range_02").ionRangeSlider({
    skin: "round",
    grid: true,
    from: 5,
    values: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
});
$("#range_03").ionRangeSlider({
    skin: "round",
    grid: true,
    from: 5,
    values: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
});
// $("#range_04").ionRangeSlider({
//     skin: "round",
//     grid: true,
//     from: 5,
//     values: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
// });


var sections = ["vids", "doc", "imageSs", "textReport"];
function viewSection(sectionId) {
    sections.forEach(element => {
        document.getElementById(element).style.display = "none";
    });
    document.getElementById(sectionId).style.display = "block";
}
// Function to open the file in a new tab
function openFile(url) {
    window.open(url, '_blank');
}




const imageUploader = document.getElementById('imageUploader');
const imagePreviewContainer = document.getElementById('imagePreviewContainer');

// Handle file selection
imageUploader.addEventListener('change', (event) => {
    const files = Array.from(event.target.files);

    files.forEach((file) => {
        const reader = new FileReader();

        reader.onload = (e) => {
            const previewElement = document.createElement('div');
            previewElement.classList.add('image-preview');

            previewElement.innerHTML = `
        <img src="${e.target.result}" alt="Image Preview">
        <button class="remove-image">&times;</button>
      `;

            // Add functionality to remove the image
            previewElement.querySelector('.remove-image').addEventListener('click', () => {
                previewElement.remove();
            });

            imagePreviewContainer.appendChild(previewElement);
        };

        reader.readAsDataURL(file);
    });

    // Clear the input after handling
    imageUploader.value = '';
});




const participants = [
    {
        number: 331,
        name: "Participant One",
        category: "Category A",
        type: "Type X",
        bio: "This is a placeholder bio for Participant One."
    },
    {
        number: 465,
        name: "Participant Two",
        category: "Category B",
        type: "Type Y",
        bio: "This is a placeholder bio for Participant Two."
    }
];

/////// SCANNER CODE
let scannedResult = "";

document.getElementById('qrModal').addEventListener('shown.bs.modal', () => {
    const qrReader = new Html5Qrcode("qr-reader");

    qrReader.start(
        { facingMode: "environment" },
        {
            fps: 10,
            qrbox: { width: 250, height: 250 },
        },
        (decodedText, decodedResult) => {
            scannedResult = decodedText;
            findParticipantByNumber(scannedResult);
            qrReader.stop();
            hideModalById("qrModal");
        },
        (error) => {
            console.warn(`QR Error: ${error}`);
        }
    ).catch((err) => {
        console.error("Failed to start QR scanner:", err);
    });

    // Stop the scanner when modal is hidden
    document.getElementById('qrModal').addEventListener('hidden.bs.modal', () => {
        qrReader.stop();
        qrReader.clear();
    });
});


function findParticipantByNumber(number) {
    var participant = participants.find(participant => participant.number === number);
    document.getElementById("cNumber").value = participant.number ; 
    document.getElementById("cName").value = participant.name;
    document.getElementById("cCat").value = participant.category;
    document.getElementById("cType").value = participant.type;
    document.getElementById("cBio").value = participant.bio;
}


function hideModalById(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      // Hide the modal using Bootstrap's modal API
      const modalInstance = bootstrap.Modal.getInstance(modal); // Get the modal instance
      if (modalInstance) {
        modalInstance.hide();
      } else {
        console.error("Modal instance not found. Ensure the modal was initialized.");
      }
    } else {
      console.error("Modal not found. Check the provided ID.");
    }
  }