import FieldInput from "../../atoms/Form/FieldInput";
import Label from "../../atoms/Form/Label";

export default function ConfirmPasswordField() {

    const props = {
        type: 'password',
        name: 'confirmPassword',
        id: 'confirmPassword',
        place: 'Repite la contraseña',
    }

  return (
    <div className="grid grid-cols-1 space-y-2">
        <Label element="confirmPassword">Confirma tu contraseña</Label>
        <FieldInput props={ props } />
    </div>
  )
}