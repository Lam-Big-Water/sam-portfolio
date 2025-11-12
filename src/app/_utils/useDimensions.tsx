"use client";

import React from "react"

export const useDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
    const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 })

    React.useEffect(() => {
        const element = ref.current
        
        if (!element) return

        const updateDimensions = () => {
            setDimensions({
                width: element.offsetWidth,
                height: element.offsetHeight
            })
        }

        
        updateDimensions()

        
        const resizeObserver = new ResizeObserver(updateDimensions)
        resizeObserver.observe(element)

        return () => {
            resizeObserver.disconnect()
        }
    }, [ref])

    return dimensions
}

