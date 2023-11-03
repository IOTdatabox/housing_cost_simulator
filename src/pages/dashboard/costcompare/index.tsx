// pages/index.tsx
'use client'
import React, { useEffect, useState } from 'react';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';


import SpinBox from '../../../components/SpinBox';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import ExplainLabel from '@/components/ExplainLabel';
import { CalcButton } from '@/components/CalcButton';

import { calculatePV, calculateRepayMonthly, calculatePurchaseAmount, calculateRepayMonthlyEasily } from '@/utils/functions';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false, // Disable server-side rendering for this component
});

const Home: React.FC = () => {

  const [incomeannual, setIncomeAnnual] = useState(600)
  const [incomefamily, setIncomeFamily] = useState(150)
  const [repaypercent, setRepayPercent] = useState(40)
  const [interestrate, setInterestRate] = useState(3.5)

  const [repayeasily, setRepayEasily] = useState(10)
  const [repayextra, setRepayExtra] = useState(10)
  const [loadrate, setLoanRate] = useState(1)

  const [repayperiod, setRepayPeriod] = useState(35)

  const [repayamount, setRepayAmount] = useState(0)
  const [repayamounteasily, setRepayAmounteasily] = useState(0)

  const chartoptions: ApexOptions = {
    chart: {
      type: 'bar'
    },
    series: [{
      data: [{
        x: '購入可能額',
        y: repayamount,
        fillColor: '#00E396'
      }, {
        x: '無理なく払える額',
        y: repayamounteasily,
        fillColor: '#00E300'
      }]
      
    }],
    title: {
      text: '借入金額の目安',
      align: 'center'
    },
  }

  useEffect(() => {
    const repaymonthly = calculateRepayMonthly(incomeannual, incomefamily, repaypercent);
    const pv = calculatePV(repaymonthly, interestrate, repayperiod);
    const repayamount = calculatePurchaseAmount(pv);
    setRepayAmount(repayamount)

    const repaymonthlyeasily = calculateRepayMonthlyEasily(repayeasily, repayextra);
    const pveasily = calculatePV(repaymonthlyeasily, loadrate, repayperiod);
    const repayamounteasily = calculatePurchaseAmount(pveasily);
    setRepayAmounteasily(repayamounteasily)
  }, [])



  return (
    <DashboardLayout>
      <div className='grid grid-cols-3 gap-4 content-start pt-4 px-5'>
        <div className='px-5 text-center pt-2 text-[25px]'>
          <div className='pb-5'>
            いくらまで借りられるか
          </div>
          <div className='flex justify-between items-center pt-5'>
            <ExplainLabel text={"税込み年収は？	"} />
            <SpinBox
              min={0}
              max={100000}
              step={1}
              unit={"万円"}
              defaultValue={600}
              onChange={setIncomeAnnual}
            />
          </div>
          <div className='flex justify-between items-center pt-5'>
            <ExplainLabel text={"家族の収入合算可能額は？	"} />
            <SpinBox
              min={0}
              max={100000}
              step={1}
              defaultValue={150}
              unit={'万円'}
              onChange={setIncomeFamily}
            />
          </div>
          <div className='flex justify-between items-center pt-5'>
            <ExplainLabel text={"年収に対する借入限度率は？	"} />
            <SpinBox
              min={0}
              max={100}
              step={1}
              defaultValue={40}
              unit={'%'}
              onChange={setRepayPercent}
            />
          </div>
          <div className='flex justify-between items-center pt-5'>
            <ExplainLabel text={"審査金利は？	"} />
            <SpinBox
              min={0}
              max={10}
              step={1}
              defaultValue={3.5}
              unit={'%'}
              onChange={setInterestRate}
            />
          </div>
        </div>
        <div className='px-5 text-center pt-2 text-[25px]'>
          <div className='pb-5'>
            いくらまでなら返済できるか
          </div>
          <div className='flex justify-between items-center pt-5'>
            <ExplainLabel text={"毎月無理なく返済できる額は？	"} />
            <SpinBox
              min={0}
              max={100000}
              step={1}
              unit={"万円"}
              defaultValue={10}
              onChange={setRepayEasily}
            />
          </div>
          <div className='flex justify-between items-center pt-5'>
            <ExplainLabel text={"ボーナスでの返済可能額は？	"} />
            <SpinBox
              min={0}
              max={100000}
              step={1}
              unit={"万円"}
              defaultValue={10}
              onChange={setRepayExtra}
            />
          </div>
          <div className='flex justify-between items-center pt-5'>
            <ExplainLabel text={"借入金利は？	"} />
            <SpinBox
              min={0}
              max={100}
              step={1}
              unit={"%"}
              defaultValue={1}
              onChange={setLoanRate}
            />
          </div>
        </div>

        <div className='pt-10'>{
          (typeof window !== 'undefined')
          && <Chart options={chartoptions} series={chartoptions.series} type="bar" height={350} />
        }
        </div>

        <div className=" col-span-2 mx-auto">
          <div className="w-2/3">
            <p className='text-center text-[30px]'>
              共通項目
            </p>
            <div className='flex justify-between items-center py-5 w-96'>
              <ExplainLabel text={"ローン返済期間"} />
              <SpinBox
                min={0}
                max={100}
                step={1}
                unit={"年"}
                defaultValue={35}
                onChange={setRepayPeriod}
              />
            </div>
            <div className='mx-auto'>
              <CalcButton children={'計算'} onClick={() => {

                const repaymonthly = calculateRepayMonthly(incomeannual, incomefamily, repaypercent);
                const pv = calculatePV(repaymonthly, interestrate, repayperiod);
                const repayamount = calculatePurchaseAmount(pv);
                setRepayAmount(repayamount)

                const repaymonthlyeasily = calculateRepayMonthlyEasily(repayeasily, repayextra);
                const pveasily = calculatePV(repaymonthlyeasily, loadrate, repayperiod);
                const repayamounteasily = calculatePurchaseAmount(pveasily);
                setRepayAmounteasily(repayamounteasily)

              }} />
            </div>
          </div>
        </div>
      </div>

    </ DashboardLayout >
  );
};

export default Home;
