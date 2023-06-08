import { useRouter } from "next/router";

export default function Button({ size, color, rounded, className, cta, moves, onClick, children }) {
    const router = useRouter()
    let classes = 'btn';
    if (size === 'lg') {
        classes = classes.concat(' btn-lg');
    }
    if (color === 'primary') {
        classes = classes.concat(' btn-primary');
    }
    if (color === 'secondary') {
        classes = classes.concat(' btn-secondary');
    }
    if (color === 'transparent') {
        classes = classes.concat(' border-gray-300 border-2 text-gray-700');
    }
    if (rounded) {
        classes = classes.concat(' rounded-full');
    } else {
        classes = classes.concat(' rounded');
    }
    if (moves) {
        classes = classes.concat(` transition-all duration-500 btn-moves`);
    }
    if (className) {
        classes = classes.concat(` ${className}`);
    }

    const onClickFunc = () => {
        if (cta) {
            router.push('/login')
        } else if (onClick) {
            onClick()
        }
    }

    return <button className={classes} onClick={onClickFunc}>{children}</button>;
}
