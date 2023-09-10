import './App.scss'

export default function WordCloud() {
  return (
    <>
      <div className="wordcloud-intro">
        <h1>
          Wordclouds of donations by productive sectors made to each Political
          Party
        </h1>
        <p>
          This section presents the weight of sectors donating to their
          prospective political parties. The larger the word is in the
          wordcloud, the larger proportion of funding it gives.
        </p>
      </div>

      <div className="container">
        <div className="column">
          <h1>Green Party</h1>
          <img
            src="https://profoundbathroomgraf.s3.ap-southeast-2.amazonaws.com/greenpartywordcloud.png"
            alt="Green Party wordcloud"
          ></img>
        </div>
        <div className="column">
          <h1>ACT Party</h1>
          <img
            src="https://profoundbathroomgraf.s3.ap-southeast-2.amazonaws.com/ACTwordcloudv2.png"
            alt="ACT Party wordcloud"
          ></img>
        </div>
        <div className="column">
          <h1>Vision NZ</h1>
          <img
            src="https://profoundbathroomgraf.s3.ap-southeast-2.amazonaws.com/VisionNZPartyv2.png"
            alt="Vision NZ wordcloud"
          ></img>
        </div>
      </div>

      <div className="container">
        <div className="column">
          <h1>Democracy NZ</h1>
          <img
            src="https://profoundbathroomgraf.s3.ap-southeast-2.amazonaws.com/DemocracyNZwordcloud.png"
            alt="democracy NZ wordcloud"
          ></img>
        </div>
        <div className="column">
          <h1>NZ First</h1>
          <img
            src="https://profoundbathroomgraf.s3.ap-southeast-2.amazonaws.com/NZFirstwordcloud.png"
            alt="NZ First Word Cloud"
          ></img>
        </div>
        <div className="column">
          <h1>Labour</h1>
          <img
            src="https://profoundbathroomgraf.s3.ap-southeast-2.amazonaws.com/Labourwordcloud.png"
            alt="Labour Party Word Cloud"
          ></img>
        </div>
      </div>

      <div className="container">
        <div className="column"></div>
        <div className="column">
          <h1>National Party</h1>
          <img
            src="https://profoundbathroomgraf.s3.ap-southeast-2.amazonaws.com/Nationalwordcloud.png"
            alt="National Party Word Cloud"
          ></img>
        </div>
        <div className="column"></div>
        {/* <div id="middle"></div>
        <div id="right"></div> */}
      </div>
    </>
  )
}
