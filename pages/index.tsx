import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { MainLayout } from "../components/Layout/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
    return (
        <MainLayout>
            <div className={styles.description}>
                <h1>Home Page</h1>
                <p>
                    Get started by editing this&nbsp;
                    <code className={styles.code}>pages/index.js</code>
                </p>
                <h1 className={styles.title}>
                    Ir a <Link href="/about">About</Link>
                </h1>
            </div>
        </MainLayout>
    );
}
