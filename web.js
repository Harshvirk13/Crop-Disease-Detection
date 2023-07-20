function previewImage(event) {
    var input = event.target;
    var preview = document.getElementById('previewImage');
  
    if (input.files && input.files[0]) {
      var reader = new FileReader();
  
      reader.onload = function (e) {
        preview.src = e.target.result;
      };
  
      reader.readAsDataURL(input.files[0]);
    } else {
      preview.src = '';
    }
  }
  
  function uploadImage() {
  }
  