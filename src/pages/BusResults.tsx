import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/context/AuthContext";
import { Navbar } from "@/components/Navbar";

const BusResults = () => {
  const { toast } = useToast();
  const { user } = useAuth();

  const handleBooking = () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to book tickets",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Booking Successful",
      description: "Your bus tickets have been booked!",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Available Buses</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((bus) => (
            <div key={bus} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Bus {bus}</h2>
              <p className="text-gray-600 mb-4">Delhi to Jaipur</p>
              <p className="text-gray-600 mb-4">Departure: 10:00 PM</p>
              <p className="font-bold text-lg mb-4">₹800</p>
              <Button onClick={handleBooking} className="w-full">
                Book Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusResults;