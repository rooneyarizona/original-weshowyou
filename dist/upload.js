// Configure AWS SDK
AWS.config.update({
    region: 'US West (N. California) us-west-1', // Replace with your AWS region
    credentials: new AWS.Credentials('your-access-key', 'your-secret-key') // Replace with your AWS access key and secret key
  });
  
  // Initialize S3
  const s3 = new AWS.S3();
  
  // Handle form submission
  document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fileInput = document.getElementById('videoFile');
    const file = fileInput.files[0];
  
    if (file) {
      // Generate a unique file name
      const fileName = `videos/${Date.now()}_${file.name}`;
  
      // Prepare params for S3 upload
      const params = {
        Bucket: 'your-bucket-name', // Replace with your S3 bucket name
        Key: fileName,
        Body: file,
        ACL: 'public-read', // Set ACL to public-read for public access
        ContentType: file.type
      };
  
      // Upload file to S3
      s3.upload(params, function(err, data) {
        if (err) {
          console.error('Error uploading file:', err);
        } else {
          console.log('File uploaded successfully:', data.Location);
          // You can use data.Location to store the S3 file URL or perform further operations
        }
      });
    } else {
      console.error('No file selected');
    }
  });
  