import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { MainLayout } from "../components/Layout/MainLayout";

const ContactPage = () => {
    return (
        <MainLayout>
            <div className={styles.description}>
                <h1>Contact Page</h1>
                <p>
                    Get started by editing this&nbsp;
                    <code className={styles.code}>pages/contact.jsx</code>
                </p>
                <h1 className={styles.title}>
                    Ir a <Link href="/">Home</Link>
                </h1>
            </div>
        </MainLayout>
    );
};

export default ContactPage;
