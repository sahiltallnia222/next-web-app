import styles from '@/styles/style.module.css'
import Head from 'next/head'
export default function Notfound() {
    return(
        <>  
        <Head>
          <title>
            404 - Page not found
          </title>
        </Head>
            <div className={styles.textGrad}>
            <h1
              className={`md:text-6xl text-4xl text-center font-bold flex items-center justify-center flex-col gap-6 pt-48 ${styles.textGrad}`}
            >
              <span>404</span><span>PAGE NOT FOUND</span>
            </h1>
            </div>
        </>
    )
};
