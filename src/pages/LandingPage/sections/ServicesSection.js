import WatchImage from '../../../assets/images/watch.png'
import DownImage from '../../../assets/images/down.png'
import ServerImage from '../../../assets/images/server.png'
function ServicesSection() {
    return (
        <section className="ServicesSection section text-center">
            <div className="ServicesSection__inner container">
                <div className="row">
                    <div className="col-12 col-md-4 mb-5 mb-md-0">
                        <div className="ServicesSection__item ServicesItem px-3 px-md-0">
                            <div className="ServicesItem__image mb-4">
                                <img src={WatchImage} alt="" className="img-fluid"/>
                            </div>
                            <h6 className="ServicesItem__title fs-2 mb-4">
                                Überall <br/> schauen
                            </h6>
                            <p className="ServicesItem__text fs-6">
                                Enjoy viewing from your phone, tablet or selected Smart TVs - on up to 3 devices simultaneously.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mb-5 mb-md-0">
                        <div className="ServicesSection__item ServicesItem px-3 px-md-0">
                            <div className="ServicesItem__image mb-4">
                                <img src={DownImage} alt="" className="img-fluid"/>
                            </div>
                            <h6 className="ServicesItem__title fs-2 mb-4">
                                Downloaden <br/> und starten
                            </h6>
                            <p className="ServicesItem__text fs-6">
                              Offline ansehen, wenn Sie Titel auf Ihr iPhone, iPad, Tablet oder Android-Gerät herunterladen.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="ServicesSection__item ServicesItem px-3 px-md-0">
                            <div className="ServicesItem__image mb-4">
                                <img src={ServerImage} alt="" className="img-fluid"/>
                            </div>
                            <h6 className="ServicesItem__title fs-2 mb-4">
                                Speichern <br/> der Daten
                            </h6>
                            <p className="ServicesItem__text fs-6">
                                Kontrolle der Datennutzung beim Herunterladen und Anschauen von Videos auf ausgewählten Telefonen oder Tablets.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;