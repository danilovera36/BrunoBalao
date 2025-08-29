document.addEventListener("DOMContentLoaded", () => {
  const imageGallery = document.getElementById("image-gallery");
  const videoGallery = document.getElementById("video-gallery");

  // Lista de archivos en la carpeta `uploads/`
  const files = [
    "uploads/1.jpg",
    "uploads/2.jpg",
    "uploads/3.jpg",
    "uploads/video1.mp4",
    "uploads/video2.mp4",
  ];

  // Función para determinar si un archivo es una imagen o un video
  const isImage = (file) => file.endsWith(".jpg") || file.endsWith(".jpeg") || file.endsWith(".png");
  const isVideo = (file) => file.endsWith(".mp4");

  // Generar elementos dinámicamente
  files.forEach((file) => {
    if (isImage(file)) {
      const galleryItem = document.createElement("div");
      galleryItem.classList.add("gallery-item");

      const img = document.createElement("img");
      img.src = file;
      img.alt = "Foto destacada";

      const overlay = document.createElement("div");
      overlay.classList.add("overlay");
      overlay.textContent = "Foto destacada";

      galleryItem.appendChild(img);
      galleryItem.appendChild(overlay);
      imageGallery.appendChild(galleryItem);
    } else if (isVideo(file)) {
      const galleryItem = document.createElement("div");
      galleryItem.classList.add("gallery-item");

      const video = document.createElement("video");
      video.controls = true;
      video.classList.add("video-item");

      const source = document.createElement("source");
      source.src = file;
      source.type = "video/mp4";

      video.appendChild(source);

      const overlay = document.createElement("div");
      overlay.classList.add("overlay");
      overlay.textContent = "Video destacado";

      galleryItem.appendChild(video);
      galleryItem.appendChild(overlay);
      videoGallery.appendChild(galleryItem);
    }
  });
});