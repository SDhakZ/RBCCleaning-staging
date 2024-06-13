"use client";
import React from "react";
import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import NextJsImage from "./nextJSImage";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import photos from "../../../data/gallery";

export default function showcase() {
  const [index, setIndex] = useState(-1);
  return (
    <div className="pb-20 section container-margin">
      <PhotoAlbum
        photos={photos}
        layout="rows"
        targetRowHeight={250}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        slides={photos}
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
