import React from "react";
import BredCumbs from "../Shared/BredCumbs";
import FileUploadForm from "./FileUploadForm";

const FileUpload = () => {
  return (
    <>
      <BredCumbs home="Home" page="FileUpload" url="/fileupload"></BredCumbs>
      <div className="flex flex-col text-center  mb-20 mt-20 w-9/12 mx-auto">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Upload Your File to Reach Out
        </h1>
        <p className="leading-relaxed text-base ml-6 mr-6 mx-auto">
        Submitting additional case files to our team is very convenient with our file uploader. Our drag & drop file uploader is an excellent tool to submit photos and other casework.
        </p>
      </div>

      <FileUploadForm></FileUploadForm>
    </>
  );
};

export default FileUpload;
