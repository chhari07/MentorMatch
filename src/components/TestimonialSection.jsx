import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, Tech Corp",
      testimonial: "This platform has revolutionized the way we connect with our mentors. The guidance I've received has been invaluable in scaling our business.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Jane Smith",
      role: "Marketing Director, Brandify",
      testimonial: "The mentoring sessions have provided me with the tools I need to grow professionally. I highly recommend this service to anyone looking for guidance.",
      image: "https://randomuser.me/api/portraits/women/21.jpg",
    },
    {
      name: "Alex Johnson",
      role: "Entrepreneur",
      testimonial: "A life-changing experience. The mentorship helped me gain clarity and direction for my startup. I couldn't be more grateful!",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8 text-white">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-black text-white p-6 rounded-lg shadow-lg w-80 border-4 border-teal-500">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-sm">{testimonial.role}</p>
              <p className="mt-4">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
