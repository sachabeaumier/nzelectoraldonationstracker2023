import WordCloud from './WordCloud'
import OpenAPI from './OpenAPI'
// import './my-sass.css'

function App() {
  return (
    <>
      <header className="header">
        <h1>New Zealand Electoral Tracker 2023</h1>
      </header>
      <section className="main">{/* add your code here */}</section>

      <section className="wordcloud">
        <h1>
          Wordclouds of donations by productive sectors made to each Political
          Party
        </h1>
        <WordCloud />
        <OpenAPI />
      </section>
    </>
  )
}

export default App
