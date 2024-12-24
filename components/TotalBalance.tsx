import { formatAmount } from "@/lib/utils";
import React from "react";

const TotalBalance = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotlaBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">{/*DoughntChart*/}</div>
      <div className="flex flex-col gap-4">
        <h2 className="header-2 ">Bank Accounts: {totalBanks}</h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total Current Balance:</p>
          <p  className="total-balance-amount flex-center  gap-2">
            {formatAmount(totalCurrentBalance)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TotalBalance;
