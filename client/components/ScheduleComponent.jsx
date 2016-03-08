ScheduleComponent = React.createClass({
  render(){
    return(
      <div className="innerDiv">
        <h1>Aikataulu</h1>
        <table className="ScheduleTable">
        	<tr>
        		<th rowspan="3">Perjantai 18.3.</th>
        		<td>Majoitus aukeaa</td>
        		<td>17:30</td>
        		<td>@ Kupittaan koulu (Syreenikuja 1)</td>
        	</tr>
        	<tr>
        		<td></td>
        		<td>Sodanjulistus</td>
        		<td>18:00</td>
        		<td>@ Showroom (Linnankatu 18)</td>
        	</tr>
        	<tr>
        		<td></td>
        		<td>Ensimmäisen lajin julkistus</td>
        		<td>20:00</td>
        		<td>@ Showoomin yläkerta</td>
        	</tr>
        	<tr>
        		<th>Lauantai 19.3.</th>
        		<td>Aamupala</td>
        		<td>10:00</td>
        		<td>@ Kupittaan puisto</td>
        	</tr>
        	<tr>
        		<td></td>
        		<td>VVN-peli</td>
        		<td>11:00</td>
        		<td>@ Kupittaan puisto</td>
        	</tr>
        	<tr>
        		<td></td>
        		<td>Sokkoralli</td>
        		<td>13:00</td>
        		<td>@ Kupittaan liikennepuisto</td>
        	</tr>
        	<tr>
        		<td></td>
        		<td>Joystiq</td>
        		<td>15:00</td>
        		<td>@ Boost</td>
        	</tr>
        	<tr>
        		<td></td>
        		<td>Curling</td>
        		<td>17:00</td>
        		<td>@ Pesäpallokenttä</td>
        	</tr>
        	<tr>
        		<td></td>
        		<td>Tivoli aukeaa</td>
        		<td>18:00</td>
        		<td>@ Tivoli</td>
        	</tr>
        	<tr>
        		<td></td>
        		<td>Kadonneen tutkinnon metsästys</td>
        		<td>20:00</td>
        		<td>@ Tivoli</td>
        	</tr>
        	<tr>
        		<th>Sunnuntai 20.3.</th>
        		<td>Poistuminen majoituksesta</td>
        		<td>12:00</td>
        		<td>Turku kiittää!</td>
        	</tr>
        </table>
      </div>
    );
  }
});