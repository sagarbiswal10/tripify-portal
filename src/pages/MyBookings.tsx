import { useAuth } from "@/context/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";

const MyBookings = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/signin" />;
  }

  // Dummy bookings data
  const bookings = [
    {
      id: 1,
      type: "Flight",
      from: "New York",
      to: "Paris",
      date: "2024-05-15",
      status: "Confirmed"
    },
    {
      id: 2,
      type: "Hotel",
      location: "Tokyo",
      checkIn: "2024-06-20",
      checkOut: "2024-06-25",
      status: "Upcoming"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <h1 className="text-3xl font-bold mb-8">My Bookings</h1>
        <div className="grid gap-6">
          {bookings.map((booking) => (
            <Card key={booking.id}>
              <CardHeader>
                <CardTitle>{booking.type} Booking</CardTitle>
                <CardDescription>Booking ID: {booking.id}</CardDescription>
              </CardHeader>
              <CardContent>
                {booking.type === "Flight" ? (
                  <div className="space-y-2">
                    <p>From: {booking.from}</p>
                    <p>To: {booking.to}</p>
                    <p>Date: {booking.date}</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <p>Location: {booking.location}</p>
                    <p>Check-in: {booking.checkIn}</p>
                    <p>Check-out: {booking.checkOut}</p>
                  </div>
                )}
                <div className="mt-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    booking.status === "Confirmed" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                  }`}>
                    {booking.status}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBookings;