import React, { useEffect, useState } from "react";
import { InView, useInView } from "react-intersection-observer";

function CircularProgress({ percent }) {
    const [progress, setProgress] = useState(0);
    const {ref , inView} = useInView({
        threshold: 0.5,
        triggerOnce : true
    })

    useEffect(() => {
        if (!inView) return;
        let current = 0;
        const timer = setInterval(() => {
        current++;
        setProgress(current);
        if (current >= percent) {
            clearInterval(timer);
        }
        }, 20); 
        return () => clearInterval(timer);
    }, [inView,percent ]);

    return (
        <div ref={ref}
        className="circle rounded-full flex items-center justify-center text-xl font-bold text-cyan-600"
        style={{
            background: `conic-gradient(#09a9c8 0deg ${progress * 3.6}deg, #ccc ${progress * 3.6}deg 360deg)`,
        }}
        >
        <span>{progress}%</span>
        </div>
    );
}

export default CircularProgress;
