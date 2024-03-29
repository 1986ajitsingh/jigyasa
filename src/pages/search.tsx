import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/search.module.css'; // Assume you have this CSS module for styling

const Search: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    router.push({
      pathname: '/questions',
      query: { keyword }, // Pass the keyword as a query parameter
    });
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className={styles.searchInput}
        placeholder="Enter a keyword..."
      />
      <button onClick={handleSearch} className={styles.searchButton}>
        Search
      </button>
    </div>
  );
};

export default Search;
