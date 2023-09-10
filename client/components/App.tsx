import WordCloud from './WordCloud'
import OpenAPI from './OpenAPI'
import './App.scss'
import { DonationChart } from './Chart'
import TotalChart from './GrandTotalChart'
import { donationsdata } from '../static/donationsdata'
import { Renderlinechart } from './PartyLineCharts'

function App() {
  return (
    <>
      <header className="header">
        <h1>New Zealand Electoral Tracker 2023</h1>
      </header>
      <section className="main">{/* add your code here */}</section>

      <section className="wordcloud">
        <WordCloud />
      </section>

      <section>
        {/* <DonationChart data={donationsdata} /> */}
        <div className="container">
          <div className="column">
            <h1>Rendered Linechart 1</h1>
            <Renderlinechart />
          </div>
          <div className="column">
            <h1>Rendered Linechart 2</h1>
            <Renderlinechart />
          </div>
          <div className="column">
            <h1>Rendered Linechart 3</h1>
            <Renderlinechart />
          </div>
        </div>
        <h1>Total Chart</h1>
        <TotalChart />
        <OpenAPI />
      </section>
    </>
  )
}

export default App
