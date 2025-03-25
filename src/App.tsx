import React from 'react';
import { Clock, MapPin, Phone, Wine, Salad, Coffee } from 'lucide-react';

const hours = [
  { day: 'Monday', hours: '9 AM–11 PM' },
  { day: 'Tuesday', hours: '9 AM–11 PM' },
  { day: 'Wednesday', hours: '9 AM–11 PM' },
  { day: 'Thursday', hours: '9 AM–11 PM' },
  { day: 'Friday', hours: '9 AM–11 PM' },
  { day: 'Saturday', hours: '9 AM–11 PM' },
  { day: 'Sunday', hours: '9 AM–11 PM' },
];

const features = [
  { icon: Wine, text: 'Great cocktails' },
  { icon: Coffee, text: 'Happy-hour food' },
  { icon: Salad, text: 'Vegan dishes' },
];

// Static image gallery
const images = [
  "https://lh3.googleusercontent.com/p/AF1QipO3QXhoA36wnwS7PfcXn2758TYOp9wJxDUzf6UV=s1360-w1360-h1020",
];

function App() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="h-screen bg-cover bg-center relative transition-all duration-1000"
        style={{
          backgroundImage: `url("${images[currentImageIndex]}")`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Tom Yum Goong</h1>
            <p className="text-xl md:text-2xl">Authentic Thai Cuisine</p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center justify-center space-x-4 p-6 bg-white rounded-lg shadow-md">
                <feature.icon className="w-8 h-8 text-red-600" />
                <span className="text-lg font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Customer Reviews</h2>
          <div className="elfsight-app-e742d8ae-042f-4ec7-ad5e-734556051325" data-elfsight-app-lazy></div>
        </div>
      </div>

      {/* Hours & Contact */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Hours */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center space-x-2 mb-6">
                <Clock className="w-6 h-6 text-red-600" />
                <h2 className="text-2xl font-bold">Opening Hours</h2>
              </div>
              <div className="space-y-2">
                {hours.map((day, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="font-medium">{day.day}</span>
                    <span>{day.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact & Location */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <MapPin className="w-6 h-6 text-red-600" />
                    <h2 className="text-2xl font-bold">Location</h2>
                  </div>
                  <p className="text-gray-600">
                    4/17 Moo 2 Lam Kaen, Thai Mueang District, Phang Nga 82210
                  </p>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Phone className="w-6 h-6 text-red-600" />
                    <h2 className="text-2xl font-bold">Contact</h2>
                  </div>
                  <p className="text-gray-600">080 532 2059</p>
                </div>
                <div className="mt-6">
                  <a 
                    href="https://maps.google.com/?q=Tom+Yum+Goong+4/17+Moo+2+Lam+Kaen+Thai+Mueang+District+Phang+Nga+82210" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block w-full"
                  >
                    <img 
                      src="https://maps.googleapis.com/maps/api/staticmap?center=8.4473889,98.2761493&zoom=15&size=600x300&maptype=roadmap&markers=color:red%7C8.4473889,98.2761493&key=FREE_KEY"
                      alt="Restaurant location"
                      className="w-full h-[300px] object-cover rounded-lg"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;