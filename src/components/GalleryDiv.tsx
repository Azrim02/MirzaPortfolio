import { ReactNode } from "react";

interface GalleryDivProps {
  children: ReactNode[];
  direction?: string;
  galleryItemsAspectRatio: "video" | "square" | "regular";
}

export default function GalleryDiv({
  children,
  direction = "right",
  galleryItemsAspectRatio,
}: GalleryDivProps) {
  // Duplicate children for seamless looping
  const duplicatedChildren = [...children, ...children];

  return (
    <div className="gallery" data-direction={direction}>
      <div className="floating_content" data-images={galleryItemsAspectRatio}>
        {duplicatedChildren}
      </div>
    </div>
  );
}