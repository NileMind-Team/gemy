import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

export default function ForgotPasswordForm({
  email,
  onEmailChange,
  onSubmit,
  onBack,
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-6 max-w-md mx-auto w-full"
    >
      <div className="text-center mb-2">
        <h2 className="text-2xl font-bold text-[#FB7D2D]">
          إعادة تعيين كلمة المرور
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
          أدخل بريدك الإلكتروني لاستلام رمز إعادة التعيين
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="relative group">
          <div className="absolute inset-y-0 right-0 flex items-center justify-center pr-4">
            <FaEnvelope className="text-[#FB7D2D] text-lg transition-all duration-300 group-focus-within:scale-110" />
          </div>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            placeholder="بريدك الإلكتروني المسجل"
            className="w-full border-2 border-gray-300 bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl pr-12 pl-4 py-3.5 outline-none focus:ring-2 focus:ring-[#FB7D2D] focus:border-[#FB7D2D] transition-all duration-200 group-hover:border-[#FB7D2D] text-right"
          />
        </div>

        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={onBack}
            className="flex-1 py-3.5 border-2 border-[#FB7D2D] text-[#FB7D2D] rounded-xl font-semibold hover:bg-[#FB7D2D] hover:text-white transition-all duration-300"
          >
            رجوع
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={!email}
            className={`flex-1 py-3.5 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden border-2 ${
              email
                ? "bg-[#FB7D2D] text-white hover:bg-[#e66a1f] hover:shadow-lg hover:shadow-[#FB7D2D]/25 border-[#FB7D2D]"
                : "bg-gray-300 text-gray-500 cursor-not-allowed border-gray-300"
            }`}
          >
            إرسال رمز إعادة التعيين
            {email && (
              <div className="absolute inset-0 bg-white/20 translate-x-full hover:translate-x-0 transition-transform duration-700"></div>
            )}
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}
