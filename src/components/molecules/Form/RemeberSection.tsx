import PasswordLink from "../../atoms/Form/PasswordLink";
import RememberField from "./RememberField";

export default function RememberSection() {
    return (
        <div className="flex items-center justify-between">
            <RememberField />
            <PasswordLink />
        </div>
    )
}