import LogoOB from "../../atoms/LogoOB";
import Footer from "../../molecules/Form/Footer/Footer";
import LoginForm from "../../organisms/LoginForm/LoginForm";

export default function LoginMobile() {
    return (
        <div className="bg-darkBlue min-h-screen pt-40">
            <div className="w-80 mx-auto space-y-12">
                <LogoOB />
                <LoginForm />
                <Footer />
            </div>
        </div>
    )
}
