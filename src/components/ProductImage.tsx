"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const PLACEHOLDER = "/images/product-placeholder.svg";

interface ProductImageProps {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}

export function ProductImage({
  src,
  alt,
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority = false,
  className = "object-cover",
}: ProductImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      className={className}
      sizes={sizes}
      priority={priority}
      onError={() => {
        if (imgSrc !== PLACEHOLDER) setImgSrc(PLACEHOLDER);
      }}
    />
  );
}
