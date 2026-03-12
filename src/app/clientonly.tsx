"use client";
import { useState, useEffect } from "react";

export default function ClientOnly({ children }: { children: React.ReactNode }) {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        // We return a hidden div with the same structure 
        // This keeps the animation "space" reserved without showing the bug
        return <div className="invisible">{children}</div>;
    }

    return <>{children}</>;
}