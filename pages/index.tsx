import styles from '/styles/Home.module.scss'

export default function Home() {
  return (
    // <div className={styles.container}>
    <div>
      <h1 className={styles.title}>My Title</h1>
      <h1>Welcome to Next.js SASS example</h1>
      <ul>
        <li>
          <a href="#">Link1</a>
        </li>
        <li>
          <a href="#">Link2</a>
        </li>
        <li>
          <a href="#">Link3</a>
        </li>
      </ul>
    </div>
  );
}
