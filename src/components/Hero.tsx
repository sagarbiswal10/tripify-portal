import { Plane, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Hero = () => {
  const [searchType, setSearchType] = useState<'flights' | 'hotels' | 'cars'>('flights');

  return (
    <div className="pt-16 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Journey Begins Here
          </h1>
          <p className="text-xl mb-8">
            Find and book your perfect trip with amazing deals
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-6 max-w-4xl mx-auto">
          <div className="flex gap-4 mb-6">
            <Button
              variant={searchType === 'flights' ? 'default' : 'outline'}
              onClick={() => setSearchType('flights')}
              className="flex items-center gap-2"
            >
              <Plane className="h-4 w-4" />
              Flights
            </Button>
            <Button
              variant={searchType === 'hotels' ? 'default' : 'outline'}
              onClick={() => setSearchType('hotels')}
              className="flex items-center gap-2"
            >
              <MapPin className="h-4 w-4" />
              Hotels
            </Button>
            <Button
              variant={searchType === 'cars' ? 'default' : 'outline'}
              onClick={() => setSearchType('cars')}
              className="flex items-center gap-2"
            >
              <Calendar className="h-4 w-4" />
              Cars
            </Button>
          </div>

          {searchType === 'flights' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-1">From</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select departure city" />
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

              <div>
                <label className="block text-gray-700 mb-1">Passengers</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select number of passengers" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Passenger</SelectItem>
                    <SelectItem value="2">2 Passengers</SelectItem>
                    <SelectItem value="3">3 Passengers</SelectItem>
                    <SelectItem value="4">4+ Passengers</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};