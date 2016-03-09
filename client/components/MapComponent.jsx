MapComponent = React.createClass({
  render() {
    return <MyTestMap />;
  }
});

MyTestMap = React.createClass({
  mixins: [ReactMeteorData],
  componentDidMount() {
    GoogleMaps.load();
  },
  getMeteorData() {
    return {
      loaded: GoogleMaps.loaded(),
      mapOptions: GoogleMaps.loaded() && this._mapOptions()
    };
  },
  _mapOptions() {
    return {
      center: new google.maps.LatLng(60.4447759, 22.2937829),
      zoom: 14
    };
  },
  render() {
    if (this.data.loaded)
      return <GoogleMap name="mymap" options={this.data.mapOptions} />;

    return <div>Loading map...</div>;
  }
});

GoogleMap = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    options: React.PropTypes.object.isRequired
  },
  componentDidMount() {
    GoogleMaps.create({
      name: this.props.name,
      element: React.findDOMNode(this),
      options: this.props.options
    });

    GoogleMaps.ready(this.props.name, function(map) {
      var locations = [
        ['Majoitus', 'https://goo.gl/maps/exb3ZLa2s182', 60.4400759, 22.2909164],
        ['Showroom','https://goo.gl/maps/bvNJuLRuwmo', 60.4485752, 22.2635677],
        ['Liikennepuisto', 'https://goo.gl/maps/5w2cQDb44FN2', 60.445343, 22.286680],
        ['Tivoli', 'https://goo.gl/maps/BJ56xnoRDoG2', 60.4473199, 22.2805452],
        ['Boost', 'https://goo.gl/maps/LXcbWE9Yi4D2', 60.4501433, 22.2915006]
      ];
      var infowindow = new google.maps.InfoWindow();
      var marker, i;

      for (i in locations) {  
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][2], locations[i][3]),
          map: map.instance
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent('<h3>' + locations[i][0] + '</h3>' + '</p><a href="' + locations[i][1] + '" target="_blank">Google Maps -linkki</a></p>');
            infowindow.open(map.instance, marker);
          }
        })(marker, i));
      }
    });
  },
  componentWillUnmount() {
    if (GoogleMaps.maps[this.props.name]) {
      google.maps.event.clearInstanceListeners(GoogleMaps.maps[this.props.name].instance);
      delete GoogleMaps.maps[this.props.name];
    } 
  },
  render() {
    return <div className="map-container"></div>;
  }
});
/*
if (Meteor.isClient) {
  Meteor.startup(function() {
    return React.render(<MapComponent />, document.getElementById('root'));
  });
}
*/