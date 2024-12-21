import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { toast } from "@/components/ui/use-toast";

const FlightResults = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  // Dummy flights data
  const flights = [
    {
      id: 1,
      airline: "Air France",
      from: "Paris",
      to: "New York",
      departure: "10:00 AM",
      arrival: "2:30 PM",
      price: 599,
      duration: "8h 30m"
    },
    {
      id: 2,
      airline: "Lufthansa",
      from: "Paris",
      to: "New York",
      departure: "2:00 PM",
      arrival: "6:30 PM",
      price: 649,
      duration: "8h 30m"
    }
  ];

  const handleBook = (flightId: number) => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to book flights",
        variant: "destructive",
      });
      navigate('/signin');
      return;
    }
    
    toast({
      title: "Success",
      description: "Flight booked successfully!",
    });
    navigate('/my-bookings');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <h1 className="text-3xl font-bold mb-8">Available Flights</h1>
        <div className="grid gap-6">
          {flights.map((flight) => (
            <Card key={flight.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plane className="h-5 w-5" />
                  {flight.airline}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Departure</p>
                    <p className="font-semibold">{flight.departure}</p>
                    <p className="text-sm">{flight.from}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Arrival</p>
                    <p className="font-semibold">{flight.arrival}</p>
                    <p className="text-sm">{flight.to}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-semibold">{flight.duration}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Price</p>
                      <p className="text-2xl font-bold">${flight.price}</p>
                    </div>
                    <Button onClick={() => handleBook(flight.id)}>
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

export default FlightResults;