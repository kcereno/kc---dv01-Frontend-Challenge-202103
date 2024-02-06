import React, { useMemo } from 'react';
import { LoanDataType } from '../../features/loanData/types';
import { convertToDollarString, extractUniqueValues } from '../../utils';
import { calculateIncrement, calculateTicks, roundUpToNearest } from './utils';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string | number;
}

type GradeChartProps = {
  chartData: LoanDataType[];
  className?: string;
};

function GradeBarChart({ chartData, className = '' }: GradeChartProps) {
  const uniqueGrades = useMemo(() => {
    return extractUniqueValues(chartData, 'grade');
  }, [chartData]);

  const parsedData = uniqueGrades.map((grade) => {
    const totalBalance = chartData
      .filter((data) => data.grade === grade)
      .reduce(
        (accumulator, currentValue) =>
          accumulator + +currentValue.currentBalance,
        0
      );

    return {
      grade,
      dollarValue: Math.round(totalBalance * 100) / 100,
    };
  });

  const maxYValue =
    parsedData.length > 1
      ? Math.max(...parsedData.map((data) => data.dollarValue))
      : 0;

  // Set the increment based on the maxYValue

  const increment = calculateIncrement(maxYValue);
  const maxYValueRounded = roundUpToNearest(maxYValue, increment);
  const ticks = calculateTicks(0, maxYValueRounded, increment);

  return (
    <div className={className}>
      <BarChart
        width={900}
        height={400}
        data={parsedData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis
          dataKey="grade"
          tickMargin={10}
        />
        <YAxis
          ticks={ticks}
          tickFormatter={(value) => convertToDollarString(value)}
          width={100}
        />

        <Tooltip content={CustomTooltip} />
        <Bar
          dataKey="dollarValue"
          fill="#8884d8"
        />
      </BarChart>
    </div>
  );
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="">
        <p className="p-2 text-black rounded bg-slate-400">
          {convertToDollarString(payload[0].value)}
        </p>
      </div>
    );
  }

  return null;
};
export default GradeBarChart;
