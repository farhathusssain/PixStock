

document.addEventListener("click",function (e){
    if(e.target.classList.contains("gallery-item")){
          const src = e.target.getAttribute("src");
          document.querySelector(".modal-img").src = src;
          const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
          myModal.show();
    }
  })

  document.querySelector('.btn-donwload').addEventListener('click', function() {
    // Get the current image in the modal
    const imageUrl = document.querySelector('.modal-img').src;

    // Create an anchor element for downloading
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'downloaded-image.jpg'; // Set a default name for the image

    // Trigger the download
    link.click();
});
