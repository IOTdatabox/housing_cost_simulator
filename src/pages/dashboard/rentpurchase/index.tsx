// pages/index.tsx
'use client'
import React, { useEffect, useState } from 'react';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';


import SpinBox from '../../../components/SpinBox';
import AgeSpinBox from '@/components/AgeSpinBox';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import ExplainLabel from '@/components/ExplainLabel';
import NumberLabel from '@/components/NumberLabel';
import { CalcButton } from '@/components/CalcButton';


import { calculateACCRentalPayment, calculateRepayMonthlyForBuy, calculateACCBuyPayment, GenerateAgeArray } from '@/utils/functions';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false, // Disable server-side rendering for this component
});

const Home: React.FC = () => {

  const [firstage, setFristAge] = useState(32)
  const [secondage, setSecondAge] = useState(39)
  const [thirdage, setThirdAge] = useState(49)
  const [firstrent, setFristRent] = useState(12)
  const [secondrent, setSecondRent] = useState(14)
  const [thirdrent, setThirdRent] = useState(20)

  const [propertyprice, setPropertyPrice] = useState(5000);
  const [downprice, setDownPrice] = useState(300);

  const [repayperiod, setRepayPeriod] = useState(35)
  const [interestrate, setInterestRate] = useState(1)
  const [maintenancecost, setMaintenanceCost] = useState(20);

  const [repaymonthlyforbuy, setRepayMonthlyForBuy] = useState(0);
  const [accrental, setACCRental] = useState<number[]>([10, 20]);
  const [accbuy, setACCBuy] = useState<number[]>([20, 30]);

  const [agearray, setAgeArray] = useState<number[]>([20, 30]);


  useEffect(() => {

    const ACCRentalPayment = calculateACCRentalPayment(firstage, secondage, thirdage, firstrent, secondrent, thirdrent);
    const RepayMonthlyForBuy = calculateRepayMonthlyForBuy(interestrate, repayperiod, downprice, propertyprice);
    const ACCBuyPayment = calculateACCBuyPayment(firstage, RepayMonthlyForBuy, maintenancecost);
    const AgeArray = GenerateAgeArray(firstage);

    setACCRental(ACCRentalPayment);
    setRepayMonthlyForBuy(RepayMonthlyForBuy);
    setACCBuy(ACCBuyPayment);
    setAgeArray(AgeArray);



    console.log("firstage", firstage);
    console.log("ACCRentalPayment", accrental);
    console.log("RepayMonthlyForBuy", RepayMonthlyForBuy);
    console.log("ACCBuyPayment", accbuy);


  }, [])

  // useEffect(() => {
  //   // This log will show the new value after the update
  //   console.log("After update ACCRentalPayment", accrental);
  //   console.log("After update ACCBuyPayment", accbuy);
  // }, [accrental, accbuy]);

  const chartoptions: ApexOptions = {
    chart: {
      type: 'line'
    },
    stroke: {
      width: 2,
      curve: 'smooth',
    },
    series: [
      {
        name: '購入',
        data: accbuy.map((value, index) => ({ x: agearray[index], y: value }))
        // data: accbuy
      },
      {
        name: '賃貸',
        data: accrental.map((value, index) => ({ x: agearray[index], y: value }))
        // data: accrental
      },
    ],
    // xaxis: {
    //   labels: {
    //     formatter: function(val, index) {
    //       // If index is undefined, or is not even, return an empty string.
    //       if (index === undefined || index % 2 !== 0) {
    //         return '';
    //       }
    //       // Otherwise, return the value.
    //       return val;
    //     }
    //   },
    //   // Make sure to define the categories if you have specific labels for each point on the x-axis.
    //   categories: agearray,
    // },
    xaxis: {
      type: 'category',
      tickPlacement: 'between',
    },
    title: {
      text: '賃貸 と 購入',
      align: 'center'
    },
  }



  return (
    <DashboardLayout>
      <div className='grid grid-cols-11 gap-4 content-start pt-4'>
        <div className='col-span-3 px-5 text-center pt-2 text-[25px]'>
          <div className='pb-5'>
            ずっと賃貸生活の場合
          </div>
          <div className='grid grid-cols-2 gap-4 content-start pt-4'>

            <div className='px-5 text-center pt-2 text-[25px]'>
              <ExplainLabel text={"年齢区分"} />
              <div className='flex justify-between items-center pt-5'>
                <AgeSpinBox
                  min={0}
                  max={100}
                  step={1}
                  unit={"歳"}
                  defaultValue={32}
                  onChange={setFristAge}
                />
                <p>~</p>
                <AgeSpinBox
                  min={0}
                  max={100}
                  step={1}
                  unit={"歳"}
                  defaultValue={39}
                  onChange={setSecondAge}
                />
              </div>
              <div className='flex justify-between items-center pt-5'>
                <NumberLabel text={(secondage + 1).toString()} />
                <p className=' ml-10 text-[20px]'>歳</p>
                <p className='ml-3'>~</p>
                <AgeSpinBox
                  min={0}
                  max={100}
                  step={1}
                  unit={"歳"}
                  defaultValue={49}
                  onChange={setThirdAge}
                />
              </div>
              <div className='flex justify-between items-center pt-5'>
                <NumberLabel text={(thirdage + 1).toString()} />
                <p className=' ml-10 text-[20px]'>歳以降</p>
              </div>
            </div>
            <div className='px-5 text-center pt-2 text-[25px]'>
              <ExplainLabel text={"家賃月額"} />
              <div className='flex justify-between items-center pt-5'>
                <SpinBox
                  min={0}
                  max={100000}
                  step={1}
                  unit={"万円／月"}
                  defaultValue={12}
                  onChange={setFristRent}
                />
              </div>
              <div className='flex justify-between items-center pt-5'>
                <SpinBox
                  min={0}
                  max={100000}
                  step={1}
                  unit={"万円／月"}
                  defaultValue={14}
                  onChange={setSecondRent}
                />
              </div>
              <div className='flex justify-between items-center pt-5'>
                <SpinBox
                  min={0}
                  max={100000}
                  step={1}
                  unit={"万円／月"}
                  defaultValue={20}
                  onChange={setThirdRent}
                />
              </div>
            </div>

          </div>
        </div>
        <div className=' col-span-3 px-5 text-center pt-2 text-[25px]'>
          <div className='pb-5'>
            持ち家購入の場合
          </div>
          <div className='flex justify-between items-center pt-5'>
            <ExplainLabel text={"物件価格は？"} />
            <SpinBox
              min={0}
              max={100000}
              step={1}
              unit={"万円"}
              defaultValue={5000}
              onChange={setPropertyPrice}
            />
          </div>
          <div className='flex justify-between items-center pt-5'>
            <ExplainLabel text={"頭金は？"} />
            <SpinBox
              min={0}
              max={100000}
              step={1}
              unit={"万円"}
              defaultValue={300}
              onChange={setDownPrice}
            />
          </div>
          <div className='flex justify-between items-center pt-5'>
            <ExplainLabel text={"ローン返済期間は？"} />
            <SpinBox
              min={0}
              max={100}
              step={1}
              unit={"年"}
              defaultValue={35}
              onChange={setRepayPeriod}
            />
          </div>
          <div className='flex justify-between items-center pt-5'>
            <ExplainLabel text={"ローン金利は？"} />
            <SpinBox
              min={0}
              max={100}
              step={1}
              unit={"%"}
              defaultValue={1}
              onChange={setInterestRate}
            />
          </div>
          <div className='flex justify-between items-center pt-5'>
            <ExplainLabel text={"固定資産税・維持費は？"} />
            <SpinBox
              min={0}
              max={100}
              step={1}
              unit={"万円／年"}
              defaultValue={20}
              onChange={setMaintenanceCost}
            />
          </div>
          <div className='flex justify-between items-center pt-5'>
            <ExplainLabel text={"もし、お借り入れご本人に万が一（死亡・高度障害）の事があったら？"} />
            <SpinBox
              min={0}
              max={100}
              step={1}
              unit={"年後"}
              defaultValue={10}
              onChange={setRepayMonthlyForBuy}
            />
          </div>
        </div>

        <div className='col-span-5 pt-10'>{
          (typeof window !== 'undefined')
          && <Chart options={chartoptions} series={chartoptions.series} type="line" height={350} />
        }
        </div>

        <div className="col-span-5  mx-auto">

          <div className='mx-auto'>
            <CalcButton onClick={() => {

              const ACCRentalPayment = calculateACCRentalPayment(firstage, secondage, thirdage, firstrent, secondrent, thirdrent);
              const RepayMonthlyForBuy = calculateRepayMonthlyForBuy(interestrate, repayperiod, downprice, propertyprice);
              const ACCBuyPayment = calculateACCBuyPayment(firstage, RepayMonthlyForBuy, maintenancecost);
              const AgeArray = GenerateAgeArray(firstage);

              setACCRental(ACCRentalPayment);
              setRepayMonthlyForBuy(RepayMonthlyForBuy);
              setACCBuy(ACCBuyPayment);
              setAgeArray(AgeArray);

            }} />
          </div>
        </div>
      </div>

    </ DashboardLayout >
  );
};

export default Home;
