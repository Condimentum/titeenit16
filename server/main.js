Meteor.methods({
    getServerTime: function () {
    	var time = (new Date).getTime();
        console.log(time);
        return time;
    },
    getHappeningNow: function () {
    	var time = (new Date).getTime();
		for (i in tapahtumat) {
			if (tapahtumat[i].epoch <= time) {
				now = tapahtumat[i];
			}
		}
		return now;
	},
	getHappeningNext: function () {
		var time = (new Date).getTime();
		for (i in tapahtumat) {
			if (tapahtumat[i].epoch > time) {
				return tapahtumat[i];
			}
		}
	},
	getTapahtumat: function () {
		return;
	}
});

var tapahtumat = [
	{nimi: 'Titeenikuumotukset', pvm: 'Nyt', klo: '04:00', paikka: 'Tietoteekkarikaupungit', epoch: 1457661600000},
	{nimi: 'Majoitus aukeaa', pvm: 'Perjantaina', klo: '17:30', paikka: 'Kupittaan koulu', epoch: 1458315000000},
	{nimi: 'Sodanjulistus', pvm: 'Perjantaina', klo: '18:00', paikka: 'Showroom', epoch: 1458316800000}
	];
var now, next;
