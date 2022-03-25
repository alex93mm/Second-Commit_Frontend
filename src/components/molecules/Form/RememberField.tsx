import FieldInput from "../../atoms/Form/FieldInput"
import Label from "../../atoms/Form/Label"
import SpanText from "../../atoms/SpanText"

export default function RememberField() {

    const props = {
        type: 'checkbox',
        name: 'remember',
        id: 'remember',
        place: '',
    }

    return (
        <div>
            <Label element="email">
                <div className="flex items-center space-x-2">
                    <FieldInput props={props} />
                    <SpanText>
                        Recuérdame
                    </SpanText>
                </div>
            </Label>
        </div>
    )
}
