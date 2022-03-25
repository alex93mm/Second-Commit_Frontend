import { Field } from "formik";

type Props = {
    props: {
        id: string,
        type: string,
        name: string,
        place: string
    }
}

export default function FieldInput({ props }: Props) {
    return (
        <Field
            className="h-10 pl-5 text-xs font-bold text-white border rounded-lg bg-darkBlue bg-gradient-to-r from-slate-800 border-slate-600"
            type={props.type}
            id={props.id}
            name={props.name}
            placeholder={props.place} />
    )
}
