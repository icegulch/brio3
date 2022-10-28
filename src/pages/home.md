---
title: With Brio
permalink: /
templateEngineOverride: njk
eleventyExcludeFromCollections: true
order: 0
specs:
  - Passports
  - Posters
  - Prints
blurb: "Hi! I'm Steve. I'm a New Hampshire native with a Colorado problem. I work in print and on the web. I sift through maps and tables looking for compelling stories in data. My sister, Kate, and I bring to life products that encourage kids and adults to get outdoors."
---

<div class="page-section page-section--compact-top">
  <div class="container-fluid container-fluid--maxwidth">
    <div class="row justify-content-center">
      {%- for product in collections.orderedProducts %}
      <div class="col-md-6 col-xl-4 showcase">
        <a href="{{ product.url | url }}" class="showcase__link">
          <figure class="showcase__img">
            <img src="{{ site.cloudinary_url }}f_auto/t_product_thumb/f_auto/{{ product.fileSlug }}-cover" class="img-fluid" width="720" height="480">
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

<div class="page-section page-section--compact-top">
  <div class="container">
    <blockquote class="blockquote">
      <div class="blockquote__quote">
        &ldquo;We have advanced by leaps to the Pacific, and left many a lesser Oregon and California unexplored behind us.&rdquo;
      </div>
      <footer class="blockquote__footer">
        &ndash; Henry David Thoreau, <cite>The Maine Woods</cite>
      </footer>
    </blockquote>
  </div>
</div>

