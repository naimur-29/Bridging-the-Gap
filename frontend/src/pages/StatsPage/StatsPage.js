import React from "react";

const StatsPage = ({ stats }) => {
  return (
    <section className="main-container">
      <div className="overflow-x-auto">
        <table className="table w-[90vw]">
          <thead>
            <tr>
              <th className="text-lg">Rank</th>
              <th className="text-lg">Label</th>
              <th className="text-lg">Percentage</th>
            </tr>
          </thead>

          <tbody>
            {Object.entries(stats).map((s, i) => (
              <tr>
                <th className="text-lg font-normal">{i + 1}</th>
                <th className="text-lg font-normal">{s[0]}</th>
                <td className="text-lg font-normal">{s[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default StatsPage;
