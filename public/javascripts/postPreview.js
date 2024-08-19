const previewImage = (event) => {
  const files = event.target.files;

  if (files.length > 0) {
    const imageUrl = URL.createObjectURL(files[0]);
    const imageElement = document.getElementById("preview_image");
    imageElement.src = imageUrl;
  }
};

const previewHeader = () => {
  const previewHeading = document.getElementById("previewHeading");
  const inputHeading = document.getElementById("inputHeading");
  if (inputHeading.value == "") {
    previewHeading.innerText =
      " Write some catchy heading that define your post..";
    previewHeading.style = "color:#a1a1aa";
  } else {
    previewHeading.innerText = inputHeading.value;
    previewHeading.style = "color:black";
  }
};
const previewDesc = () => {
  const previewDesc = document.getElementById("previewDesc");
  const inputDesc = document.getElementById("inputDesc");
  if (inputDesc.value == "") {
    previewDesc.innerText =
      "Write you beautiful thoughts that's on your mind!..";
    previewDesc.style = "color:#a1a1aa";
  } else {
    previewDesc.innerText = inputDesc.value;
    previewDesc.style = "color:black";
  }
};
