const getMoviesListMagically = () => {
  return new Promise((resolve, reject) => {
    fetch('/movie-list.json').then(res => {
      resolve(res.json());
    })
    .catch(err => {
      reject(err);
    }); 
  });
};

export { getMoviesListMagically };