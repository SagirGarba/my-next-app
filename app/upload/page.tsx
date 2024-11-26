"use client";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import React, { useState } from "react";

interface cloudinaryResult {
  public_id: string;
}

const UloadPage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <>
      {publicId && (
        <CldImage alt={"Cloud image"} src={publicId} height={180} width={270} />
      )}
      <CldUploadWidget
        uploadPreset="fiprpcdh"
        options={{
          sources: ["local"],
          multiple: false,
          maxFiles: 5
        }}
        onSuccess={(result, { widget }) => {
          if (result.event !== "success") return;
          const info = result.info as cloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button
            className="btn btn-primary"
            onClick={() => {
              open();
            }}
          >
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UloadPage;
