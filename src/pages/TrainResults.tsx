import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Train } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { toast } from "@/components/ui/use-toast";

const TrainResults = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  // Dummy trains data
  const trains = [
    {
      id: 1,
      name: "Express Train",
      from: "Paris",
      to: "Lyon",
      departure: "08:00 AM",
      arrival: "11:30 AM",
      price: 89,
      duration: "3h 30m"
    },
    {
      id: 2,
      name: "TGV",
      from: "Paris",
      to: "Lyon",
      departure: "10:00 AM",
      arrival: "1:30 PM",
      price: 120,
      duration: "3h 30m"
    }
  ];

  const handleBook = (trainId: number) => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to book trains",
        variant: "destructive",
      });
      navigate('/signin');
      return;
    }
    
    toast({
      title: "Success",
      description: "Train booked successfully!",
    });
    navigate('/my-bookings');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <h1 className="text-3xl font-bold mb-8">Available Trains</h1>
        <div className="grid gap-6">
          {trains.map((train) => (
            <Card key={train.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Train className="h-5 w-5" />
                  {train.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Departure</p>
                    <p className="font-semibold">{train.departure}</p>
                    <p className="text-sm">{train.from}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Arrival</p>
                    <p className="font-semibold">{train.arrival}</p>
                    <p className="text-sm">{train.to}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-semibold">{train.duration}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Price</p>
                      <p className="text-2xl font-bold">${train.price}</p>
                    </div>
                    <Button onClick={() => handleBook(train.id)}>
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

export default TrainResults;