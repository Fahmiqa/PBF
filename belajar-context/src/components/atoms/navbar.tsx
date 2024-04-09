import { ThemeContext } from "@/utilities/context/mycontext";
import { themes } from "@/utilities/themes/mythemes";
import Link from "next/link";
import { useContext } from "react";

export default function Navbar() {
    const { toogleTheme, theme } = useContext(ThemeContext);
    const newThemeName = theme == themes.dark ? 'light' : 'dark';
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 25,
            }}>
            <div>My Website</div>
            <div>
                <Link href="/">Home </Link>
                <Link href="/">about</Link>
                <Link href="/">contacts</Link>
                <Link href="/">profile</Link>
                <button onClick={toogleTheme}>Set {newThemeName}theme</button>
            </div>    
        </div>
    );
}