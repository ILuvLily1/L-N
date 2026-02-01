export default function Footer() {
  return (
    <section className="py-0 pt-7">
      <div className="container">
        <div className="row">
          <div className="col-6 col-lg-2 mb-3" />
        </div>
        <div className="border-bottom border-3" />
        <div className="row flex-center my-3">
          <div className="col-md-6 order-1 order-md-0">
            <p className="my-2 text-1000 text-center text-md-start">L&N Shop</p>
          </div>
          <div className="col-md-6">
            <div className="text-center text-md-end">
              <a href="#!">
                <span className="me-4" data-feather="facebook" />
              </a>
              <a href="#!">
                <span className="me-4" data-feather="instagram" />
              </a>
              <a href="#!">
                <span className="me-4" data-feather="youtube" />
              </a>
              <a href="#!">
                <span className="me-4" data-feather="twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
