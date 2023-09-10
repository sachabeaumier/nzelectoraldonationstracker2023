// import { PureComponent } from 'react'
// import {
//   LineChart,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Line,
//   CartesianGrid,
//   Label,
// } from 'recharts'

// // import { donationsdata } from '../static/donationsdata'

// const donationsdata = [
//   {
//     political_party: 'Green Party of Aotearoa New Zealand',
//     date_received: '04/09/2023',
//     donor: 'Marama Davidson',
//     address: '5 Stratford Road\n Manurewa\n Auckland 2105',
//     lat: -37.01214597,
//     lon: 174.9156981,
//     total: 21158,
//     sector: 'Political',
//     description:
//       'Marama Mere-Ana Davidson (née Paratene; born 29 December 1973) is a New Zealand politician who entered the New Zealand Parliament in 2015 as a representative of the Green Party of Aotearoa New Zealand, of which she is the female co-leader.',
//   },
//   {
//     political_party: 'Green Party of Aotearoa New Zealand',
//     date_received: '04/09/2023',
//     donor: 'James Shaw',
//     address: '29 Orangi Kaupapa Road\n Northland\n Wellington 6012',
//     lat: -41.28190583,
//     lon: 174.7621568,
//     total: 20268,
//     sector: 'Political',
//     description:
//       "James Peter Edward Shaw (born 6 May 1973) is a New Zealand politician and a leader of the Green Party of Aotearoa New Zealand. Voters elected Shaw to the New Zealand parliament at the 2014 general election as a list representative of the Green Party. The party selected Shaw as its male co-leader in May 2015. Following Metiria Turei's resignation in August 2017, Shaw became the party's sole leader for the duration of the 2017 general election.\n \n In October 2017 the Green Party agreed to support a Labour-led government. Shaw became the Minister of Statistics, Minister for Climate Change and Associate Minister of Finance (outside Cabinet). Following the 2020 general election, the Greens agreed to cooperate with the Labour majority government, and Shaw was re-appointed as the Minister for Climate Change.",
//   },
//   {
//     political_party: 'New Zealand National Party',
//     date_received: '04/09/2023',
//     donor: 'IEF Limited',
//     address: '326 New North Road\n Kingsland\n Auckland',
//     lat: -36.86887193,
//     lon: 174.7514271,
//     total: 23000,
//     sector:
//       'Professional Services, Consultancy, Investment, Accountancy, Immigration Services',
//     description:
//       'International Education Fund Ltd. (IEF) was incorporated in New Zealand with the approval of New Zealand Registrar of Companies and certified by the Department of Internal Affairs, the Ministry of Foreign Affairs and Trade of New Zealand and the Chinese General Consulate in Auckland. Established in 1997, IEF headquartered in the central business district of Auckland with offices in Hong Kong and Macau. We have a professional and experienced team of attorneys, certified public accountants and licensed immigration advisers to provide customers with exquisite and intimate service. Our vision is to build a platform to offer opportunities for migrants, International students and investors to settle well and immerse in New Zealand community.',
//   },
//   {
//     political_party: 'New Zealand Labour Party',
//     date_received: '04/09/2023',
//     donor: 'Mark James Todd',
//     address: '558 Great North Road\n Grey Lynn\n Auckland 1021',
//     lat: -36.86598542,
//     lon: 174.7373907,
//     total: 50000,
//     sector: 'Construction, Property',
//     description:
//       'Co-founder and Development Manager, Ockham Residential\n Mark grew up in Mt Wellington, a fifth-generation Aucklander, the son of a tomato farmer, a proud alumnus of Penrose High School (now One Tree Hill College), and an occasional equestrian. He studied Mathematics at the University of Auckland where he met Benjamin Preston — and after graduating, bummed around for a bit, thinking and labouring.\n \n He started a painting business with brother Carl, which morphed into a building business with their father, Lance. In 2009, this evolved into Ockham Residential, the Auckland ‘urban regenerators’ with an ebullient vision for the city’s future. Specifically: “To make beautiful buildings that people love to live in, homes that honour this dynamic Pacific city, stand the test of time, inspire others — and bring an awesome Auckland lifestyle to as many people and communities as we can.”\n \n An avowed Auckland enthusiast, a deeply practical idealist and proponent of ‘density done well’, Mark believes developers have a responsibility to the communities they help shape. He has contributed to The Spinoff and had the privilege of an hour-long audience with Dame Kim Hill.',
//   },
// ]

