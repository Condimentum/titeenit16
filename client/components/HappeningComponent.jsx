HappeningComponent = React.createClass({
  render(){
    return(
      <div className="innerDiv">
        <h2>
          Juuri nyt: {Session.get("happeningNow").nimi} @ {Session.get("happeningNow").paikka}
        </h2>
        <h2>
          Seuraavaksi: klo {Session.get("happeningNext").klo} {Session.get("happeningNext").nimi} @ {Session.get("happeningNext").paikka}
        </h2>
      </div>
    );
  }
});