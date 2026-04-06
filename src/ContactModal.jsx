import { useState } from "react";

function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Website Portfolio Inquiry",
    message: "",
    botcheck: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Using Web3Forms for easy email handling
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "40aadf9e-065c-45bb-ae9f-3abbd2cc69ed", 
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "Website Portfolio Inquiry", message: "", botcheck: "" });
        setTimeout(() => onClose(), 2000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in transition-opacity duration-300">
      <div 
        className="bg-white dark:bg-gray-900 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-scale-in transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 sm:p-8">
          <div className="flex justify-between items-center mb-6 animate-slide-in-right">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Get in Touch</h2>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} onChange={handleChange} />
            
            <div className="animate-slide-in-right opacity-0 delay-100 fill-mode-forwards">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all"
              />
            </div>

            <div className="animate-slide-in-right opacity-0 delay-200 fill-mode-forwards">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all"
              />
            </div>

            <div className="animate-slide-in-right opacity-0 delay-300 fill-mode-forwards">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="What's on your mind?"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition-all resize-none"
              ></textarea>
            </div>

            <div className="animate-slide-in-right opacity-0 delay-400 fill-mode-forwards">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg font-semibold text-white transition-all transform active:scale-[0.98] ${
                  isSubmitting 
                    ? "bg-gray-400 cursor-not-allowed" 
                    : "bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-current" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>

            {submitStatus === "success" && (
              <p className="text-center text-green-600 font-medium animate-pulse">Message sent successfully!</p>
            )}
            {submitStatus === "error" && (
              <p className="text-center text-red-600 font-medium">Something went wrong. Please try again.</p>
            )}
          </form>

        </div>
      </div>
    </div>
  );
}

export default ContactModal;
