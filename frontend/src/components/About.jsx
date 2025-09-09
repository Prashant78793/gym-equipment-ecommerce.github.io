import React from "react"

const About = () => {
  return (
    <section className="bg-gray-100 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            Your trusted partner for premium gym equipment, delivered right to your doorstep.
          </p>
        </div>

        {/* Story / Mission */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            At <span className="font-semibold">GymLion</span>, we believe fitness should be accessible and
            convenient for everyone. That’s why we provide top-quality gym equipment that helps
            you build your dream fitness space at home. No more waiting in long lines at the gym —
            with our products, you can stay consistent, motivated, and focused on your health.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">🚚 Home Delivery</h3>
            <p className="text-gray-600">
              We bring fitness to your doorstep with fast and reliable delivery services.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">🏋️ Premium Quality</h3>
            <p className="text-gray-600">
              Our products are built to last, ensuring durability and performance for your workouts.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">💳 Easy Ordering</h3>
            <p className="text-gray-600">
              A smooth shopping experience with secure checkout and hassle-free ordering process.
            </p>
          </div>
        </div>

        {/* Closing Note */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Join Our Fitness Family</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We’re more than just a store — we’re a community that supports your fitness journey.
            Whether you’re a beginner or a pro athlete, we’ve got the right equipment to help you
            achieve your goals.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
