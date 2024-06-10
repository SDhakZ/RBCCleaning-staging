const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const GalleryData = [
  {
    id: 1,
    src: "/gallery/images/gallery-1.jpg",
    width: 750,
    height: 656,
    title: "Office Cleaning",
  },
  {
    id: 2,
    src: "/gallery/images/gallery-2.jpg",
    width: 576,
    height: 768,
    title: "Office Cleaning",
  },
  {
    id: 3,
    src: "/gallery/images/gallery-3.jpg",
    width: 576,
    height: 768,
    title: "Office Cleaning",
  },
  {
    id: 4,
    src: "/gallery/images/gallery-4.jpg",
    width: 576,
    height: 768,
    title: "Office Cleaning",
  },
  {
    id: 5,
    src: "/gallery/images/gallery-5.jpg",
    width: 760,
    height: 570,
    title: "Office Cleaning",
  },
  {
    id: 6,
    src: "/gallery/images/gallery-6.jpg",
    width: 576,
    height: 768,
    title: "Office Cleaning",
  },
  {
    id: 7,
    src: "/gallery/images/gallery-7.jpg",
    width: 576,
    height: 768,
    title: "Office Cleaning",
  },
  {
    id: 8,
    src: "/gallery/images/gallery-8.jpg",
    width: 576,
    height: 768,
    title: "Office Cleaning",
  },
  {
    id: 9,
    src: "/gallery/images/gallery-9.jpg",
    width: 760,
    height: 570,
    title: "Office Cleaning",
  },
  {
    id: 10,
    src: "/gallery/images/gallery-10.jpg",
    width: 576,
    height: 768,
    title: "Office Cleaning",
  },
  {
    id: 11,
    src: "/gallery/images/gallery-11.jpg",
    width: 1024,
    height: 768,
    title: "Office Cleaning",
  },
  {
    id: 12,
    src: "/gallery/images/gallery-12.jpg",
    width: 760,
    height: 570,
    title: "Office Cleaning",
  },
  {
    id: 13,
    src: "/gallery/images/gallery-13.jpg",
    width: 576,
    height: 768,
    title: "Office Cleaning",
  },
  {
    id: 14,
    src: "/gallery/images/gallery-14.jpg",
    width: 760,
    height: 570,
    title: "Office Cleaning",
  },
  {
    id: 15,
    src: "/gallery/images/gallery-15.jpg",
    width: 760,
    height: 570,
    title: "Office Cleaning",
  },
  {
    id: 16,
    src: "/gallery/images/gallery-16.jpg",
    width: 760,
    height: 570,
    title: "Office Cleaning",
  },
  {
    id: 17,
    src: "/gallery/images/gallery-17.jpg",
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
