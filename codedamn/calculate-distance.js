function calculateArea(points) {
  if (points.length < 3 || points.length > 7) {
    throw new Error("Invalid number of points. Must be between 3 and 7.");
  }

  function toRadians(degrees) {
    return degrees * (Math.PI / 180);
  }

  function calculateShoelaceArea(coordinates) {
    const numPoints = coordinates.length;
    let area = 0;

    for (let i = 0; i < numPoints; i++) {
      const current = coordinates[i];
      const next = coordinates[(i + 1) % numPoints];
      area +=
        toRadians(next.lng - current.lng) *
        (2 + Math.sin(toRadians(current.lat)) + Math.sin(toRadians(next.lat)));
    }

    const radiusOfEarth = 6371000;
    return Math.abs((area * radiusOfEarth * radiusOfEarth) / 2);
  }

  const coordinates = points.map((point) => ({
    lat: point.latitude,
    lng: point.longitude,
  }));

  const area = calculateShoelaceArea(coordinates);

  return area;
}
