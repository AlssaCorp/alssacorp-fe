"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const imageCoverData = [
  {
    title: "Public Trunking",
    imgUrl: "/img/products/public-trucking.jpg",
    categoryUrl: "/public_trunking",
    className:
      "linear-gradient(to bottom, rgba(182, 157, 116, 0.5), rgba(220,216, 209, 0.5))",
    textClassName: "text-[#253961]",
  },
  {
    title: "Radio Link Data Comm SCADA / Telemetry",
    imgUrl: "/img/products/radio-link-data.jpg",
    categoryUrl: "/radio_link",
    className:
      "linear-gradient(to bottom, rgba(31, 40, 50, 0.5), rgba(220,216, 209, 0.5))",
    textClassName: "text-[#FFF]",
  },
  {
    title:
      "Surveillance Security System Sensor Monitoring and Application Software",
    imgUrl: "/img/products/surveillance-city.jpg",
    categoryUrl: "/surveillance",
    className:
      "linear-gradient(to bottom, rgba(31, 40, 50, 0.5), rgba(220,216, 209, 0.5))",
    textClassName: "text-[#FFF]",
  },
  {
    title: "Radio Trunking System",
    imgUrl: "/img/products/radio-trucking-system.jpg",
    categoryUrl: "/radio_trunking",
    className:
      "linear-gradient(to bottom, rgba(182, 157, 116, 0.5), rgba(220,216, 209, 0.5))",
    textClassName: "text-[#253961]",
  },
];

const explanationData = [
  {
    title: "Services Available",
    description:
      "We specialize in offering comprehensive services encompassing design, installation, and maintenance. With our dedicated crew available 24/7, rest assured that we are always on standby to monitor your systems and promptly resolve any issues that may arise. ",
  },
  {
    title: "Other Products and Services Inquiries",
    description:
      "Alssa Corporindo also accepts procurements of other products and services in case clients have specific requirements.",
  },
];

export default function Products() {
  return (
    <div className="bg-[#FFF]">
      <div className="py-8 container px-4 sm:px-8 lg:px-16">
        <div className="text-2xl md:text-3xl pb-8 mt-8">
          <h1 className="font-bold text-[#1F2839] md:text-[#B69D74] md:italic text-center">
            PRODUCTS & SERVICES
          </h1>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 md:gap-0">
        {imageCoverData.map((data, idx) => {
          return (
            <div key={idx} className="px-4 md:px-0">
              <ImageCover
                imgUrl={data.imgUrl}
                categoryUrl={data.categoryUrl}
                title={data.title}
                className={data.className}
                textClassName={data.textClassName}
              />
            </div>
          );
        })}
      </div>
      <div className="py-8 container px-4 sm:px-8 lg:px-16 flex gap-4 flex-col text-[#19253E]">
        {explanationData.map((data, idx) => (
          <div key={idx}>
            <ProductExplanation
              title={data.title}
              description={data.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

interface ImageCoverProps {
  title: string;
  imgUrl: string;
  categoryUrl: string;
  className: string;
  textClassName: string;
}

function ImageCover({
  imgUrl,
  title,
  categoryUrl,
  className,
  textClassName,
}: ImageCoverProps) {
  const route = useRouter();
  return (
    <div
      className="w-full h-full relative cursor-pointer md:rounded-none rounded-lg overflow-hidden"
      onClick={() => {
        route.push(`/products/${categoryUrl}`);
      }}
    >
      <Image
        className="w-full h-full z-[2]"
        src={imgUrl}
        width={2000}
        height={2000}
        alt={title}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: className,
        }}
      />
      <div
        className={`font-bold text-xl absolute top-1/2 -translate-y-1/2 w-full text-center px-4 ${textClassName} z-[3]`}
      >
        {title.toUpperCase()}
      </div>
    </div>
  );
}

interface ExplanationDataProps {
  title: string;
  description: string;
}

function ProductExplanation({ title, description }: ExplanationDataProps) {
  return (
    <div>
      <div className="text-xl font-bold cursor-pointer text-center md:text-start">
        {title}
      </div>
      <p className="text-justify mt-2">{description}</p>
    </div>
  );
}
