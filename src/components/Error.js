import React from "react";

export default function Error() {
  return (
    <div className="bg-indigo-900 relative overflow-hidden h-screen">
      &nbsp; &nbsp;{" "}
      <img
        src="https://external-preview.redd.it/4MddL-315mp40uH18BgGL2-5b6NIPHcDMBSWuN11ynM.jpg?width=960&crop=smart&auto=webp&s=b98d54a43b3dac555df398588a2c791e0f3076d9"
        className="absolute h-full w-full object-cover"
      />
      &nbsp; &nbsp;{" "}
      <div className="inset-0 bg-black opacity-25 absolute">&nbsp; &nbsp; </div>
      &nbsp; &nbsp;{" "}
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        &nbsp; &nbsp; &nbsp; &nbsp;{" "}
        <div className="w-full font-mono flex flex-col items-center relative z-10">
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
            &nbsp; You are all alone here &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          </h1>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          <p className="font-extrabold text-8xl my-44 text-white animate-bounce">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 404 &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          </p>
          &nbsp; &nbsp; &nbsp; &nbsp;{" "}
        </div>
        &nbsp; &nbsp;{" "}
      </div>
    </div>
  );
}
