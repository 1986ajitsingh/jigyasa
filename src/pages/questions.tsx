import { useState } from 'react';
import questionsData from '../../public/questions.json';
import styles from '../styles/questions.module.css';
import { useRouter } from 'next/router';

interface Question {
  id: number;
  question: string;
  answer: string;
}

const Questions: React.FC = () => {
  const router = useRouter();
  const { keyword } = router.query; // Access the keyword from the query parameters
  const [questions] = useState<Question[]>(questionsData);

  return (
    <div className={styles.questionsContainer}>
      {/* Display the keyword or implement filtering */}
      {keyword && <p className={styles.keywordDisplay}>Search keyword: {keyword}</p>}
      
      {questions.map((q) => (
        <div key={q.id} className={styles.questionItem}>
          <h3 className={styles.questionTitle}>{q.question}</h3>
          <p className={styles.questionBody}>{q.answer}</p>
          <div className={styles.buttonsContainer}>
            <button className={styles.likeButton}>Like</button>
            <button className={styles.dislikeButton}>Dislike</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Questions;
