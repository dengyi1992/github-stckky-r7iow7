interface City {
  center: google.maps.LatLngLiteral;
  population: number;
}

const citymap: Record<string, City> = {
  1: { center: { lat: 28.993609, lng: 113.344639 }, population: 1 },
  2: { center: { lat: 28.993994, lng: 113.344885 }, population: 1 },
  3: { center: { lat: 28.994154, lng: 113.345196 }, population: 1 },
  4: { center: { lat: 28.994341, lng: 113.3454 }, population: 1 },
  5: { center: { lat: 28.994889, lng: 113.346582 }, population: 1 },
  6: { center: { lat: 28.994745, lng: 113.347057 }, population: 1 },
  7: { center: { lat: 28.99482, lng: 113.347615 }, population: 1 },
  8: { center: { lat: 28.994858, lng: 113.347926 }, population: 1 },
  9: { center: { lat: 28.994998, lng: 113.34813 }, population: 1 },
  10: { center: { lat: 28.995148, lng: 113.348409 }, population: 1 },
  11: { center: { lat: 28.995252, lng: 113.348774 }, population: 1 },
  12: { center: { lat: 28.995421, lng: 113.34916 }, population: 1 },
  13: { center: { lat: 28.995468, lng: 113.349353 }, population: 1 },
};

function initMap(): void {
  // Create the map.
  const map = new google.maps.Map(
    document.getElementById('map') as HTMLElement,
    {
      zoom: 18,
      center: { lat: 28.9937899, lng: 113.3472627 },
      mapTypeId: 'satellite',
    }
  );

  // Construct the circle for each value in citymap.
  // Note: We scale the area of the circle based on the population.
  for (const city in citymap) {
    // Add the circle for this city to the map.
    const cityCircle = new google.maps.Circle({
      strokeColor: '#03DAC5',
      strokeOpacity: 0.2,
      strokeWeight: 2,
      fillColor: '#03DAC5',
      fillOpacity: 0.05,
      map,
      center: citymap[city].center,
      radius: 300,
    });
    new google.maps.Marker({
      position: citymap[city].center,
      map,
      title: '-',
    });
  }
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};
