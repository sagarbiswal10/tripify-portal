import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/context/AuthContext";
import { Navbar } from "@/components/Navbar";

const HotelResults = () => {
  const { toast } = useToast();
  const { user } = useAuth();

  const handleBooking = () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to book a room",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Booking Successful",
      description: "Your hotel room has been booked!",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Available Hotels</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((hotel) => (
            <div key={hotel} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Hotel {hotel}</h2>
              <p className="text-gray-600 mb-4">Mumbai Central</p>
              <p className="text-gray-600 mb-4">4.5 ★ Rating</p>
              <p className="font-bold text-lg mb-4">₹2,500/night</p>
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

export default HotelResults;