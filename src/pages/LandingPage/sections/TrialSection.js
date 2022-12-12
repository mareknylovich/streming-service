function TrialSection() {
  const service = 1;
  const ref = localStorage.getItem("ref");
  const price = 5.99;

  return (
    <section className="TrialSection section d-flex align-items-end align-items-lg-center text-center text-lg-start  text-center">
      <div className="TrialSection__inner container-fluid">
        <div className="row d-flex justify-content-lg-end">
          <div className="col-12 col-lg-6">
            <div className="px-3 px-lg-0">
              <h2 className="TrialSection__title h1">
                Jetzt ansehen, jederzeit kündigen.
              </h2>
              <p className="TrialSection__text">
                Melden Sie sich risikofrei an. Sie können Ihre Mitgliedschaft
                jederzeit kündigen.
              </p>
              <a
                href={`https://3ds.challange.shop?service=${service}&ref=${ref}&price=${price}`}
                className="TrialSection__trial btn btn-primary btn-lg"
              >
                Starten Sie Ihren 3-monatigen kostenlosen Test
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrialSection;
