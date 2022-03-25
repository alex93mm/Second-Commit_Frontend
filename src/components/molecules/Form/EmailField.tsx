import FieldInput from "../../atoms/Form/FieldInput";
import Label from "../../atoms/Form/Label";

export default function EmailField() {

    const props = {
        type: 'email',
        name: 'email',
        id: 'email',
        place: 'Introduce tu email',
    }

  return (
    <div className="grid grid-cols-1 space-y-2">
        <Label element="email">Email</Label>
        <FieldInput props={ props } />
    </div>
  )
}
