export default function NowDays() {
  return (
    <div className="md:pt-8 pb-8 container px-4 sm:px-8 lg:px-16">
      <div className="hidden md:block">
        <div className="text-3xl pb-8">
          <h1 className="font-normal">Alssa Corp</h1>
          <h1 className="font-black">Nowdays</h1>
        </div>
        <div className="flex flex-col gap-4 text-[#253961]">
          <p>
            In the face of unprecedented challenges brought on by the global
            pandemic, Alssa Corp stood strong and adapted swiftly to ensure
            business continuity and support our valued customers. Through a
            combination of resilience, innovation, and unwavering commitment, we
            not only survived but thrived during these uncertain times.
          </p>
          <p>
            Understanding the unique challenges faced by businesses during this
            era, Alssa Corp swiftly pivoted to develop and enhance
            customer-centric solutions. We closely engaged with our clients,
            identifying their evolving needs and rapidly implementing tailored
            software solutions to address remote collaboration, workflow
            optimization, and data security challenges. By prioritizing customer
            success, we ensured our clients could adapt and thrive in the face
            of adversity.
          </p>
        </div>
      </div>
      <div className="grid grid-cols md:grid-cols-2 md:pt-8 gap-8 text-center md:text-start">
        <ValueItem
          goal="Goals"
          description="Ensure customer satisfaction by consistently providing the best solutions that meet their needs and exceed their expectations."
        />
        <ValueItem
          goal="Values"
          description="Strive for excellence in all aspects of our business, aiming for the highest quality and performance to fulfill customer satisfactions"
        />
      </div>
    </div>
  );
}

interface ValueItemProps {
  goal: string;
  description: string;
}

function ValueItem({ goal, description }: ValueItemProps) {
  return (
    <div>
      <div className="font-bold text-2xl text-[#1F2839] md:text-[#B69D74] mb-4">
        {goal}
      </div>
      <div className="text-[#253961]">{description}</div>
    </div>
  );
}
