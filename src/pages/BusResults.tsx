import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { toast } from "@/components/ui/use-toast";

const BusResults = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  // Dummy buses data
  const buses = [
    {
      id: 1,
      company: "EuroBus",
      from: "Paris",
      to: "Amsterdam",
      departure: "09:00 AM",
      arrival: "4:30 PM",
      price: 45,
      duration: "7h 30m"
    },
    {
      id: 2,
      company: "FlixBus",
      from: "Paris",
      to: "Amsterdam",
      departure: "10:30 AM",
      arrival: "6:00 PM",
      price: 40,
      duration: "7h 30m"
    }
  ];

  const handleBook = (busId: number) => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to book buses",
        variant: "destructive",
      });
      navigate('/signin');
      return;
    }
    
    toast({
      title: "Success",
      description: "Bus booked successfully!",
    });
    navigate('/my-bookings');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <h1 className="text-3xl font-bold mb-8">Available Buses</h1>
        <div className="grid gap-6">
          {buses.map((bus) => (
            <Card key={bus.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bus className="h-5 w-5" />
                  {bus.company}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Departure</p>
                    <p className="font-semibold">{bus.departure}</p>
                    <p className="text-sm">{bus.from}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Arrival</p>
                    <p className="font-semibold">{bus.arrival}</p>
                    <p className="text-sm">{bus.to}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-semibold">{bus.duration}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Price</p>
                      <p className="text-2xl font-bold">${bus.price}</p>
                    </div>
                    <Button onClick={() => handleBook(bus.id)}>
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

export default BusResults;