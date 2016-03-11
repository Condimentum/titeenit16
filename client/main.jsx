Meteor.startup(function(){
  ReactDOM.render(
    <Container/>,
    document.getElementById('render-target')
  );
  setInterval(function () {
            Meteor.call("getServerTime", function (error, result) {
                Session.set("time", result);
            });
        }, 1000);
});