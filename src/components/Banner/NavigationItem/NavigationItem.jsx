import './NavigationItem.css';

export default function NavigationItem({ name, children, ...props }) {
    return (
        <div {...props}>
            {children}
        </div>
    );
}