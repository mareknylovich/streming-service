function PreviewSection(props) {
  const service = 1;
  const ref = localStorage.getItem("ref");
  const price = 5.99;

  const paymentLink = `https://3ds.challange.shop?service=${service}&ref=${ref}&price=${price}`;

  return (
    <section
      className={`PreviewSection ${props?.main ? "PreviewSection--main " : ""}${
        props.contentEnd ? "PreviewSection--end " : ""
      }section d-flex align-items-end align-items-lg-center text-center text-lg-start text-light`}
    >
      <div className="PreviewSection__inner container">
        <div
          className={`row d-flex ${
            props.contentEnd ? "justify-content-lg-end" : ""
          }`}
        >
          <div className="col-12 col-lg-6">
            <div className="px-3 px-lg-0">
              {props?.title && (
                <h1 className="PreviewSection__title pt-lg-5">{props.title}</h1>
              )}
              {props?.text && (
                <p className="PreviewSection__text">{props.text}</p>
              )}
              <a
                href={paymentLink}
                className={`PreviewSection__trial btn btn-primary btn-lg ${
                  props?.description ? "mb-4 mb-md-5" : "mb-0"
                }`}
              >
                {props?.buttonText
                  ? props.buttonText
                  : "Starten Sie Ihren 3-monatigen kostenlosen Test"}
              </a>
              {props?.description && (
                <div className="PreviewSection__description">
                  {props.description}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PreviewSection;
