import AppLogo from './AppLogo'
import FooterNav from './FooterNav'

function AppFooter() {
    return (
        <footer className="AppFooter bg-dark text-secondary py-5">
            <div className="AppFooter__inner container d-flex flex-column align-items-center">
                <div className="mb-5">
                    <a href="#">
                        <AppLogo
                            remWidth="9"
                            color={true}
                        />
                    </a>
                </div>
                <div className="mb-5">
                    <FooterNav />
                </div>
                <p className="AppFooter__sign fs-6 fw-light">
                    © 1996-2022, Amazon.com, Inc. or its affiliates
                </p>
            </div>
        </footer>
    );
}

export default AppFooter;