import { ReactNode } from "react";
import { MainLayout } from "../../components/Layout/MainLayout";

export default function PricingPage() {
    return (
        <>
            <h1>Pricing Page</h1>
        </>
    );
}


PricingPage.getLayout = function getLayout(page: ReactNode) {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}