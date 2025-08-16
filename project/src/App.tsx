import React, { useState } from 'react';
import { MapPin, Star, Users, Building, Home, Gift, ChefHat, Wine, Cake } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://hook.us1.make.com/eo6ejwm81w4kq1n975utqrsgylvfn41r', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          '1.first_name': formData.firstName,
          '1.last_name': formData.lastName,
          '1.email': formData.email,
          '1.phone_number': formData.phoneNumber
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: ''
        });
      } else {
        console.error('Failed to submit form');
        alert('There was an error submitting your information. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your information. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff2ba]/20 to-[#fff2ba]/40">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-[#fff2ba]/20 to-[#fff2ba]/30"></div>
        <div className="relative max-w-6xl mx-auto text-center pt-16">
          {/* Vancouver Made Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full mb-8 border border-gray-200">
            <MapPin className="w-5 h-5 text-gray-700 mr-2" />
            <span className="text-gray-800 font-semibold text-lg">Vancouver Made</span>
          </div>
          
          {/* Logo */}
          <div className="mb-8">
            <div className="relative inline-block">
              <img 
                src="/logo-header.png" 
                alt="Orchard Luxe Logo" 
                className="h-28 md:h-36 mx-auto mix-blend-multiply"
                style={{
                  filter: 'brightness(1.1) contrast(1.05)'
                }}
              />
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight font-fancy">
            <span className="block text-gray-800">Elevate</span>
            <span className="block">Your Cocktail</span>
          </h1>

          {/* Subheader */}
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Premium, Vancouver-made dehydrated fruit for garnishes & more
          </p>

          {/* Hero Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-[#fff2ba]/60 to-[#fff2ba]/80 rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src="/hero-image-1.jpg" 
                  alt="Premium dehydrated citrus garnishes"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling!.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-full h-full flex items-center justify-center text-gray-700">
                  <div className="text-center">
                    <Wine className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-sm">Upload: hero-image-1.jpg</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-[#fff2ba]/60 to-[#fff2ba]/80 rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src="/hero-image-2.jpg" 
                  alt="Cocktail with dehydrated fruit garnish"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling!.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-full h-full flex items-center justify-center text-gray-700">
                  <div className="text-center">
                    <ChefHat className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-sm">Upload: hero-image-2.jpg</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-[#fff2ba]/60 to-[#fff2ba]/80 rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src="/hero-image-3.jpg" 
                  alt="Variety of dehydrated fruit garnishes"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling!.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-full h-full flex items-center justify-center text-gray-700">
                  <div className="text-center">
                    <Cake className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-sm">Upload: hero-image-3.jpg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-12 rounded-3xl shadow-2xl">
            {isSubmitted ? (
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Thank You!
                </h2>
                <p className="text-xl opacity-90">
                  We've received your information and you're now on our exclusive waitlist. 
                  We'll be in touch soon with updates about our premium dehydrated fruit garnishes.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Be the first to try Vancouver's most beautiful cocktail garnishes
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Exclusive benefits for early wait-list members
                </p>
                
                <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                      required
                      disabled={isSubmitting}
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                    required
                    disabled={isSubmitting}
                  />
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                    required
                    disabled={isSubmitting}
                  />
                  <p className="text-sm opacity-75 text-left">
                    We hate spam. Your information is safe with us.
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#fff2ba] text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#fff2ba]/90 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Joining...' : 'Join Our Waitlist'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Perfect for Every Occasion
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From professional bars to home entertaining, our premium dehydrated fruits elevate every experience
            </p>
          </div>

          {/* B2B Use Cases */}
          <div className="mb-20">
            <div className="flex items-center justify-center mb-12">
              <Building className="w-8 h-8 text-gray-700 mr-3" />
              <h3 className="text-3xl font-bold text-gray-900">For Businesses</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-[#fff2ba]/30 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Wine className="w-8 h-8 text-gray-700" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Cocktail Garnishes</h4>
                <p className="text-gray-600 text-center mb-4">Bars & Restaurants</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-[#fff2ba]/30 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <ChefHat className="w-8 h-8 text-gray-700" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Charcuterie Boards</h4>
                <p className="text-gray-600 text-center mb-4">Restaurants & Caterers</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-[#fff2ba]/30 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Cake className="w-8 h-8 text-gray-700" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Dessert Toppings</h4>
                <p className="text-gray-600 text-center mb-4">Cafés, Bakeries, Hotels</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-[#fff2ba]/30 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Building className="w-8 h-8 text-gray-700" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Premium Spirits</h4>
                <p className="text-gray-600 text-center mb-4">Distilleries</p>
              </div>
            </div>
          </div>

          {/* B2C Use Cases */}
          <div>
            <div className="flex items-center justify-center mb-12">
              <Home className="w-8 h-8 text-gray-700 mr-3" />
              <h3 className="text-3xl font-bold text-gray-900">For Home</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-[#fff2ba]/30 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Wine className="w-8 h-8 text-gray-700" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">DIY Cocktail Kits</h4>
                <p className="text-gray-600 text-center mb-4">Home Bar Enthusiasts</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-[#fff2ba]/30 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-gray-700" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Home Entertaining</h4>
                <p className="text-gray-600 text-center mb-4">Dinner Parties & Events</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-[#fff2ba]/30 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Gift className="w-8 h-8 text-gray-700" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Premium Gifting</h4>
                <p className="text-gray-600 text-center mb-4">Special Occasions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/logo-footer.png" 
              alt="Orchard Luxe Logo" 
              className="h-12 mr-1"
            />
            <span className="text-2xl font-bold lowercase">orchard luxe</span>
          </div>
          <p className="text-gray-400 mb-4">
            Premium Vancouver-made dehydrated fruit for the discerning palate
          </p>
          <div className="flex items-center justify-center text-[#fff2ba]">
            <MapPin className="w-4 h-4 mr-2" />
            <span>Proudly made in Vancouver, BC</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
