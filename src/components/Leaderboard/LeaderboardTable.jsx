import React from "react";

const LeaderboardTable = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-saver-green">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider rounded-tl-xl"
            >
              Rank
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              Wallet Address
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              Total Bought ($SAVER)
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              Active Days (5/7)
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider rounded-tr-xl"
            >
              Last Buy
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((wallet, index) => (
            <tr
              key={wallet.address}
              className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {index + 1}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {wallet.address.substring(0, 6)}...
                {wallet.address.substring(wallet.address.length - 4)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {wallet.totalBought.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 flex items-center">
                {wallet.activeBuyDaysCount}
                {wallet.qualifiesForPrize && (
                  <span
                    className="ml-2 text-green-500"
                    title="Currently qualifies for prize"
                  >
                    &#10003; {/* Checkmark symbol */}
                  </span>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                {wallet.lastBuy
                  ? new Date(wallet.lastBuy).toLocaleString()
                  : "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardTable;
