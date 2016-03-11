Meteor.startup(function(){
    // setInterval(function () {
            Meteor.call("getServerTime", function (error, result) {
                Session.set("time", result);
            });
            Meteor.call("getHappeningNow", function (error, result) {
                Session.set("happeningNow", result);
            });
            Meteor.call("getHappeningNext", function (error, result) {
                Session.set("happeningNext", result);
            });
        // }, 1000);
  setTimeout(function(){
  ReactDOM.render(
    <Container/>,
    document.getElementById('render-target')
  );
  }, 500);
});