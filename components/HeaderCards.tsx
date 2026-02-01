import Image from 'next/image';
import Link from 'next/link';

export default function HeaderCards() {
  return (
    <section className="py-0" id="header" style={{ marginTop: '-23rem' }}>
      <div className="container">
        <div className="row g-0">
          <div className="col-md-6">
            <div className="card card-span h-100 text-white">
              <Image
                className="img-fluid"
                src="/assets/img/dress/A11.png"
                width={790}
                height={500}
                alt="For Her"
              />
              <div className="card-img-overlay d-flex flex-center">
                <Link className="btn btn-lg btn-light" href="#">
                  For Her
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card card-span h-100 text-white">
              <Image
                className="img-fluid"
                src="/assets/img/dress/A11a.png"
                width={790}
                height={500}
                alt=""
              />
              <div className="card-img-overlay d-flex flex-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
