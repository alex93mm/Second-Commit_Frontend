import logo from "../../resources/icons/Logo_OB.svg";

export default function LogoOB() {
    return (
        <div className="flex items-center gap-2 place-content-center">
            <img className="w-12 h-12" src={logo} />
            <h2 className="text-xl font-semibold leading-5 text-white font-poppins">
                <p>
                    Open
                </p>
                <p>
                    Bootcamp
                </p>
            </h2>
        </div>
    )
}