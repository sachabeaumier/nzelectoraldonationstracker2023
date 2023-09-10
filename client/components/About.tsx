export default function About() {
  return (
    <>
      <div className="About-Intro">
        <h1>Donation breakdown</h1>
        <p>
          This data has been analyzed using datascrapped information from
          Elections New Zealand which holds pubicly discloed information about
          the provenance of party financing and donations made to political
          parties. Python BeautifulSoup package was used to scrape this data
          with excel used for most low level data wrangling. Manual analysis was
          made for the sectoral provenance/background of donors. About
          information for donors utilized publicly available web resources via
          google. Python WordCloud was utilized for wordcloud analysis and
          charting makes use of{' '}
          <a href="https://recharts.org/en-US/">React Recharts</a> package.
        </p>
      </div>
      <div className="About-Researcher"></div>
    </>
  )
}
