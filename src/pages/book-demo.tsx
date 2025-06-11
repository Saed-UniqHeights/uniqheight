import { useState } from "react";

type FormData = {
  fullName: string;
  email: string;
  jobTitle: string;
  phoneNumber: string;
  companyName: string;
  message: string;
  hearAboutUs: string;
  skuRange: string;
};

export default function BookDemo() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    jobTitle: "",
    phoneNumber: "",
    companyName: "",
    message: "",
    hearAboutUs: "",
    skuRange: "",
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formEndpoint = "https://getform.io/f/awnwvqeb"; // Replace with your actual URL

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      const response = await fetch(formEndpoint, {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitSuccess(true);
    } catch (err) {
      console.error("Form submission error:", err);
      setError("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  

  if (submitSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Thank You!
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Your demo request has been submitted. Our team will contact you
              shortly.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-24 md:py-40 px-1.5 md:px-8 sm:px-6 lg:px-8">
      <div className="mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            {/* Left side - Content */}
            <div className="md:w-1/2 p-8 md:p-12 bg-blue-600 text-white">
              <span className="text-2xl/6 md:text-5xl/16 font-bold text-center md:text-left">
                Get in Touch with UNIQ Heights
              </span>

              <p className="text-xl mb-6 text-center md:text-left mt-4">
                Get full access to all features for 14-days
              </p>
              <p className="mb-8 text-xl text-center md:text-left">
                Questions about how we can help your Amazon business? Our team
                is ready to assist.
              </p>
              <img src="/assets/book_demo_illustration.png" alt="" />
            </div>

            {/* Right side - Form */}
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-2xl font-semibold mb-2 text-center md:text-left">
                Contact our team
              </h2>
              {error && (
                <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                  {error}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Work Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="jobTitle"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Job Title*
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Company Name*
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="skuRange"
                    className="block text-sm font-medium text-gray-700"
                  >
                    SKU Range*
                  </label>
                  <select
                    id="skuRange"
                    name="skuRange"
                    value={formData.skuRange}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select SKU Range</option>
                    <option value="1-3">1-3</option>
                    <option value="3-5">3-5</option>
                    <option value="5-10">5-10</option>
                    <option value="10-20">10-20</option>
                    <option value="20-50">20-50</option>
                    <option value="50-100">50-100</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="hearAboutUs"
                    className="block text-sm font-medium text-gray-700"
                  >
                    How did you hear about us?
                  </label>
                  <input
                    type="text"
                    id="hearAboutUs"
                    name="hearAboutUs"
                    value={formData.hearAboutUs}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="_gotcha"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Request a Demo"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