// export default class LineChartFunction extends PureComponent {
//   render() {
//     return (
//       <LineChart
//         width={500}
//         height={300}
//         data={donationsdata}
//         margin={{
//           top: 5,
//           right: 30,
//           left: 20,
//           bottom: 5,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="date_received">
//           <Label
//             value="Date of Donation Received by Electoral Commission"
//             position="bottom"
//           />
//         </XAxis>
//         <YAxis>
//           <Label value="total" angle={-90} position="left" />
//         </YAxis>

//         <Tooltip />
//         <Line
//           type="monotone"
//           dataKey="ACT New Zealand"
//           stroke="#f0dc02"
//           activeDot={{ r: 8 }}
//         />
//         <Line
//           type="monotone"
//           dataKey="DemocracyNZ"
//           stroke="#8884d8"
//           activeDot={{ r: 8 }}
//         />
//         <Line
//           type="monotone"
//           dataKey="Green Party of Aotearoa New Zealand"
//           stroke="#82ca9d"
//           activeDot={{ r: 8 }}
//         />

//         <Line
//           type="monotone"
//           dataKey="New Zealand Labour Party"
//           stroke="#e60505"
//           activeDot={{ r: 8 }}
//         />
//         <Line type="monotone" dataKey="National" stroke="#1331f0" />
//         <Line type="monotone" dataKey="NZFirst" stroke="#030202" />
//       </LineChart>
//     )
//   }
// }

// import { PureComponent } from 'react'
// import {
//   LineChart,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Line,
//   CartesianGrid,
//   Label,
// } from 'recharts'
// import { donationsdata } from '../static/donationsdata'

// // Import your data (donationsdata) here

// export default class LineChartFunction extends PureComponent {
//   render() {
//     return (
//       <LineChart
//         width={800} // Adjust width as needed
//         height={400} // Adjust height as needed
//         data={donationsdata}
//         margin={{
//           top: 20,
//           right: 30,
//           left: 20,
//           bottom: 20,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="date_received">
//           <Label
//             value="Date of Donation Received by Electoral Commission"
//             position="bottom"
//           />
//         </XAxis>
//         <YAxis>
//           <Label value="Total Donations" angle={-90} position="insideLeft" />
//         </YAxis>

//         <Tooltip />
//         <Line
//           type="monotone"
//           dataKey="total"
//           stroke="#f0dc02"
//           activeDot={{ r: 8 }}
//         />
//         {/* Add more <Line> components for other political parties */}
//         {/* For example: */}
//         {/* <Line
//           type="monotone"
//           dataKey="totalForPartyX"
//           stroke="#XXXXXX" // Adjust the stroke color
//           activeDot={{ r: 8 }}
//         /> */}
//       </LineChart>
//     )
//   }
// }

import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import { donationsdata } from '../static/donationsdata'

export const DonationChart = ({ donationsdata: any }) => {
  return (
    <LineChart
      width={800}
      height={400}
      data={donationsdata}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date_received" />
      <YAxis />
      <Tooltip />
      <Legend />

      <Line
        type="monotone"
        dataKey="ACT"
        stroke="#f0dc02"
        activeDot={{ r: 8 }}
      />
      <Line
        type="monotone"
        dataKey="DemocracyNZ"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line
        type="monotone"
        dataKey="Greens"
        stroke="#82ca9d"
        activeDot={{ r: 8 }}
      />

      <Line
        type="monotone"
        dataKey="Labour"
        stroke="#e60505"
        activeDot={{ r: 8 }}
      />
      {Array.from(
        new Set(donationsdata.map((item) => item.political_party))
      ).map((party, index) => (
        <Line
          key={index}
          type="monotone"
          dataKey="total"
          data={donationsdata.filter((item) => item.political_party === party)}
          name={party}
          stroke={`#${Math.floor(Math.random() * 16777215).toString(16)}`} // Generate random color
        />
      ))}
    </LineChart>
  )
}
