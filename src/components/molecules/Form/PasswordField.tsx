import FieldInput from "../../atoms/Form/FieldInput";
import Label from "../../atoms/Form/Label";

export default function PasswordField() {

    const props = {
        type: 'password',
        name: 'password',
        id: 'password',
        place: 'Introduce tu contraseña',
    }

  return (
    <div className="grid grid-cols-1 space-y-2">
        <Label element="password">Contraseña</Label>
        <FieldInput props={ props } />
    </div>
  )
}