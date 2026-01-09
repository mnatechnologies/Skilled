"use client";

import { useState, FormEvent } from "react";
import { Check } from "lucide-react";

export function CallbackForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Lead qualification scoring (for internal use)
    const leadScore = calculateLeadScore(data);

    console.log("Form submitted:", {
      ...data,
      leadQuality: leadScore.quality,
      leadScore: leadScore.score,
      qualificationNotes: leadScore.notes,
    });

    // Here you would send this data to your API/CRM
    setSubmitted(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  // Lead scoring logic (adjust weights based on your priorities)
  const calculateLeadScore = (data: any) => {
    let score = 0;
    const notes = [];

    // NDIS Plan Status (30 points)
    if (data["ndis-status"] === "yes-plan") {
      score += 30;
      notes.push("Active NDIS participant");
    } else if (data["ndis-status"] === "approved-no-plan") {
      score += 25;
      notes.push("NDIS approved, needs plan");
    } else if (data["ndis-status"] === "applying") {
      score += 15;
      notes.push("Currently applying");
    } else if (data["ndis-status"] === "not-yet") {
      score += 5;
      notes.push("Not yet applied");
    }

    // Support Type (25 points)
    if (data["support-type"] === "support-coordination") {
      score += 25;
      notes.push("Specifically wants support coordination");
    } else if (data["support-type"] === "specialist-coordination") {
      score += 25;
      notes.push("High-value specialist coordination need");
    } else if (data["support-type"] === "plan-management") {
      score += 20;
      notes.push("Plan management interest");
    } else if (data["support-type"] === "not-sure") {
      score += 10;
      notes.push("Needs guidance on services");
    }

    // Previous Coordinator (20 points)
    if (data["previous-coordinator"] === "yes-switching") {
      score += 20;
      notes.push("Looking to switch - likely experienced participant");
    } else if (data["previous-coordinator"] === "no") {
      score += 15;
      notes.push("First-time coordination client");
    }

    // Urgency/Challenge (15 points)
    if (data["current-challenge"] === "urgent") {
      score += 15;
      notes.push("Urgent need - high priority");
    } else if (data["current-challenge"] === "soon") {
      score += 10;
      notes.push("Starting soon");
    } else if (data["current-challenge"] === "planning") {
      score += 5;
      notes.push("Planning ahead");
    }

    // Preferred time provided (10 points) - shows engagement
    if (data["preferred-time"]) {
      score += 10;
      notes.push("Provided preferred contact time");
    }

    // Location provided (optional but helpful)
    if (data.location) {
      notes.push(`Location: ${data.location}`);
    }

    // Determine lead quality
    let quality = "Low";
    if (score >= 70) quality = "High";
    else if (score >= 50) quality = "Medium";

    return { score, quality, notes };
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info Side */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg mb-8 opacity-90">
              Request a call back and one of our experienced Support Coordinators will contact you within 24 hours to discuss your needs.
            </p>

            <ul className="space-y-4">
              {[
                "Free initial consultation",
                "No obligation discussion",
                "Expert advice and guidance",
                "Australia wide service",
              ].map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Check className="text-teal-900" size={16} />
                  </div>
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-lg p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="text-white" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-teal-900 mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600">
                  We'll contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-orange-500 focus:outline-none text-gray-900 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-orange-500 focus:outline-none text-gray-900 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-orange-500 focus:outline-none text-gray-900 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="City or postcode"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-orange-500 focus:outline-none text-gray-900 transition-colors"
                  />
                </div>

                {/* Qualifying Questions - Feel helpful, not salesy */}
                <div className="pt-2 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-4">Help us understand how we can best support you:</p>

                  <div className="mb-5">
                    <label htmlFor="ndis-status" className="block text-sm font-semibold text-gray-700 mb-2">
                      Do you currently have an NDIS plan? *
                    </label>
                    <select
                      id="ndis-status"
                      name="ndis-status"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-orange-500 focus:outline-none text-gray-900 transition-colors"
                    >
                      <option value="">Please select</option>
                      <option value="yes-plan">Yes, I have an active NDIS plan</option>
                      <option value="approved-no-plan">I'm approved but need help creating my plan</option>
                      <option value="applying">I'm currently applying for NDIS</option>
                      <option value="not-yet">Not yet, I'm exploring my options</option>
                    </select>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="support-type" className="block text-sm font-semibold text-gray-700 mb-2">
                      What type of support are you looking for? *
                    </label>
                    <select
                      id="support-type"
                      name="support-type"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-orange-500 focus:outline-none text-gray-900 transition-colors"
                    >
                      <option value="">Please select</option>
                      <option value="support-coordination">Support Coordination</option>
                      <option value="specialist-coordination">Specialist Support Coordination</option>
                      <option value="plan-management">Plan Management</option>
                      <option value="not-sure">I'm not sure yet - need guidance</option>
                    </select>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="previous-coordinator" className="block text-sm font-semibold text-gray-700 mb-2">
                      Have you worked with a Support Coordinator before?
                    </label>
                    <select
                      id="previous-coordinator"
                      name="previous-coordinator"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-orange-500 focus:outline-none text-gray-900 transition-colors"
                    >
                      <option value="">Please select</option>
                      <option value="no">No, this is my first time</option>
                      <option value="yes-switching">Yes, I'm looking to switch coordinators</option>
                      <option value="yes-additional">Yes, but I need additional support</option>
                    </select>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="current-challenge" className="block text-sm font-semibold text-gray-700 mb-2">
                      When are you looking to get started?
                    </label>
                    <select
                      id="current-challenge"
                      name="current-challenge"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-orange-500 focus:outline-none text-gray-900 transition-colors"
                    >
                      <option value="">Please select</option>
                      <option value="urgent">As soon as possible</option>
                      <option value="soon">Within the next few weeks</option>
                      <option value="planning">Just planning ahead for now</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tell us a bit more about your situation (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Any additional information that would help us assist you better..."
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-orange-500 focus:outline-none text-gray-900 transition-colors resize-none"
                  />
                </div>

                <div>
                  <label htmlFor="preferred-time" className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Call Time
                  </label>
                  <select
                    id="preferred-time"
                    name="preferred-time"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-md focus:border-orange-500 focus:outline-none text-gray-900 transition-colors"
                  >
                    <option value="">Select a time</option>
                    <option value="morning">Morning (9am - 12pm)</option>
                    <option value="afternoon">Afternoon (12pm - 5pm)</option>
                    <option value="evening">Evening (5pm - 7pm)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-orange-600 transition-all hover:scale-105 shadow-lg"
                >
                  Request Call Back
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
