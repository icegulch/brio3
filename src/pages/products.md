---
title: Products
permalink: /products/
templateEngineOverride: njk
order: 1
specs:
  - Passports
  - Posters
  - Prints
blurb: "In early 2015, I decided to give form to an idea that had long been simmering: a 'periodic table' of New Hampshire's 4000-foot mountains. It was intended to be a gift for one or two hiking friends. Several years and many print runs later, I'm still humbled by the positive reception. My sister and I continue to dream up products that abide by one simple principle: make things we would've enjoyed as a young hikers."
---

<div class="page-section page-section--compact-top">
  <div class="container-fluid container-fluid--maxwidth">
    <div class="row justify-content-center">
      {%- for product in collections.orderedProducts %}
      <div class="col-md-6 col-xl-4 showcase">
        <a href="{{ product.url | url }}" class="showcase__link">
          <figure class="showcase__img">
            <img src="{{ site.cloudinary_url }}/f_auto/t_product_thumb/f_auto/{{ product.fileSlug }}-cover" class="img-fluid" width="1500" height="1001">
            <figcaption class="pt-2 text-left">
              {{ product.data.title }}
            </figcaption>
          </figure>
        </a>
      </div>
      {%- endfor -%}
    </div>
  </div>
</div>
