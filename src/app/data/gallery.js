const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const GalleryData = [
  {
    id: 1,
    src: "/gallery/Images/gallery-1.webp",
    width: 750,
    height: 656,
    title: "Office Cleaning",
  },
  {
    id: 2,
    src: "/gallery/Images/gallery-2.webp",
    width: 576,
    height: 768,
    title: "Office Cleaning",
  },
  {
    id: 3,
    src: "/gallery/Images/gallery-3.webp",
    width: 576,
    height: 768,
    title: "Office Cleaning",
  },
  {
    id: 4,
    src: "/gallery/Images/gallery-4.webp",
    width: 576,
    height: 768,
    title: "Office Cleaning",
  },
  {
    id: 5,
    src: "/gallery/Images/gallery-5.webp",
    width: 760,
    height: 570,
    title: "Office Cleaning",
  },
  {
    id: 6,
    src: "/gallery/Images/gallery-6.webp",
    width: 576,
    height: 768,
    title: "Office Cleaning",
  },
  {
    id: 7,
    src: "/gallery/Images/gallery-7.webp",
    width: 576,
    height: 768,
    title: "Office Cleaning",
  },
  {
    id: 8,
    src: "/gallery/Images/gallery-8.webp",
    width: 576,
    height: 768,
    title: "Office Cleaning",
  },
  {
    id: 9,
    src: "/gallery/Images/gallery-9.webp",
    width: 760,
    height: 570,
    title: "Office Cleaning",
  },
  {
    id: 10,
    src: "/gallery/Images/gallery-10.webp",
    width: 576,
    height: 768,
    title: "Office Cleaning",
  },
  {
    id: 11,
    src: "/gallery/Images/gallery-11.webp",
    width: 1024,
    height: 768,
    title: "Office Cleaning",
  },
  {
    id: 12,
    src: "/gallery/Images/gallery-12.webp",
    width: 760,
    height: 570,
    title: "Office Cleaning",
  },
  {
    id: 13,
    src: "/gallery/Images/gallery-13.webp",
    width: 576,
    height: 768,
    title: "Office Cleaning",
  },
  {
    id: 14,
    src: "/gallery/Images/gallery-14.webp",
    width: 760,
    height: 570,
    title: "Office Cleaning",
  },
  {
    id: 15,
    src: "/gallery/Images/gallery-15.webp",
    width: 760,
    height: 570,
    title: "Office Cleaning",
  },
  {
    id: 16,
    src: "/gallery/Images/gallery-16.webp",
    width: 760,
    height: 570,
    title: "Office Cleaning",
  },
  {
    id: 17,
    src: "/gallery/Images/gallery-17.webp",
    width: 760,
    height: 570,
    title: "Office Cleaning",
  },
];

const photos = GalleryData.map((photo) => {
  const width = breakpoints[0];
  const height = (photo.height / photo.width) * width;
  const title = photo.title;
  return {
    src: photo.src,
    width,
    title,
    height,
    srcSet: breakpoints.map((breakpoint) => {
      const height = Math.round((photo.height / photo.width) * breakpoint);
      return {
        src: photo.src,
        title: photo.title,
        width: breakpoint,
        height,
      };
    }),
  };
});

export default photos;
