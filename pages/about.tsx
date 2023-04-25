import { ReactNode } from "react";

import Link from "next/link";

import { DarkLayout } from "../components/Layout/DarkLayout";
import { MainLayout } from "../components/Layout/MainLayout";
import styles from "../styles/Home.module.css";

export default function AboutPage() {
    return (
        <div className={styles.description}>
            <h1>About Page</h1>
            <p>
                Get started by editing this&nbsp;
                <code className={styles.code}>pages/about.jsx</code>
            </p>
            <h1 className={styles.title}>
                Ir a <Link href="/">Home</Link>
            </h1>
        </div>
    );
}

AboutPage.getLayout = function getLayout(page: ReactNode) {
    return (
        <MainLayout>
            <DarkLayout>{page}</DarkLayout>
        </MainLayout>
    );
};
