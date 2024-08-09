"use client";

import { UploadButton } from "@/app/api/uploadthing/uploadthing";

export default function UploadImageComponent() {
  return (
    <UploadButton
      content={{
        button: "Browse File",
        allowedContent: "PDF, PNG, JPEG only",
      }}
      appearance={{
        button: "rounded-lg border-2 border-black p-4",
        container: "rounded-lg border-2 border-dashed p-28",
        allowedContent: "",
      }}
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        // Do something with the response
        console.log("Files: ", res);
        alert("Upload Completed");
      }}
      onUploadError={(error: Error) => {
        // Do something with the error.
        alert(`ERROR! ${error.message}`);
      }}
    />
  );
}
