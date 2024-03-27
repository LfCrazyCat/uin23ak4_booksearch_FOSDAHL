import Image from "next/image";
import Styles from '../Styles/BookCard.module.css'; 
import Styles from '../Styles/Container.module.css';

export default function Home() {
  return (
    <main className={style.main}>
      <div className={style.description}>
        <p>
          Get started by editing&nbsp;
          <code className={style.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={style.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={style.center}>
        <Image
          className={style.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={style.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={style.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Boksøk: <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="#"
          className={style.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="#"
          className={style.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="#"
          className={style.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Boksøk <span>-&gt;</span>
          </h2>
          <p>
            kan gjøres her
          </p>
        </a>
      </div>
    </main>
  );
}
