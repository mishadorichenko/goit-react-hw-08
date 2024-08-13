import css from './HomePage.module.css';

function HomePage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        <span role="img" aria-label="Greeting icon">
          📒
        </span>
        Book for your contacts{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
}

export default HomePage;
