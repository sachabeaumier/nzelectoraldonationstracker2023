import { PureComponent } from 'react'
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  CartesianGrid,
  Label,
} from 'recharts'

import { donationsdata } from '../static/donationsdata'

export default class LineChartFunction extends PureComponent {
  render() {
    return (
      <LineChart
        width={500}
        height={300}
        data={donationsdata}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date_received">
          <Label
            value="Date of Donation Received by Electoral Commission"
            position="bottom"
          />
        </XAxis>
        <YAxis>
          <Label value="Amount" angle={-90} position="left" />
        </YAxis>

        <Tooltip />
        <Line
          type="monotone"
          dataKey="ACT New Zealand"
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
          dataKey="Green Party of Aotearoa New Zealand"
          stroke="#82ca9d"
          activeDot={{ r: 8 }}
        />

        <Line
          type="monotone"
          dataKey="New Zealand Labour Party"
          stroke="#e60505"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="National" stroke="#1331f0" />
        <Line type="monotone" dataKey="NZFirst" stroke="#030202" />
      </LineChart>
    )
  }
}
