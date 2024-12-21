import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { percent } from "lucide-react";

export const Offers = () => {
  const offers = [
    {
      title: "Early Bird Special",
      description: "Book 60 days in advance and get 25% off on international flights",
      discount: "25% OFF"
    },
    {
      title: "Weekend Getaway",
      description: "Special hotel rates for weekend stays. Limited time offer!",
      discount: "15% OFF"
    },
    {
      title: "Family Package",
      description: "Special discounts for family bookings of 4 or more",
      discount: "20% OFF"
    }
  ];

  return (
    <section id="offers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Special Offers</h2>
          <p className="text-gray-600">Grab these amazing deals before they're gone!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl font-bold">{offer.title}</CardTitle>
                  <span className="text-blue-600 font-bold flex items-center gap-1">
                    <percent size={20} />
                    {offer.discount}
                  </span>
                </div>
                <CardDescription>{offer.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <button className="text-blue-600 hover:text-blue-700 font-semibold">
                  Learn More →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};