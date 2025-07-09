// src/components/Leaderboard/WalletRow.jsx
import React from 'react';
import StatusBadge from './StatusBadge';

const WalletRow = ({ wallet, rank }) => {
  const formatAddress = (address) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  return (
    <tr className={rank <= 3 ? "bg-saver-green/5" : ""}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className={`flex items-center ${rank <= 3 ? "font-bold" : ""}`}>
          {rank === 1 && <span className="mr-2">🥇</span>}
          {rank === 2 && <span className="mr-2">🥈</span>}
          {rank === 3 && <span className="mr-2">🥉</span>}
          {rank}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="font-mono text-sm">{formatAddress(wallet.address)}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="font-semibold">
          {wallet.totalBought.toLocaleString(undefined, {
            maximumFractionDigits: 0
          })}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <span className="mr-1">{wallet.buyDays.length}</span>
          <span className="text-gray-500 text-sm">/7</span>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <StatusBadge 
          disqualified={wallet.disqualified} 
          buyDays={wallet.buyDays.length} 
        />
      </td>
    </tr>
  );
};

export default WalletRow;