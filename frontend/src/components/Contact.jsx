import React from "react"

const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Contact Us</h2>
        <p className="text-gray-600 text-center mb-10">
          Have questions or need support? Fill out the form below, and our team will get back to you shortly.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary outline-none"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary outline-none"
              required
            />
          </div>

          {/* Subject */}
          <div className="md:col-span-2 flex flex-col">
            <label className="text-gray-700 mb-2">Subject</label>
            <input
              type="text"
              placeholder="Enter subject"
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2 flex flex-col">
            <label className="text-gray-700 mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message"
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary outline-none"
              required
            ></textarea>
          </div>

          {/* Button */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary-dark transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
