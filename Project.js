<script>
    const modals = document.querySelectorAll(".modal");
    const openButtons = document.querySelectorAll(".card-btn");
    const closeButtons = document.querySelectorAll(".close");

  
    openButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const modalId = btn.getAttribute("data-modal");
        document.getElementById(modalId).style.display = "flex";
      });
    });

     
    closeButtons.forEach(close => {
      close.addEventListener("click", () => {
        modals.forEach(m => m.style.display = "none");
      });
    });

    window.addEventListener("click", e => {
      modals.forEach(m => {
        if (e.target === m) m.style.display = "none";
      });
    });

     
    const zoomModal = document.getElementById("imgZoomModal");
    const zoomImg = document.getElementById("zoomedImg");

    document.querySelectorAll(".modal-content img").forEach(img => {
      img.addEventListener("click", () => {
        zoomModal.style.display = "flex";
        zoomImg.src = img.src;
      });
    });
 
    zoomModal.addEventListener("click", e => {
      if (e.target === zoomModal || e.target.classList.contains("close")) {
        zoomModal.style.display = "none";
      }
    });
  </script>