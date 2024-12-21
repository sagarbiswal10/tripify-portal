import { Plane, Train, Bus, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

const backgroundImages = [
  "https://images.unsplash.com/photo-1500673922987-e212871fec22",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b",
  "https://images.unsplash.com/photo-1472396961693-142e6e269027",
  "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
];

export const Hero = () => {
  const [searchType, setSearchType] = useState<'flights' | 'trains' | 'buses' | 'hotels'>('flights');
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/${searchType}/search`);
  };

  return (
    <div 
      className="pt-16 min-h-screen bg-cover bg-center transition-all duration-1000"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImages[currentBgIndex]})` 
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Your Journey Begins Here
          </h1>
          <p className="text-xl mb-8 text-white">
            Find and book your perfect trip with amazing deals
          </p>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-6 max-w-4xl mx-auto">
          <form onSubmit={handleSearch}>
            <div className="flex gap-4 mb-6 overflow-x-auto">
              <Button
                variant={searchType === 'flights' ? 'default' : 'outline'}
                onClick={() => setSearchType('flights')}
                className="flex items-center gap-2 whitespace-nowrap"
              >
                <Plane className="h-4 w-4" />
                Flights
              </Button>
              <Button
                variant={searchType === 'trains' ? 'default' : 'outline'}
                onClick={() => setSearchType('trains')}
                className="flex items-center gap-2 whitespace-nowrap"
              >
                <Train className="h-4 w-4" />
                Trains
              </Button>
              <Button
                variant={searchType === 'buses' ? 'default' : 'outline'}
                onClick={() => setSearchType('buses')}
                className="flex items-center gap-2 whitespace-nowrap"
              >
                <Bus className="h-4 w-4" />
                Buses
              </Button>
              <Button
                variant={searchType === 'hotels' ? 'default' : 'outline'}
                onClick={() => setSearchType('hotels')}
                className="flex items-center gap-2 whitespace-nowrap"
              >
                <Building className="h-4 w-4" />
                Hotels
              </Button>
            </div>

            <div className="space-y-4">
              {searchType !== 'hotels' ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-1">From</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder={`Select departure ${searchType === 'flights' ? 'city' : 'station'}`} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="delhi">New Delhi</SelectItem>
                          <SelectItem value="mumbai">Mumbai</SelectItem>
                          <SelectItem value="bangalore">Bangalore</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">To</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select destination" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="paris">Paris</SelectItem>
                          <SelectItem value="newyork">New York</SelectItem>
                          <SelectItem value="tokyo">Tokyo</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-1">Departure Date</label>
                      <Input type="date" className="w-full" />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">Return Date</label>
                      <Input type="date" className="w-full" />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-gray-700 mb-1">Destination</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select destination" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="paris">Paris</SelectItem>
                        <SelectItem value="newyork">New York</SelectItem>
                        <SelectItem value="tokyo">Tokyo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-1">Check-in Date</label>
                      <Input type="date" className="w-full" />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-1">Check-out Date</label>
                      <Input type="date" className="w-full" />
                    </div>
                  </div>
                </>
              )}

              <div>
                <label className="block text-gray-700 mb-1">
                  {searchType === 'hotels' ? 'Guests' : 'Passengers'}
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder={`Select number of ${searchType === 'hotels' ? 'guests' : 'passengers'}`} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Person</SelectItem>
                    <SelectItem value="2">2 People</SelectItem>
                    <SelectItem value="3">3 People</SelectItem>
                    <SelectItem value="4">4+ People</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button type="submit" className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
              Search
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
