type Props = {
    children: Object
}

export default function ButtonSubmit({ children }: Props) {
    return (
        <button className="p-4 min-w-full text-sm font-bold transition duration-300 ease-in-out rounded-lg bg-greenOB hover:brightness-75"
            type="submit">
                {children}
        </button>
    )
}
