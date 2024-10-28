import React, { useState, useEffect } from 'react';

const PartialLoader = ({ resource = 'posts' }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const itemsPerPage = 5; // Скільки елементів завантажувати за раз

  // Функція для завантаження даних
  const fetchData = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${resource}?_limit=${itemsPerPage}&_page=${page}`
      );
      const result = await response.json();
      setData((prevData) => [...prevData, ...result]); // Додаємо нові дані до наявних
      setLoading(false);
    } catch (err) {
      setError('Failed to load data');
      setLoading(false);
    }
  };

  // Завантаження даних при першому рендері
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1); // Збільшуємо сторінку і завантажуємо наступну частину
  };

  return (
    <div className="container mt-4">
      <h3>{resource.toUpperCase()}</h3>
      {data.length > 0 ? (
        <ul className="list-group">
          {data.map((item) => (
            <li key={item.id} className="list-group-item">
              {resource === 'posts' ? item.title : item.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No data loaded</p>
      )}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && (
        <button className="btn btn-primary mt-3" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default PartialLoader;
