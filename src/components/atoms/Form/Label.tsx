type Props = {
    children: Object,
    element: string,
}

export default function Label({ children, element }: Props) {
    return (
        <label
            className="text-xs font-bold text-white"
            htmlFor={element}>
            {children}
        </label>
    )
}