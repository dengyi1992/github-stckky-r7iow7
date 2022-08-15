interface City {
  center: google.maps.LatLngLiteral;
  population: number;
  color: string;
}

const citymap: Record<string, City> = {
    1: {center:     {lat:28.998875761, lng:113.348858114},   population: 1,    color: '#ff0000',  },
    2: {center:     {lat:28.998037095, lng:113.350802943},   population: 1,    color: '#ff0099',  },
    3: {center:     {lat:28.998050891, lng:113.353666037},   population: 1,    color: '#ccff00',  },
    4: {center:     {lat:28.995428401, lng:113.352399595},   population: 1,    color: '#cc6600',  },
    5: {center:     {lat:28.996153030, lng:113.351122578},   population: 1,    color: '#cc0000',  },
    6: {center:     {lat:28.996598417, lng:113.349939649},   population: 1,    color: '#cc3399',  },
    7: {center:     {lat:28.996474179, lng:113.348503728},   population: 1,    color: '#993300',  },
    8: {center:     {lat:28.996044681, lng:113.347377591},   population: 1,    color: '#993399',  },
    9: {center:     {lat:28.995735549, lng:113.346886953},   population: 1,    color: '#66cc00',  },
    10: {center:    {lat:28.996583595, lng:113.346881623},   population: 1,    color: '#33ff00',  },
    11: {center:    {lat:28.997899669, lng:113.348505052},   population: 1,    color: '#ccff00',  },
    "4+": {center:  {lat:28.9957907155,lng:113.3517610865},  population: 1,    color: '#cc6600',  },
};

function initMap(): void {
  // Create the map.
  const map = new google.maps.Map(
    document.getElementById('map') as HTMLElement,
    {
      zoom: 18,
      center: { lat: 28.9937899, lng: 113.3472627 },
      mapTypeId: 'satellite',
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
      }
    }
  );

  // Construct the circle for each value in citymap.
  // Note: We scale the area of the circle based on the population.
  for (const city in citymap) {
    // Add the circle for this city to the map.
    const cityCircle = new google.maps.Circle({
      strokeColor: citymap[city].color,
      strokeOpacity: 0.2,
      strokeWeight: 2,
      fillColor: citymap[city].color,
      fillOpacity: 0.05,
      map,
      center: citymap[city].center,
      radius: 300,
    });
    new google.maps.Marker({
      position: citymap[city].center,
      map,
      title: city + '-' + JSON.stringify(citymap[city].center),
      label: `${city}`,
    });
  }
  const flightPlanCoordinates = [
    {lat:28.998875761, lng:113.348858114},
    {lat:28.998037095, lng:113.350802943},
    {lat:28.998050891, lng:113.353666037},
    {lat:28.995428401, lng:113.352399595},
    {lat:28.996153030, lng:113.351122578},
    {lat:28.996598417, lng:113.349939649},
    {lat:28.996474179, lng:113.348503728},
    {lat:28.996044681, lng:113.347377591},
    {lat:28.995735549, lng:113.346886953},
    {lat:28.996583595, lng:113.346881623},
    {lat:28.997899669, lng:113.348505052},
    {lat:28.998875761, lng:113.348858114},
  ];
  const flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  flightPath.setMap(map);
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};
//80
