"use client";
import Image from "next/image";
import { useState } from "react";

export default function ProductImageContainer({ images }) {
  const [thumbnail, setThumbnail] = useState(images[0]);

  return (
    <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
      <Image
        className="mx-auto object-cover h-[400px] w-[500px]"
        src={thumbnail}
        height={400}
        width={500}
        alt="Product image thumbnail"
      />

      <div className="flex gap-4 mt-4">
        {images.map((image, idx) => (
          <Image
            onClick={() => setThumbnail(image)}
            key={idx}
            height={100}
            width={100}
            src={image}
            className="mx-auto border object-cover h-[100px] w-[100px]"
            alt={`Product Image-${idx}`}
          />
        ))}
      </div>
    </div>
  );
}
