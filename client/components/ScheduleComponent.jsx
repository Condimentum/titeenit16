ScheduleComponent = React.createClass({
  render(){
    return(
      <div className="innerDiv">
        <h1>Aikataulu</h1>
        <table className="ScheduleTable">
            <tbody>
        	<tr>
        		<th rowSpan="3">Perjantai 18.3.</th>
        		<td>Majoitus aukeaa</td>
        		<td>17:30</td>
        		<td>@ Kupittaan koulu (Syreenikuja 1)</td>
        	</tr>
        	<tr>
        		<td>Sodanjulistus</td>
        		<td>18:00</td>
        		<td>@ Showroom (Linnankatu 18)</td>
        	</tr>
        	<tr>
        		<td>Ensimmäisen lajin julkistus</td>
        		<td>20:00</td>
        		<td>@ Showoomin yläkerta</td>
        	</tr>
        	<tr>
        		<th rowSpan="7">Lauantai 19.3.</th>
        		<td>Aamupala</td>
        		<td>10:00</td>
        		<td>@ Kupittaan puisto</td>
        	</tr>
        	<tr>
        		<td>VVN-peli</td>
        		<td>11:00</td>
        		<td>@ Kupittaan puisto</td>
        	</tr>
        	<tr>
        		<td>Sokkoralli</td>
        		<td>13:00</td>
        		<td>@ Kupittaan liikennepuisto</td>
        	</tr>
        	<tr>
        		<td>Joystiq</td>
        		<td>15:00</td>
        		<td>@ Boost</td>
        	</tr>
        	<tr>
        		<td>Curling</td>
        		<td>17:00</td>
        		<td>@ Pesäpallokenttä</td>
        	</tr>
        	<tr>
        		<td>Tivoli aukeaa</td>
        		<td>18:00</td>
        		<td>@ Tivoli</td>
        	</tr>
        	<tr>
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
            </tbody>
        </table>
      </div>
    );
  }
});