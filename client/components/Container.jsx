Container = React.createClass({
  render(){
    return(
      <div className="outerDiv">
        {this.props.content}
        <Footer/>
      </div>
    );
  }
});
