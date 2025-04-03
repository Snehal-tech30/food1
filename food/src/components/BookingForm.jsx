import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { toast } from "react-hot-toast";

const BookingForm = ({ foodId, foodName, price, onClose, onSubmit }) => {
  const parsePrice = (inputPrice) => {
    if (!inputPrice) return 0;
    if (typeof inputPrice === "string") {
      const cleaned = inputPrice.replace(/[^\d.]/g, "");
      return parseFloat(cleaned) || 0;
    }
    return Number(inputPrice) || 0;
  };

  const safePrice = parsePrice(price);
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
    address: "",
    quantity: "1",
    paymentScreenshot: null,
  });

  const [totalCost, setTotalCost] = useState(safePrice);

  useEffect(() => {
    const quantity = parseInt(formData.quantity) || 1;
    setTotalCost(quantity * safePrice);
  }, [formData.quantity, safePrice]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, paymentScreenshot: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.phone || !formData.customerName || !formData.address) {
      toast.error("Please fill all required fields.");
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      toast.error("Phone number must be exactly 10 digits.");
      return;
    }

    if (!formData.paymentScreenshot) {
      toast.error("Please upload a payment screenshot.");
      return;
    }

    onSubmit({ ...formData, totalCost });

    toast.success("Order placed successfully!");
  };

  const formatCurrency = (value) => `₹${value.toLocaleString()}`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full relative max-h-[80vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold mb-6">Order Food: {foodName}</h2>

        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex justify-between items-center text-gray-600">
            <span>Price per item:</span>
            <span className="font-semibold">{formatCurrency(safePrice)}</span>
          </div>
          <div className="flex justify-between items-center mt-2 text-lg">
            <span className="font-medium">Total Cost:</span>
            <span className="font-bold text-orange-500">{formatCurrency(totalCost)}</span>
          </div>
        </div>

        <div className="mb-6 text-center">
          <h3 className="text-lg font-semibold mb-2">Scan QR Code to Pay</h3>
          <img src="/qr.jpg" alt="QR Code" className="mx-auto w-40 h-40" />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">Upload Payment Screenshot</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-2 border rounded-lg focus:border-orange-500 outline-none"
            required
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Customer Name</label>
            <input
              type="text"
              value={formData.customerName}
              onChange={(e) => setFormData((prev) => ({ ...prev, customerName: e.target.value }))}
              className="w-full p-2 border rounded-lg focus:border-orange-500 outline-none"
              required
            />
          </div>

          {/*<div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              className="w-full p-2 border rounded-lg focus:border-orange-500 outline-none"
              required
            />
          </div>*/}

          <div>
            <label className="block text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
              className="w-full p-2 border rounded-lg focus:border-orange-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Delivery Address</label>
            <textarea
              value={formData.address}
              onChange={(e) => setFormData((prev) => ({ ...prev, address: e.target.value }))}
              className="w-full p-2 border rounded-lg focus:border-orange-500 outline-none"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Quantity</label>
            <input
              type="number"
              value={formData.quantity}
              onChange={(e) => setFormData((prev) => ({ ...prev, quantity: e.target.value }))}
              className="w-full p-2 border rounded-lg focus:border-orange-500 outline-none"
              required
              min="1"
            />
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <button type="button" onClick={onClose} className="px-4 py-2 text-gray-600 hover:text-gray-800">
              Cancel
            </button>
            <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600">
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
