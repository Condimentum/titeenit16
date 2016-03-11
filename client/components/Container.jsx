Container = React.createClass({
  render(){
    return(
      <div className="outerDiv">
        <IntroComponent/>
        <HappeningComponent/>
        <ScheduleComponent/>
        <MapComponent/>
      </div>
    );
  }
});
