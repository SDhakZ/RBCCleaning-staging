import Image from "next/image";

export default function NextJsImage({ photo, imageProps, wrapperStyle }) {
  const { alt, title, sizes, className, onClick } = imageProps;
  return (
    <div style={{ ...wrapperStyle, position: "relative" }}>
      <Image
        fill
        src={photo}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        {...{ alt, title, sizes, className, onClick }}
      />
    </div>
  );
}
