import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Hotel, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { toast } from "@/components/ui/use-toast";

const HotelResults = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  // Dummy hotels data
  const hotels = [
    {
      id: 1,
      name: "Grand Hotel Paris",
      location: "Paris City Center",
      rating: 4.5,
      amenities: ["WiFi", "Pool", "Spa"],
      price: 199,
      perNight: true
    },
    {
      id: 2,
      name: "Luxury Suites",
      location: "Champs-Élysées",
      rating: 5,
      amenities: ["WiFi", "Restaurant", "Gym"],
      price: 299,
      perNight: true
    }
  ];

  const handleBook = (hotelId: number) => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to book hotels",
        variant: "destructive",
      });
      navigate('/signin');
      return;
    }
    
    toast({
      title: "Success",
      description: "Hotel booked successfully!",
    });
    navigate('/my-bookings');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <h1 className="text-3xl font-bold mb-8">Available Hotels</h1>
        <div className="grid gap-6">
          {hotels.map((hotel) => (
            <Card key={hotel.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Hotel className="h-5 w-5" />
                  {hotel.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-semibold">{hotel.location}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{hotel.rating}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Amenities</p>
                    <div className="flex gap-2 flex-wrap">
                      {hotel.amenities.map((amenity, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 rounded-full text-sm"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Price</p>
                      <p className="text-2xl font-bold">
                        ${hotel.price}
                        <span className="text-sm text-gray-500">
                          {hotel.perNight ? '/night' : ''}
                        </span>
                      </p>
                    </div>
                    <Button onClick={() => handleBook(hotel.id)}>
                      Book Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelResults;