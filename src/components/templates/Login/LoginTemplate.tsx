import LoginBackground from "../../atoms/Login/LoginBackground";
import LogoOB from "../../atoms/LogoOB";
import Footer from "../../molecules/Footer/Footer";
import SloganSection from "../../molecules/Login/SloganSection";

type Props = {
    children: Object
}

export default function LoginTemplate({ children }: Props) {
    return (
        <div className="min-w-screen xl:grid-cols-[0.4fr_1fr] xl:grid bg-darkBlue">
            <div className="min-h-screen pt-24 bg-darkBlue">
                <div className="mx-auto space-y-16 w-80 ">
                    <LogoOB />
                    { children }
                    <Footer />
                </div>
            </div>
            <div className="hidden xl:block">
                <LoginBackground />
                <SloganSection />
            </div>
        </div>
    )
}
