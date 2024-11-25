import PriceOption from "./PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      features: [
        "Access to gym equipment",
        "Locker facility",
        "Open during standard hours",
      ],
      price: 20.99,
    },
    {
      id: 2,
      name: "Premium Membership",
      features: [
        "Access to gym equipment",
        "Locker facility",
        "Extended hours access",
        "Group classes",
        "Personal trainer session (2 per month)",
      ],
      price: 49.99,
    },
    {
      id: 3,
      name: "Elite Membership",
      features: [
        "Access to gym equipment",
        "Locker facility",
        "24/7 access",
        "Unlimited group classes",
        "Weekly personal trainer sessions",
        "Spa and sauna access",
      ],
      price: 99.99,
    },
  ];

  return (
    <div>
      <h1 className="text-4xl my-4">Price Option: {priceOptions.length}</h1>
      <div className="grid grid-cols-3 gap-4">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option} />
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
