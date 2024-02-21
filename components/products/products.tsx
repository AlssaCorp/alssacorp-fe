"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const imageCoverData = [
  {
    url: "/img/products/public-trucking.jpg",
    alt: "public trucking",
    title: "Public Trunking",
    className:
      "linear-gradient(to bottom, rgba(182, 157, 116, 0.5), rgba(220,216, 209, 0.5))",
    textClassName: "text-[#253961]",
  },
  {
    url: "/img/products/radio-link-data.jpg",
    alt: "radio link data comm scada/telementary",
    title: "Radio Link Data Comm SCADA / Telemetry",
    className:
      "linear-gradient(to bottom, rgba(31, 40, 50, 0.5), rgba(220,216, 209, 0.5))",
    textClassName: "text-[#FFF]",
  },
  {
    url: "/img/products/surveillance-city.jpg",
    alt: "surveillance security system sensor monitoring and aplication software",
    title:
      "Surveillance Security System Sensor Monitoring and Application Software",
    className:
      "linear-gradient(to bottom, rgba(31, 40, 50, 0.5), rgba(220,216, 209, 0.5))",
    textClassName: "text-[#FFF]",
  },
  {
    url: "/img/products/radio-trucking-system.jpg",
    alt: "radio trunking system",
    title: "Radio Trunking System",
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
      <div className="py-8 container px-16">
        <div className="text-3xl pb-8 mt-8">
          <h1 className="font-bold text-[#B69D74] italic text-center">
            PRODUCTS & SERVICES
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-0">
        {imageCoverData.map((data, idx) => {
          return (
            <div key={idx}>
              <ImageCover
                url={data.url}
                alt={data.url}
                title={data.title}
                className={data.className}
                textClassName={data.textClassName}
              />
            </div>
          );
        })}
      </div>
      <div className="py-8 container px-16 flex gap-4 flex-col text-[#19253E]">
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
  url: string;
  alt: string;
  title: string;
  className: string;
  textClassName: string;
}

function ImageCover({
  url,
  alt,
  title,
  className,
  textClassName,
}: ImageCoverProps) {
  const route = useRouter();
  return (
    <div
      className="w-full h-full relative cursor-pointer"
      onClick={() => {
        route.push("/products/list");
      }}
    >
      <Image
        className="w-full h-full z-[2]"
        src={url}
        width={2000}
        height={2000}
        alt={alt}
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
      <div className="text-xl font-bold cursor-pointer">{title}</div>
      <p>{description}</p>
    </div>
  );
}
