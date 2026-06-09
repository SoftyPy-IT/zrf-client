// lib/cloudinaryUpload.ts
const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/auto/upload`;

export const uploadFile = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "trust-auto");

  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || 'Upload failed');
  }

  const responseData = await response.json();
  return responseData.secure_url; // Return the secure URL from Cloudinary
};

export const uploadMultipleFiles = async (files: File[]): Promise<string[]> => {
  const uploadPromises = files.map(file => uploadFile(file));
  return Promise.all(uploadPromises);
};