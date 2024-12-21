import { airplane, calendar, mapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

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
            >
              Flights
            </Button>
            <Button
              variant={searchType === 'hotels' ? 'default' : 'outline'}
              onClick={() => setSearchType('hotels')}
            >
              Hotels
            </Button>
            <Button
              variant={searchType === 'cars' ? 'default' : 'outline'}
              onClick={() => setSearchType('cars')}
            >
              Cars
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              type="text"
              placeholder="From where?"
              className="w-full"
            />
            <Input
              type="text"
              placeholder="To where?"
              className="w-full"
            />
            <Input
              type="date"
              className="w-full"
            />
          </div>

          <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};