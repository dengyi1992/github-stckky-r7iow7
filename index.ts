interface City {
  center: google.maps.LatLngLiteral;
  population: number;
  color: string;
}

const citymap: Record<string, City> = {
    1: {center:     {lat:28.998374489,lng:113.348871901}, population: 1,    color: '#ff0000',  },
    2: {center:     {lat:28.997535837,lng:113.350816688}, population: 1,    color: '#ff0099',  },
    3: {center:     {lat:28.997549632,lng:113.353679721}, population: 1,    color: '#ccff00',  },
    4: {center:     {lat:28.994927188,lng:113.352413306}, population: 1,    color: '#cc6600',  },
    5: {center:     {lat:28.995651804,lng:113.351136316}, population: 1,    color: '#cc0000',  },
    6: {center:     {lat:28.996097184,lng:113.349953412}, population: 1,    color: '#cc3399',  },
    7: {center:     {lat:28.995972949,lng:113.348517521}, population: 1,    color: '#993300',  },
    8: {center:     {lat:28.995543458,lng:113.347391408}, population: 1,    color: '#993399',  },
    9: {center:     {lat:28.995234331,lng:113.346900781}, population: 1,    color: '#66cc00',  },
    10: {center:    {lat:28.996082363,lng:113.346895451}, population: 1,    color: '#33ff00',  },
    11: {center:    {lat:28.997398415,lng:113.348518846}, population: 1,    color: '#ccff00',  },
    "4+": {center:  {lat:28.995289496,lng:113.351774811},  population: 1,    color: '#cc6600',  },
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
    {lat:28.998374489,lng:113.348871901},
    {lat:28.997535837,lng:113.350816688},
    {lat:28.997549632,lng:113.353679721},
    {lat:28.994927188,lng:113.352413306},
    {lat:28.995651804,lng:113.351136316},
    {lat:28.996097184,lng:113.349953412},
    {lat:28.995972949,lng:113.348517521},
    {lat:28.995543458,lng:113.347391408},
    {lat:28.995234331,lng:113.346900781},
    {lat:28.996082363,lng:113.346895451},
    {lat:28.997398415,lng:113.348518846},
    {lat:28.998374489,lng:113.348871901},
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
