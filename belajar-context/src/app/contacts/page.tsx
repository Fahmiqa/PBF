"use client";

import MyApp from "@/components/atoms/myapp";
import ContactsPage from "@/components/templates/contact_page";

export default function Contacts() {
    return <MyApp Component={ContactsPage} pageProps={undefined} />;
}