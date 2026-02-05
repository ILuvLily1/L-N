'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Carousel } from 'react-bootstrap';

const DRESS_IMAGES = [
  'IMG_2712 (1).JPG', 'IMG_2713 (1).JPG', 'IMG_2714 (1).JPG', 'IMG_2719 (1).JPG', 'IMG_2720 (1).JPG',
  'IMG_2721 (1).JPG', 'IMG_2722 (1).JPG', 'IMG_2723.JPG', 'IMG_2727 (1).JPG', 'IMG_2728.JPG',
  'IMG_2730 (1).JPG', 'IMG_2734 (1).JPG', 'IMG_2735 (1).JPG', 'IMG_2736 (1).JPG', 'IMG_2741 (1).JPG',
  'IMG_2743 (1).JPG', 'IMG_2744.JPG', 'IMG_2745.JPG', 'IMG_2746 (1).JPG', 'IMG_2752 (1).JPG',
  'IMG_2753 (1).JPG', 'IMG_2754 (1).JPG', 'IMG_2755.JPG', 'IMG_2757.JPG', 'IMG_2765 (2).JPG',
  'IMG_2766 (2).JPG', 'IMG_2767 (2).JPG', 'IMG_2768 (1).JPG', 'IMG_2769 (2).JPG', 'IMG_2784.JPG',
  'IMG_2787.JPG', 'IMG_2788.JPG', 'IMG_2789.JPG', 'IMG_2792.PNG', 'IMG_2794.PNG', 'IMG_2796.PNG',
  'IMG_2798.PNG', 'IMG_2799.PNG', 'IMG_2800.PNG', 'IMG_2801.PNG', 'IMG_2803.PNG', 'IMG_2805.PNG',
  'IMG_2807.PNG', 'IMG_2809.PNG', 'IMG_2811.PNG', 'IMG_2812.PNG', 'IMG_2815.PNG', 'IMG_2816.PNG',
  'IMG_2817.PNG', 'IMG_2818.PNG', 'IMG_2819.PNG', 'IMG_2820.JPG', 'IMG_2821.JPG', 'IMG_2822.JPG',
  'IMG_2823.JPG', 'IMG_2824.JPG', 'IMG_2825.JPG', 'IMG_2826.JPG', 'IMG_2827.JPG', 'IMG_2828.JPG',
  'IMG_2829.JPG', 'IMG_2830.JPG', 'IMG_2831.JPG', 'IMG_2833.PNG', 'IMG_2834.JPG', 'IMG_2835.JPG',
  'IMG_2836.JPG', 'IMG_2837.JPG', 'IMG_2838.JPG', 'IMG_2856.PNG', 'IMG_2857.PNG', 'IMG_2858.PNG',
  'IMG_2859.PNG', 'IMG_2887.PNG', 'IMG_2888.PNG', 'IMG_2889.PNG', 'IMG_2893.PNG', 'IMG_2894.PNG',
  'IMG_2895.PNG', 'IMG_2896.PNG', 'IMG_2897.PNG', 'IMG_2898.PNG', 'IMG_2899.PNG', 'IMG_2900.PNG',
  'IMG_2901.PNG', 'IMG_2902.PNG', 'IMG_2903.PNG', 'IMG_2904.PNG', 'IMG_2906.PNG', 'IMG_2907.PNG',
  'IMG_2908.PNG', 'IMG_2909.PNG', 'IMG_2910.PNG', 'IMG_2912.PNG', 'IMG_2913.PNG', 'IMG_2914.PNG',
  'IMG_2915.PNG', 'IMG_2916.PNG', 'IMG_2917.PNG', 'IMG_2919.PNG', 'IMG_2920.PNG', 'IMG_2921.PNG',
  'IMG_2922.PNG', 'IMG_2924.PNG', 'IMG_2931.PNG', 'IMG_2932.PNG', 'IMG_2934.JPG', 'IMG_2935.JPG',
  'IMG_2936.JPG', 'IMG_2937.JPG', 'IMG_2938.JPG', 'IMG_2939.JPG', 'IMG_2940.JPG', 'IMG_2941.JPG',
  'IMG_2942.JPG',
];

const deals = DRESS_IMAGES.map((filename) => ({
  img: `/assets/img/dress/${encodeURIComponent(filename)}`,
  name: '',
  price: '$12.5',
}));

function DealCard({ img, name, price }: { img: string; name: string; price: string }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 mb-md-0 h-100">
      <div className="card card-span h-100 text-white overflow-hidden">
        <div className="best-deal-img-wrapper">
          <Image
            src={img}
            alt={name || img.split('/').pop() || 'Product'}
            fill
            sizes="(max-width: 576px) 100vw, (max-width: 768px) 50vw, (max-width: 992px) 33vw, 25vw"
            className="best-deal-img"
          />
        </div>
        <div className="card-img-overlay ps-0" />
        <div className="card-body ps-0 bg-200">
          {name ? <h5 className="fw-bold text-1000 text-truncate">{name}</h5> : null}
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
                  {deals.map((item, index) => (
                    <DealCard key={item.img} img={item.img} name={item.name} price={item.price} />
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
