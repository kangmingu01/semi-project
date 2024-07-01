$(document).ready(function () {
  const carouselImg = [
    {
      id: 1,
      img: "../assets/Carousel/keyboard_image1.jpg",
      name: "Bridge75",
    },
    {
      id: 2,
      img: "../assets/Carousel/keyboard_image2.jpg",
      name: "네어고",
    },
    {
      id: 3,
      img: "../assets/Carousel/keyboard_image3.jpg",
      name: "QK",
    },
    {
      id: 4,
      img: "../assets/Carousel/keyboard_image4.jpg",
      name: "Neo",
    },
  ];

  const carouselInner = $("#carouselInner");

  carouselImg.forEach((item, index) => {
    const isActive = index === 0 ? " active" : "";
    const carouselItem = `
      <div class="carousel-item${isActive}">
        <img src="${item.img}" class="d-block w-100 object-fit-cover vh-100" alt="${item.name}" />
        <div class="carousel-caption">
          <h2>${item.name}</h2>
        </div>
      </div>
    `;
    carouselInner.append(carouselItem);
  });
});
