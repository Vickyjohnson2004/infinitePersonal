import React from "react";

const logos = [
  {
    src: "https://cdn.prod.website-files.com/628ef5003d1b8f677e814867/62c6944ca0087580bfbf92b3_img-partners-clients-cushmanwakefield.png",
    alt: "Cushman & Wakefield",
  },
  {
    src: "https://cdn.prod.website-files.com/628ef5003d1b8f677e814867/652925acc576df93df4ff53f_jas.png",
    alt: "JAS",
  },
  {
    src: "https://cdn.prod.website-files.com/628ef5003d1b8f677e814867/64a7ee2c2aef4a9c741bdc65_Fifth_Third_Bank.png",
    alt: "Fifth Third Bank",
  },
  {
    src: "https://cdn.prod.website-files.com/628ef5003d1b8f677e814867/672dae30adbe186673b22781_nexton.png",
    alt: "Nexton",
  },
  {
    src: "https://cdn.prod.website-files.com/628ef5003d1b8f677e814867/67bfe5b8099a6a0f9dabfc38_PNClogo1.svg",
    alt: "PNC Bank",
  },
  {
    src: "https://cdn.prod.website-files.com/628ef5003d1b8f677e814867/65292607e4171f39a051164e_dexus.png",
    alt: "Dexus",
  },
  {
    src: "https://cdn.prod.website-files.com/628ef5003d1b8f677e814867/64a7f33f2aef4a9c7421d9da_InSite.png",
    alt: "InSite",
  },
  {
    src: "https://cdn.prod.website-files.com/628ef5003d1b8f677e814867/672daf625464f10cf7b4b173_LBNL.png",
    alt: "LBNL",
  },
];

const TrustedPage = () => {
  return (
    <section className="w-full py-12">
      <p className="text-center text-sm uppercase tracking-widest text-gray-500 mb-8">
        Trusted by leading organizations
      </p>

      <div className="mx-auto max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            loading="lazy"
            className="h-8 sm:h-10 md:h-12 object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition"
          />
        ))}
      </div>
    </section>
  );
};

export default TrustedPage;
