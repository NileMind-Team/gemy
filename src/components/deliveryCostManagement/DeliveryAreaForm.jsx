import { motion, AnimatePresence } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaTruck,
  FaSave,
  FaTimes,
  FaBuilding,
  FaChevronDown,
} from "react-icons/fa";

export default function DeliveryAreaForm({
  formData,
  setFormData,
  editingId,
  branches,
  formBranchesDropdownOpen,
  setFormBranchesDropdownOpen,
  handleFormBranchSelect,
  handleSubmit,
  resetForm,
  isFormValid,
  getSelectedBranchName,
}) {
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-4 sm:p-5 lg:p-6 border border-gray-300 dark:bg-gray-800/90 dark:border-gray-600 sticky top-4 sm:top-6 transition-colors duration-300">
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200">
          {editingId ? "تعديل المنطقة" : "إضافة منطقة جديدة"}
        </h3>
        <button
          onClick={resetForm}
          className="text-gray-500 hover:text-[#FB7D2D] dark:text-gray-400 dark:hover:text-[#FB7D2D] transition-colors duration-200 flex-shrink-0 ml-2"
        >
          <FaTimes size={16} className="sm:size-5" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        {/* Branch Dropdown */}
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
            الفرع *
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() =>
                setFormBranchesDropdownOpen(!formBranchesDropdownOpen)
              }
              className="w-full flex items-center justify-between border-2 border-gray-300 bg-white rounded-xl px-4 py-3 text-black focus:ring-2 focus:ring-[#FB7D2D] transition-all duration-200 text-sm sm:text-base dark:bg-gray-700 dark:border-gray-600 dark:text-white hover:border-[#FB7D2D]"
            >
              <span className="flex items-center gap-2">
                <FaBuilding className="text-[#FB7D2D]" />
                {getSelectedBranchName()}
              </span>
              <motion.div
                animate={{ rotate: formBranchesDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown className="text-[#FB7D2D]" />
              </motion.div>
            </button>

            <AnimatePresence>
              {formBranchesDropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute z-50 mt-2 w-full bg-white border-2 border-gray-300 shadow-2xl rounded-xl overflow-hidden max-h-48 overflow-y-auto dark:bg-gray-700 dark:border-gray-600"
                >
                  {branches.map((branch) => (
                    <li
                      key={branch.id}
                      onClick={() => handleFormBranchSelect(branch.id)}
                      className="px-4 py-3 hover:bg-orange-50 dark:hover:bg-gray-600 cursor-pointer text-gray-700 transition-all text-sm sm:text-base border-b border-gray-200 last:border-b-0 dark:text-gray-300 dark:border-gray-600 text-right"
                    >
                      {branch.name}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Area Name */}
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
            اسم المنطقة *
          </label>
          <div className="relative group">
            <FaMapMarkerAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#FB7D2D] text-sm transition-all duration-300 group-focus-within:scale-110" />
            <input
              type="text"
              name="areaName"
              value={formData.areaName}
              onChange={handleInputChange}
              required
              className="w-full border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white rounded-lg sm:rounded-xl pr-9 pl-3 py-2.5 sm:py-3 outline-none focus:ring-2 focus:ring-[#FB7D2D] focus:border-[#FB7D2D] transition-all duration-200 text-sm sm:text-base text-right hover:border-[#FB7D2D]"
              placeholder="أدخل اسم المنطقة"
            />
          </div>
        </div>

        {/* Delivery Cost */}
        <div>
          <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
            تكلفة التوصيل (ج.م) *
          </label>
          <div className="relative group">
            <FaMoneyBillWave className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#FB7D2D] text-sm transition-all duration-300 group-focus-within:scale-110" />
            <input
              type="number"
              name="fee"
              value={formData.fee}
              onChange={handleInputChange}
              required
              min="0"
              step="0.01"
              className="w-full border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white rounded-lg sm:rounded-xl pr-9 pl-3 py-2.5 sm:py-3 outline-none focus:ring-2 focus:ring-[#FB7D2D] focus:border-[#FB7D2D] transition-all duration-200 text-sm sm:text-base text-right hover:border-[#FB7D2D]"
              placeholder="0.00"
            />
          </div>
        </div>

        {/* Estimated Time Range */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
              أقل وقت (دقيقة) *
            </label>
            <div className="relative group">
              <FaTruck className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#FB7D2D] text-sm transition-all duration-300 group-focus-within:scale-110" />
              <input
                type="number"
                name="estimatedTimeMin"
                value={formData.estimatedTimeMin}
                onChange={handleInputChange}
                required
                min="0"
                className="w-full border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white rounded-lg sm:rounded-xl pr-9 pl-3 py-2.5 sm:py-3 outline-none focus:ring-2 focus:ring-[#FB7D2D] focus:border-[#FB7D2D] transition-all duration-200 text-sm sm:text-base text-right hover:border-[#FB7D2D]"
                placeholder="أقل"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
              أقصى وقت (دقيقة) *
            </label>
            <div className="relative group">
              <FaTruck className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#FB7D2D] text-sm transition-all duration-300 group-focus-within:scale-110" />
              <input
                type="number"
                name="estimatedTimeMax"
                value={formData.estimatedTimeMax}
                onChange={handleInputChange}
                required
                min="0"
                className="w-full border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white rounded-lg sm:rounded-xl pr-9 pl-3 py-2.5 sm:py-3 outline-none focus:ring-2 focus:ring-[#FB7D2D] focus:border-[#FB7D2D] transition-all duration-200 text-sm sm:text-base text-right hover:border-[#FB7D2D]"
                placeholder="أقصى"
              />
            </div>
          </div>
        </div>

        {/* Active Status */}
        <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-gray-700 rounded-xl border-2 border-gray-300 dark:border-gray-600">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            نشط (متاح للتوصيل)
          </label>
          <input
            type="checkbox"
            name="isActive"
            checked={formData.isActive}
            onChange={handleInputChange}
            className="w-4 h-4 text-[#FB7D2D] bg-white border-2 border-gray-400 rounded focus:ring-[#FB7D2D] focus:ring-2 checked:bg-[#FB7D2D] checked:border-[#FB7D2D]"
          />
        </div>

        <div className="flex gap-2 sm:gap-3 pt-1 sm:pt-2">
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={resetForm}
            className="flex-1 py-2.5 sm:py-3 border-2 border-[#FB7D2D] text-[#FB7D2D] rounded-lg sm:rounded-xl font-semibold hover:bg-[#FB7D2D] hover:text-white transition-all duration-300 text-sm sm:text-base"
          >
            إلغاء
          </motion.button>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={!isFormValid()}
            className={`flex-1 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base flex items-center justify-center gap-1 sm:gap-2 border-2 ${
              isFormValid()
                ? "bg-[#FB7D2D] text-white hover:bg-[#e66a1f] hover:shadow-lg hover:shadow-[#FB7D2D]/25 cursor-pointer border-[#FB7D2D]"
                : "bg-gray-300 text-gray-500 cursor-not-allowed border-gray-300"
            }`}
          >
            <FaSave className="text-xs sm:text-sm" />
            {editingId ? "تحديث" : "حفظ"}
          </motion.button>
        </div>
      </form>
    </div>
  );
}
