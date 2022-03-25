type Props = {
    children: Object
}
export default function SpanText({ children }: Props) {
    return (
        <span className="text-sm font-medium text-white">
            {children}
        </span>)
}
