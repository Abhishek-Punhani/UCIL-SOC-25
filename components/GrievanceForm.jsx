
import { useState } from "react";

export default function GrievanceForm({ t }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    description: "",
    category: "",
    urgency: "",
    evidence: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dummy submission:", formData);
    setSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-emerald-50 dark:bg-gray-900">
        <h2 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 mb-2 text-center">
          ✅ {t?.grievance_submitted || "Grievance Submitted!"}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-center text-sm">
          {t?.grievance_thanks || "We will try to resolve your grievance as soon as possible."}{" "}
          {t?.grievance_id || "Your grievance ID is:"}{" "}
          <span className="text-blue-600 dark:text-blue-400 font-semibold">UCIL-XYZ123</span>
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-xl shadow-xl w-full max-w-xl mx-auto space-y-5 border border-gray-200 dark:border-gray-700"
    >
      <input
        type="text"
        name="name"
        required
        placeholder={t?.form_name || "Full Name"}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800 dark:bg-gray-700 dark:text-white"
      />
      <input
        type="text"
        name="email"
        required
        placeholder={t?.form_email || "Email or Phone"}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800 dark:bg-gray-700 dark:text-white"
      />
      <input
        type="text"
        name="location"
        required
        placeholder={t?.form_location || "Location"}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800 dark:bg-gray-700 dark:text-white"
      />
      <textarea
        name="description"
        required
        placeholder={t?.form_description || "Describe your grievance..."}
        onChange={handleChange}
        className="w-full px-4 py-3 h-32 resize-none border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800 dark:bg-gray-700 dark:text-white"
      />
      <select
        name="category"
        required
        onChange={handleChange}
        className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800 dark:text-white"
      >
        <option value="">{t?.form_category || "Select Category"}</option>
        <option value="health">{t?.cat_health || "Health"}</option>
        <option value="water">{t?.cat_water || "Water"}</option>
        <option value="displacement">{t?.cat_displacement || "Displacement"}</option>
        <option value="harassment">{t?.cat_harassment || "Harassment"}</option>
        <option value="academic">{t?.cat_academic || "Academic"}</option>
      </select>
      <select
        name="urgency"
        required
        onChange={handleChange}
        className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-800 dark:text-white"
      >
        <option value="">{t?.form_urgency || "Select Urgency"}</option>
        <option value="low">{t?.urgency_low || "Low"}</option>
        <option value="moderate">{t?.urgency_moderate || "Moderate"}</option>
        <option value="high">{t?.urgency_high || "High"}</option>
      </select>
      <div>
        <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
          {t?.form_upload || "Upload Evidence (optional)"}
        </label>
        <input
          type="file"
          name="evidence"
          onChange={handleChange}
          className="w-full px-2 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
        />
      </div>
      <button
        type="submit"
        className="bg-indigo-800 hover:bg-indigo-900 text-white font-semibold py-3 px-6 rounded-lg w-full shadow-md transition"
      >
        {t?.form_submit || "Submit Grievance"}
      </button>
    </form>
  );
}
