export default function PaddedContainer({ className, biggerPadding, children }) {
    let classes = 'px-4 md:px-[5%] lg:px-[10%]';
    if (className) {
        classes = classes.concat(` ${className}`);
    }
    if (biggerPadding) {
        classes = classes.concat(` px-8`);
    }
    return <div className={classes}>{children}</div>;
}
