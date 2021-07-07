import { useCallback, useEffect, useRef, useState } from "react";

export const useInfiniteScroll = ({
    onBottom,
    offsetY = 100,
}: {
    onBottom: () => void;
    offsetY?: number;
}) => {
    const ref = useRef<any>();
    const [loading, setLoading] = useState(false);

    const handleScroll = useCallback(
        (e: any) => {
            if (
                e.target.scrollHeight - e.target.scrollTop <=
                    e.target.clientHeight + offsetY &&
                !loading
            ) {
                setLoading(true);
                setTimeout(async () => {
                    await onBottom();
                }, 1000);

                setLoading(false);
            }
        },
        [onBottom, loading, setLoading, offsetY]
    );
    useEffect(() => {
        let targetElement: any;
        if (ref && ref.current) {
            targetElement = ref.current;
            targetElement.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (targetElement) {
                targetElement.removeEventListener("scroll", handleScroll);
            }
        };
    }, [handleScroll, ref]);
    return ref;
};
