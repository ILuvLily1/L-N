'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Carousel } from 'react-bootstrap';

const deals = [
  { img: '/assets/img/dress/A11.png', name: 'A11 ខៀវ', price: '$12.5' },
  { img: '/assets/img/dress/A11a.png', name: 'A11 សូកូឡា', price: '$12.5' },
  { img: '/assets/img/dress/A11b.png', name: 'A11 ទឹកក្រូច', price: '$12.5' },
  { img: '/assets/img/dress/A11c.png', name: 'A11 ឈូក', price: '$12.5' },
  { img: '/assets/img/dress/A11d.png', name: 'A11 លឿង', price: '$12.5' },
];

function DealCard({ img, name, price }: { img: string; name: string; price: string }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 mb-md-0 h-100">
      <div className="card card-span h-100 text-white overflow-hidden">
        <div className="best-deal-img-wrapper">
          <Image
            src={img}
            alt={name}
            fill
            sizes="(max-width: 576px) 100vw, (max-width: 768px) 50vw, (max-width: 992px) 33vw, 25vw"
            className="best-deal-img"
          />
        </div>
        <div className="card-img-overlay ps-0" />
        <div className="card-body ps-0 bg-200">
          <h5 className="fw-bold text-1000 text-truncate">{name}</h5>
          <div className="fw-bold">
            <span className="text-primary">{price}</span>
          </div>
        </div>
        <Link className="stretched-link" href="#" />
      </div>
    </div>
  );
}

export default function BestDeals() {
  return (
    <section className="py-0">
      <div className="container">
        <div className="row h-100">
          <div className="col-lg-7 mx-auto text-center mt-7 mb-5">
            <h5 className="fw-bold fs-3 fs-lg-5 lh-sm">Best Deals</h5>
          </div>
          <div className="col-12">
            <Carousel controls indicators={false} touch={false} interval={null}>
              <Carousel.Item>
                <div className="row h-100 align-items-center g-2">
                  {deals.map((item) => (
                    <DealCard key={item.name} img={item.img} name={item.name} price={item.price} />
                  ))}
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-12 d-flex justify-content-center mt-5">
            <Link className="btn btn-lg btn-dark" href="#">
              View All
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
