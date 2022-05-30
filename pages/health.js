import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/Feed.module.css';
import { Toolbar } from '../components/toolbar';
import {ToolbarNews} from '../components/toolbarnews';

export const Feed = ({articles}) => {
 
  return (
    <div className="page-container">
    
    

    <div className={styles.main}>
      {articles.map((article, index) => (
        <div key={index} className={styles.post}>
          <h1 onClick={() => (window.location.href = article.url)}>{article.title}</h1>
          <p>{article.description}</p>
          <p className={styles.source}>Source:{article.source.name}</p>
          {!!article.urlToImage && <img src={article.urlToImage} />}
        </div>
      ))}
    </div>
    </div>
    )
      };


export const getServerSideProps = async pageContext => {
  
  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=0c63fd9d382a410fa7510e519db70850`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    },
  ).then(res => res.json());

  const { articles } = apiResponse;

  return {
    props: {
      articles: articles,
      
    },
  };
}

export default Feed;