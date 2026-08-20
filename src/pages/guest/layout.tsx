import { Outlet } from "react-router";

import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";

export default function GuestLayout () {
    return (
        <>
        <Header />

        <main className="flex-1">
            <Outlet />
        </main>

        <Footer />
        </>
    )
}