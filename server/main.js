if (Meteor.isServer) {
    Meteor.methods({
        getServerTime: function () {
            var _time = (new Date).getTime();
            console.log(_time);
            return _time;
        }
    });
}