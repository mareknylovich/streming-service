import DisneyLogo from "../../../assets/images/logos/disney.jpg";
import MaxdomeLogo from "../../../assets/images/logos/maxdome.png";
import NetflixLogo from "../../../assets/images/logos/netflix.png";
import PrimeVideoLogo from "../../../assets/images/logos/prime-video.png";
import RakutenTvLogo from "../../../assets/images/logos/rakuten-tv.png";
import SkyStoreLogo from "../../../assets/images/logos/sky-store.png";

function SponsorsSection() {
  return (
    <section className="SponsorsSection section text-center">
      <div className="SponsorsSection__inner container-fluid">
        <div className="px-3">
          <div className="row">
            <div className="col-12">
              <h2 className="SponsorsSection__title h1 mb-5">Sponsors</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-md-2 col-xl-2 px-2 mb-3">
              <a
                href="#"
                target="_blank"
                className="SponsorsSection__item overflow-hidden"
              >
                <img
                  src={DisneyLogo}
                  alt=""
                  className="SponsorsSection__image img-fluid"
                />
              </a>
            </div>
            <div className="col-6 col-md-2 col-xl-2 px-2 mb-3">
              <a
                href="#"
                target="_blank"
                className="SponsorsSection__item overflow-hidden"
              >
                <img
                  src={MaxdomeLogo}
                  alt=""
                  className="SponsorsSection__image img-fluid"
                />
              </a>
            </div>
            <div className="col-6 col-md-2 col-xl-2 px-2 mb-3">
              <a
                href="#"
                target="_blank"
                className="SponsorsSection__item overflow-hidden"
              >
                <img
                  src={NetflixLogo}
                  alt=""
                  className="SponsorsSection__image img-fluid"
                />
              </a>
            </div>
            <div className="col-6 col-md-2 col-xl-2 px-2 mb-3">
              <a
                href="#"
                target="_blank"
                className="SponsorsSection__item overflow-hidden"
              >
                <img
                  src={PrimeVideoLogo}
                  alt=""
                  className="SponsorsSection__image img-fluid"
                />
              </a>
            </div>
            <div className="col-6 col-md-2 col-xl-2 px-2 mb-3">
              <a
                href="#"
                target="_blank"
                className="SponsorsSection__item overflow-hidden"
              >
                <img
                  src={RakutenTvLogo}
                  alt=""
                  className="SponsorsSection__image img-fluid"
                />
              </a>
            </div>
            <div className="col-6 col-md-2 col-xl-2 px-2 mb-3">
              <a
                href="#"
                target="_blank"
                className="SponsorsSection__item overflow-hidden"
              >
                <img
                  src={SkyStoreLogo}
                  alt=""
                  className="SponsorsSection__image img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SponsorsSection;
