HappeningComponent = React.createClass({
  render(){
    return(
      <div className="innerDiv">
        <h2>
          Juuri nyt: {Session.get("happeningNow").nimi} @ {Session.get("happeningNow").paikka}
        </h2>
        <h2>
          Seuraavaksi: {date} klo {Session.get("happeningNext").klo} {Session.get("happeningNext").nimi} @ {Session.get("happeningNext").paikka}
        </h2>
      </div>
    );
  }
});
var date = '';
if(Session.get("happeningNow").pvm != Session.get("happeningNext").pvm) {
  date = Session.get("happeningNext").pvm;
}