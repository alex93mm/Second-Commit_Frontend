import FieldInput from "../../atoms/Form/FieldInput";
import Label from "../../atoms/Form/Label";

export default function UserNameField() {

    const props = {
        type: 'username',
        name: 'username',
        id: 'username',
        place: 'Introduce tu nombre de usuario',
    }

  return (
    <div className="grid grid-cols-1 space-y-2">
        <Label element="username">Nombre de usuario</Label>
        <FieldInput props={ props } />
    </div>
  )
}
