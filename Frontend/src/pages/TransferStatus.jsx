// pages/TransferStatus.jsx

import { useLocation } from "react-router-dom";

export const TransferStatus = () => {
  const location = useLocation();
  const { status, message } = location.state || {};

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center space-y-4">
        <h2 className={`text-3xl font-bold ${status === "success" ? "text-green-500" : "text-red-500"}`}>
          {status === "success" ? "Transfer Successful" : "Transfer Failed"}
        </h2>
        <p className="text-gray-700">{message}</p>
      </div>
    </div>
  );
};
