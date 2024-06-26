import { LevelContext } from "@/utilities/context/mycontext";
import { useActionState, useContext } from "react";

export default function Section({ children }: { children: any }) {
    const level = useContext(LevelContext);
    return (
        <section className="section">
            <LevelContext.Provider value={level}>
                {children}
            </LevelContext.Provider>
        </section>
    );
}