import Image from "next/image";

export default function CeoMessage() {
  return (
    <div className="container py-8 px-16">
      <div className="grid grid-cols-3 gap-12">
        <div>
          <div className="aspect-square">
            <Image
              src="/img/ceo/dian-susanti-photo.png"
              width={400}
              height={400}
              alt="dian susanti"
            />
          </div>
          <div className="w-full text-center mt-4 text-[#253961]">
            <div className="font-bold text-xl">Dian Susanti, SE</div>
            <p className="text-md">President Director</p>
          </div>
        </div>
        <div className="col-span-2 flex justify-center flex-col">
          <div className="mb-4">
            <h1 className="font-bold text-xl">Messages From CEO</h1>
          </div>
          <div className="flex flex-col gap-4 text-[#253961]">
            <p>
              Throughout our journey, we have consistently embraced the power of
              technology and its potential to drive transformative change.
              Building on this foundation, our future plans revolve around
              harnessing emerging technologies to create cutting-edge solutions
              that address the evolving needs of our customers. We will continue
              to invest in research and development, leveraging artificial
              intelligence, data analytics, and cloud computing to empower
              businesses and individuals to thrive in the digital era.
            </p>
            <p>
              Our commitment to providing exceptional customer experiences will
              remain at the forefront of our future plans. We will continue to
              foster strong partnerships and actively engage with our customers
              to better understand their unique challenges and requirements. By
              doing so, we will develop tailored solutions that deliver tangible
              value, helping our customers achieve their goals and driving
              mutual success.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-8 text-[#253961]">
        <p>
          As we journey forward, we are dedicated to sustainability and social
          responsibility. Environmental stewardship will be a key focus, as we
          strive to minimize our carbon footprint and promote eco-friendly
          practices across our operations. Furthermore, we are committed to
          giving back to the communities we serve, supporting initiatives that
          foster education, diversity, and social inclusion. Together, we can
          create a brighter future and make a positive impact on society.
        </p>
        <p>
          In conclusion, I am immensely proud of the achievements and milestones
          we have reached on our journey. I am grateful for the trust and
          support that has fueled our success. As we look ahead, I am confident
          that our continued focus on innovation, customer-centricity, and
          sustainability will position Alssa Corporindo as a leader in our
          industry. Thank you for being part of our story and joining us on this
          exciting path towards a future filled with growth, transformation, and
          shared success.
        </p>
      </div>
    </div>
  );
}
