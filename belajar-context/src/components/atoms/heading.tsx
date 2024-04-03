import { LevelContext } from "@/utilities/context/mycontext";
import { useContext } from "react";
export default function Heading({ children }: { level: number; children: any }) {
    const level = useContext(LevelContext);
   return (
    <section className="section">
        <LevelContext.Provider value={level}>
            {children}
        </LevelContext.Provider>
    </section>
   );
}