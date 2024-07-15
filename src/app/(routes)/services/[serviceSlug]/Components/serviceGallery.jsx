"use client";
import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";
import NextJsImage from "@/app/(routes)/gallery/Components/nextJSImage";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function serviceGallery({ pictures, title }) {
  const [index, setIndex] = useState(-1);
  return (
    <div className="container-margin-compact margin-t">
      <h3 className="mb-6 text-2xl font-semibold md:text-3xl lg:text-4xl lg:mb-10 text-black-shade-300">
        Some of our works for{" "}
        <span className="text-primary-shade-200">{title}</span>
      </h3>
      <PhotoAlbum
        photos={pictures}
        layout="rows"
        targetRowHeight={250}
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        slides={pictures}
        open={index >= 0}
        index={index}
        renderPhoto={NextJsImage}
        sizes={{ size: "calc(100vw - 240px)" }}
        thumbnails={{ imageFit: "cover" }}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Thumbnails, Captions, Slideshow, Zoom]}
      />
    </div>
  );
}
