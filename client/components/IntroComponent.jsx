IntroComponent = React.createClass({
  render(){
    return(
      <div className="innerDiv">
        <h1>Sota. Sota ei lopu koskaan...</h1>
        <h2>18.3.2016</h2>
        <p>Turku</p>
        <p>
        <Happenings />
        </p>
      </div>
    );
  }
});

Happenings = React.createClass({
	render () {
		return(
			getHappenings();
		);
	}
	function getHappenings() {
		return this.now.nimi;
	}
})

var tapahtumat = [
	{nimi: 'Titeenikuumotukset', pvm: '0311', klo: '0400', paikka: 'Tietoteekkarikaupungit', epoch: 1457661600000},
	{nimi: 'Majoitus aukeaa', pvm: '0318', klo: '1730', paikka: 'Kupittaan koulu', epoch: 1458315000000},
	{nimi: 'Sodanjulistus', pvm: '0318', klo: '1800', paikka: 'Showroom', epoch: 1458316800000}]
var time = Session.get("time");
var now, next;
for (i in tapahtumat) {
	if (tapahtumat[i].epoch <= time){
		now = tapahtumat[i];
	}
	else if (tapahtumat[i].epoch > time){
		next = tapahtumat[i];
		break;
	}
}
