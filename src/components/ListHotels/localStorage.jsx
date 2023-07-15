const cleanExpiredSearches = () => {
  const storedSearches = localStorage.getItem("searches");
  if (storedSearches) {
    const searches = JSON.parse(storedSearches);
    const currentTime = new Date().getTime();
    const updatedSearches = searches.filter((search) => {
      const searchTime = new Date(search.createdAt).getTime();
      const timeDifference = currentTime - searchTime;
      const sevenDaysInMilliseconds = 7 * 24 * 60 * 60 * 1000; // 7 días en milisegundos
      return timeDifference <= sevenDaysInMilliseconds;
    });
    localStorage.setItem("searches", JSON.stringify(updatedSearches));
  }
};

export default cleanExpiredSearches;
