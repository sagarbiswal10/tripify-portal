import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export const DestinationPreview = () => {
  const destinations = [
    {
      name: "Paris, France",
      description: "Experience the city of love with its iconic Eiffel Tower and world-class cuisine",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&h=600&fit=crop",
      videoUrl: "https://www.youtube.com/embed/AQ6GmpMu5L8"
    },
    {
      name: "Bali, Indonesia",
      description: "Discover tropical paradise with beautiful beaches and rich culture",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
      videoUrl: "https://www.youtube.com/embed/2b9txcAt4e0"
    },
    {
      name: "Tokyo, Japan",
      description: "Explore the perfect blend of tradition and modern technology",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop",
      videoUrl: "https://www.youtube.com/embed/cS-hFKC_RKI"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Destinations</h2>
          <p className="text-gray-600">Explore our most visited locations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-64">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium">{destination.name}</span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold">{destination.name}</CardTitle>
                <CardDescription>{destination.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src={destination.videoUrl}
                    title={`${destination.name} preview`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <Button variant="outline" className="w-full hover:bg-blue-50">
                  Explore More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};