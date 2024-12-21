import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Percent } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Offers = () => {
  const offers = [
    {
      title: "Early Bird Special",
      description: "Book 60 days in advance and get 25% off on international flights",
      discount: "25% OFF",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop"
    },
    {
      title: "Weekend Getaway",
      description: "Special hotel rates for weekend stays. Limited time offer!",
      discount: "15% OFF",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop"
    },
    {
      title: "Family Package",
      description: "Special discounts for family bookings of 4 or more",
      discount: "20% OFF",
      image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=800&h=600&fit=crop"
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
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64">
                <img 
                  src={offer.image} 
                  alt={offer.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full flex items-center gap-1">
                  <Percent className="h-4 w-4" />
                  {offer.discount}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold">{offer.title}</CardTitle>
                <CardDescription>{offer.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full hover:bg-blue-50">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};