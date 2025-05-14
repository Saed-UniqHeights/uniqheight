import { useState } from "react";
import axios from "axios";

type FormData = {
  firstName: string;
  lastName: string;
  workEmail: string;
  phoneNumber: string;
  skuCount: string;
  companyName: string;
  message: string;
  hearAboutUs: string;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function BookDemo() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    workEmail: "",
    phoneNumber: "",
    skuCount: "1-5 SKUs",
    companyName: "",
    message: "",
    hearAboutUs: "",
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = "Work email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.workEmail)) {
      newErrors.workEmail = "Please enter a valid email";
    }
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.consent) newErrors.consent = "You must consent to continue";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Replace with your actual API endpoint or email service
      await axios.post("https://your-api-endpoint.com/contact", formData);
      setSubmitSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        workEmail: "",
        phoneNumber: "",
        skuCount: "1-5 SKUs",
        companyName: "",
        message: "",
        hearAboutUs: "",
        consent: false,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your form. Please try again.");
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
              Your message has been sent successfully. Our team will get back to
              you soon.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-white max-w-[1400px] mt-10 rounded-lg shadow-xl mx-auto px-4 flex min-h-screen flex-col justify-center mb-10">
        <div className="flex flex-col pt-20 md:pt-24 relative overflow-hidden">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl bg-gradient-to-r from-blue-700 via-blue-400 to-blue-900 bg-clip-text inline-block text-transparent font-bold mb-4">
              GET IN TOUCH WITH
            </h1>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-900 bg-clip-text text-transparent mb-6">
              UNIQ HEIGHTS
            </h2>
            <p className="text-xl text-gray-600">
              Questions About How We Can Help Your Amazon Business? Our Team Is
              Ready To Assist.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 shadow-lg">
            {/* Form Section */}
            <div className="w-full md:w-1/2  items-center justify-center hidden md:flex md:">
              <div className="bg-transparent p-2  rounded-lg h-full w-full flex items-center justify-center">
                <img
                  src="/assets/book_demo_illustration2.png"
                  alt=""
                  className="-mt-44  lg:scale-100 ml-6  "
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 bg-white rounded-lg  p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Contact Our Team
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                        errors.firstName ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                        errors.lastName ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="workEmail"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="workEmail"
                    name="workEmail"
                    value={formData.workEmail}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                      errors.workEmail ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.workEmail && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.workEmail}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                      errors.phoneNumber ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.phoneNumber && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="skuCount"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Number Of Amazon SKUs
                  </label>
                  <select
                    id="skuCount"
                    name="skuCount"
                    value={formData.skuCount}
                    onChange={handleChange}
                    className="w-full px-2 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="1-5 SKUs">1-5 SKUs</option>
                    <option value="6-10 SKUs">6-10 SKUs</option>
                    <option value="11-20 SKUs">11-20 SKUs</option>
                    <option value="20+ SKUs">20+ SKUs</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="hearAboutUs"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    How Did You Hear About Us?
                  </label>
                  <input
                    type="text"
                    id="hearAboutUs"
                    name="hearAboutUs"
                    value={formData.hearAboutUs}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="consent"
                      className={`font-medium ${
                        errors.consent ? "text-red-600" : "text-gray-700"
                      }`}
                    >
                      By Checking This Box, You Consent To Receive Marketing
                      Communications Related To UNIQ Heights Products, Services
                      Or Events
                    </label>
                    <p className="text-gray-500">
                      Your Data Will Be Used By UNIQ Heights To Contact You With
                      Information Related To Your Request, And If Applicable, To
                      Marketing. For More Information, Read Our Privacy Policy
                    </p>
                    {errors.consent && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.consent}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-400  hover:bg-indigo-700 `  disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
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
