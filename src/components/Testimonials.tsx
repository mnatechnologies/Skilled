import { Star, Quote } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Testimonials() {
  return (
    <section className="py-20 bg-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-gold text-sm font-bold uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-4">
            What Our <span className="text-gradient-gold">Clients Say</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don&apos;t just take our word for it — hear from homeowners and
            builders who trust Skilled Demo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {siteConfig.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-dark-alt border border-gray-700/50 rounded-lg p-8 relative"
            >
              <Quote
                className="text-gold/20 absolute top-6 right-6"
                size={40}
              />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-gold fill-gold"
                  />
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="border-t border-gray-700 pt-4">
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-gold text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
