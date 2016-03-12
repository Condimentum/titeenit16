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
      center: new google.maps.LatLng(60.446494, 22.283787),
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
    options: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
  },
  componentDidMount() {
    GoogleMaps.create({
      name: this.props.name,
      element: React.findDOMNode(this),
      options: this.props.options
    });

    GoogleMaps.ready(this.props.name, function(map) {
      var locations = [
        ['Majoitus', 'https://goo.gl/maps/exb3ZLa2s182', 60.440062, 22.293108, '', '0'],
        ['Showroom','https://goo.gl/maps/bvNJuLRuwmo', 60.448573, 22.265756, '', '1'],
        ['Liikennepuisto', 'https://goo.gl/maps/5w2cQDb44FN2', 60.445343, 22.286750, '', '1'],
        ['Tivoli', 'https://goo.gl/maps/BJ56xnoRDoG2', 60.447317, 22.282734, '', '1'],
        ['Boost', 'https://goo.gl/maps/LXcbWE9Yi4D2', 60.450140, 22.293690, '', '1'],
        ['Kultainen Hirvi', 'https://goo.gl/maps/pE1mp13hDt22', 60.448055, 22.288839, 'Hyvää pubiruokaa, kaljaa', '2'],
        ['Delhi Darbar', 'https://goo.gl/maps/Az6CsFmsQdL2', 60.451895, 22.283035, 'Intialaista', '2'],
        ['Assarin Ullakko', 'https://goo.gl/maps/vVBpgbqa4oN2', 60.454302, 22.287526, 'Opiskelijaravintola, avoinna la 11-16', '2'],
        ['Hesburger', 'https://goo.gl/maps/ewNaMKwNHpM2', 60.445282, 22.301029, '', '2'],
        ['Stadionin pikapala', 'https://goo.gl/maps/TKdqVXyqGKU2', 60.442284, 22.294271, 'Grilli', '2'],
        ['Kupittaan Kebab & Pizzeria', 'https://goo.gl/maps/VqgG4RYqq6A2', 60.447192, 22.283035, '', '2'],
        ['Arezzo', 'https://goo.gl/maps/RsEkx9bbWrv', 60.450483, 22.278903, 'Kebab-pizzeria', '2'],
        ['Kotipizza', 'https://goo.gl/maps/357s9tyj3n92', 60.446235, 22.283900, '', '2'],
        ['Hesburger', 'https://goo.gl/maps/PP2zevUNrET2', 60.440123, 22.282498, '', '2'],
        ['Citymarket', 'https://goo.gl/maps/QU2s9CW48DN2', 60.441732, 22.286418, 'La 8-21', '3'],
        ['Alko', 'https://goo.gl/maps/Rvwkfa6JizF2', 60.442372, 22.286804, '', '4'],
        ['K-market', 'https://goo.gl/maps/vMmU17xiuus', 60.449335, 22.293491, 'La 9-21', '3'],
        ['K-market', 'https://goo.gl/maps/ayRxG5Em96u', 60.453080, 22.286861, 'La 7-23', '3'],
        ['Sale', 'https://goo.gl/maps/wg1M3yuvwbM2', 60.452193, 22.284499, 'La 10-23', '3'],
        ['K-Extra', 'https://goo.gl/maps/SQ1AtCQFXdA2', 60.452526, 22.283458, 'La 7-22', '3']
      ];
      var infowindow = new google.maps.InfoWindow();
      var marker, i;
      var path = ''
      var icons = [
        'http://titeeniappi.meteor.com/images/map/home.png',
        'http://titeeniappi.meteor.com/images/map/cut.png',
        'http://titeeniappi.meteor.com/images/map/restaurant.png',
        'http://titeeniappi.meteor.com/images/map/shop.png',
        'http://titeeniappi.meteor.com/images/map/alko.png'
      ];
      for (i in locations) {  
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][2], locations[i][3]),
          map: map.instance,
          title: locations[i][0],
          icon: icons[locations[i][5]]
        });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              infowindow.setContent('<h3>' + marker.title + '</h3>' + '<p>' + locations[i][4] + '</p><p><a href="' + locations[i][1] + '" target="_blank">Google Maps -linkki</a></p>');
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

// if (Meteor.isClient) {
//   Meteor.startup(function() {
//     return React.render(<MapComponent />, document.getElementById('root'));
//   });
// }