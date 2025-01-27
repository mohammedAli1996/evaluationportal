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