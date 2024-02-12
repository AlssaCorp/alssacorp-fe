import Image from "next/image";

const imageCoverData = [
  {
    url: "/img/products/public-trucking.jpg",
    alt: "public trucking",
    title: "Public Trunking",
    className: "#B69D74",
    textClassName: "text-[#253961]",
  },
  {
    url: "/img/products/radio-link-data.jpg",
    alt: "radio link data comm scada/telementary",
    title: "Radio Link Data Comm SCADA / Telemetry",
    className: "text-[#FFF]",
    textClassName: "text-[#FFF]",
  },
  {
    url: "/img/products/surveillance-city.jpg",
    alt: "surveillance security system sensor monitoring and aplication software",
    title:
      "Surveillance Security System Sensor Monitoring and Application Software",
    className: "text-[#FFF]",
    textClassName: "text-[#FFF]",
  },
  {
    url: "/img/products/radio-trucking-system.jpg",
    alt: "radio trunking system",
    title: "Radio Trunking System",
    className: "#B69D74",
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
      <div className="py-8 container px-10">
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
      <div className="py-8 container px-10 flex gap-4 flex-col">
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
  return (
    <div className="w-full h-full relative cursor-pointer">
      <Image
        className="w-full h-full"
        src={url}
        width={2000}
        height={2000}
        alt={alt}
      />
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent, ${className})`,
        }}
      />
      <div
        className={`font-bold text-xl absolute top-1/2 -translate-y-1/2 w-full text-center px-4 ${textClassName}`}
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
