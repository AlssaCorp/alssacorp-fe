const getImageUrl = (src: string | null | undefined) => {
  if (!src) return "";
  return `${process.env.NEXT_PUBLIC_API_BACKEND_URL}/${src.split("/").slice(3).join("/")}`;
};

export default getImageUrl;
