function showDetailsPopup() {
  const productAbstract = `
    <strong>Product Name:</strong> DEecoration Sets<br>
    <strong>Discreption:</strong> <br>Unique designs for modern living spaces<br>
    <strong>Material:</strong><br>
    -Concrete & marble powder <br>
    <strong>Pieces or sets:</strong><br>
    - Donuts vase , Unregular mini vase<br>
    - Oval coasters , Weavy Coasters<br>                                                                
    - Bonbonniere <br>
    - A crescent with a candle <br>
    - Incense Burner <br>
    - Shells <br><br>
    <strong>Price:</strong> Based on Which piece$
  `;

  
  Swal.fire({
    title: 'Product Details',
    html: productAbstract, 
    icon: 'info',
    confirmButtonText: 'Close',
  });

}





function showDetailsPopup1() {
  
  const productAbstract = `
    <strong>Product Name:</strong> MIRRORS <br>
    <strong>Discreption:</strong> <br>Mirror in different shapes reflect the beauty of your home <br>

    <strong>Material:</strong><br>
    Resin , ropes and foam clay mirror <br>
    <strong>Sizes:</strong><br>
    ALL SIZES AVAILABLE <BR>
    <strong>Price:</strong> Based on SIZE$
  `;

  
  Swal.fire({
    title: 'Product Details',
    html: productAbstract, 
    icon: 'info',
    confirmButtonText: 'Close',
  });

}





function showDetailsPopup2() {

  const productAbstract = `
    <strong>Product Name:</strong> Engagement Resin Tray <br>
    <strong>Discreption:</strong> <br> Make your day special with So's designs details <br>

    <strong>Material:</strong><br>
    Resin , Acrylic and mirror trays <br>
    <strong>Sizes:</strong><br>
    ALL SIZES AVAILABLE <BR>
    <strong>Price:</strong> Started from 550LE to 1500LE
  `;

  Swal.fire({
    title: 'Product Details',
    html: productAbstract, 
    icon: 'info',
    confirmButtonText: 'Close',
  });

}




function showPopup1() {
  Swal.fire({
    title: 'DESIGN YOUR ORDER',
    html: `
      <!-- Personal Information Fields -->
      <div>
        <label for="material">material:</label>
        <input type="material" id="material" class="swal2-input" placeholder="Resin,acrylic, mirror " required>
      </div>
      <div>
        <label for="Size">Size:</label>
        <input type="Size" id="Size" class="swal2-input" placeholder="Enter the size u want" required>
      </div>
      <div>
        <label for="text">text:</label> 
        <input type="text" id="text" class="swal2-input" placeholder="Names , Date , Caption " required>
      </div>
      <!-- Upload Photo Fsield -->
      <div>
        <label for="SameTray">Upload the tray u want:</label>
        <input type="file" id="SameTray" class="swal2-input" accept="image/*">
      </div>
    `,
    showCancelButton: true,
    confirmButtonText: 'Submit',
    cancelButtonText: 'Cancel',
    preConfirm: () => {
      // Get the values from the personal information inputs
      const material = document.getElementById('material').value;
      const Size = document.getElementById('Size').value;
      const text = document.getElementById('text').value;
      const SameTray = document.getElementById('SameTray').files[0]; // Get the uploaded photo file

      // Perform validation if necessary
      if (!material || !Size || !text) {
        Swal.showValidationMessage('Please fill in all required fields');
        return false; // Prevent form submission if validation fails
      }

      // If a photo is uploaded, include it in the form data
      let SameTrayData = null;
      if (SameTray) {
        if (SameTray.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.readAsDataURL(SameTray);  // Convert image to base64 string

          reader.onloadend = () => {
            SameTray = reader.result;  // Store base64 image data
            // Return the form data
            return { material, Size, text, SameTray: SameTrayData };
          };
        } else {
          Swal.showValidationMessage('Please upload a valid image file');
          return false; // Prevent form submission if the uploaded file is not an image
        }
      } else {
        // If no photo is uploaded, return just the personal info
        return { material, Size, text };
      }
    }
  }).then((result) => {
    if (result.isConfirmed) {
      const { material, Size, text, SameTray } = result.value;

      // Handle the result data (you can send it to the server or log it to the console)
      console.log('User Info:', material, Size, text);

      if (SameTray) {
        console.log('Uploaded SameTray (Base64):', SameTray); // Log the uploaded image as a base64 string
      }

      // Show a success message
      Swal.fire('Information submitted!', `material: ${material}, Size: ${Size}, text: ${text}`, 'success');
    }
  });
}




  function showPopup5() {
    
    const productAbstract = `
      information is submitted
    `;

   
    Swal.fire({
      title: 'DONE',
      html: productAbstract, 
      icon: 'DONE',
      confirmButtonText: 'Close',
      
    }); 

  }


  