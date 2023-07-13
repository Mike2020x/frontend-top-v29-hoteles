export default async function fetchSearch(hotelSearch) {
  try {
    const [responseHotel, responseLocation] = await Promise.all([
      fetch(`${import.meta.env.API_BASE_URL}/api/hotel`),
      fetch(`${import.meta.env.API_BASE_URL}/api/location`)
    ]);

    if (responseHotel.ok && responseLocation.ok) {
      const dataName = await responseHotel.json();
      const dataHotel = dataName.filter(element =>
        element.hotel.toLowerCase().includes(hotelSearch)
      );
      const hotelIds = dataHotel.map(element => element.id);

      const dataLocation = await responseLocation.json();
      const dataCity = dataLocation.filter(element =>
        element.city.toLowerCase().includes(hotelSearch)
      );
      const locationIds = dataCity.map(element => element.id);

      const uniqueIdsSet = new Set([...hotelIds, ...locationIds]);
      const uniqueIds = [...uniqueIdsSet];
      return uniqueIds;
    }
  } catch (error) {
    console.error("Error fetching APIs hotel and location:", error);
  }
}
