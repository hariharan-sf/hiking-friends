# Hatton Hiking Website -- Homepage Sections (Content)

## Featured Hiking Packages

Explore our most popular hikes around Hatton. Each hike is guided by a
local guide who knows the trails well.

### Adam's Peak Sunrise Hike

Watch the sunrise from one of the most famous mountains in Sri Lanka.
This hike starts early in the morning and ends with an amazing view from
the top.

### Tea Plantation Trail Walk

Walk through beautiful tea estates and small village paths. Learn how
tea is grown while enjoying the cool mountain air.

### Hatton Waterfall Adventure

Visit hidden waterfalls around Hatton. This hike includes forest paths
and great photo spots.

### Horton Plains + Hatton Combo

A full day trip that combines hiking in Hatton with a visit to Horton
Plains National Park.

### Multi‑Day Hill Country Trek

A longer adventure for people who love hiking. Explore mountains,
forests, and tea country over several days.

Button text: **View All Hiking Packages**

------------------------------------------------------------------------

## Why Hike With Us

### Local Guides

Our guides are from Hatton. They know the safest and most beautiful
trails.

### Small Groups

We keep groups small so everyone can enjoy the hike.

### Safe Hiking

Safety is very important to us. Our guides are trained and prepared.

### Real Local Experience

You will see places most tourists never see.

------------------------------------------------------------------------

## Discover Hatton

Hatton is one of the most beautiful places in Sri Lanka's hill country.
The area is known for tea plantations, cool weather, mountains, and
waterfalls.

Many famous hiking spots are close to Hatton such as Adam's Peak and
Horton Plains. The area is perfect for travelers who love nature and
outdoor adventures.

Button text: **Learn More About Hatton**

------------------------------------------------------------------------

## Popular Hiking Trails in Hatton

### Adam's Peak Trail

One of the most famous hikes in Sri Lanka. Many people climb it to see
the sunrise.

### Gartmore Waterfall Trail

A peaceful hike through forest and tea estates that leads to a beautiful
waterfall.

### Tea Estate Trails

Easy walking paths through green tea plantations with amazing views.

### Horton Plains Trails

Explore one of Sri Lanka's most famous national parks.

------------------------------------------------------------------------

⭐⭐⭐⭐⭐\
"This was one of the best experiences in Sri Lanka. The views were
amazing and our guide was very friendly."\
--- Sarah, UK

⭐⭐⭐⭐⭐\
"The hike was safe, fun, and very beautiful. We saw waterfalls and tea
plantations."\
--- Daniel, Germany

⭐⭐⭐⭐⭐\
"Our guide showed us hidden trails that we would never find on our
own."\
--- Emma, Australia

------------------------------------------------------------------------

## Hiking Guides and Travel Tips

Read our guides to learn more about Hatton and hiking in Sri Lanka.

### What to Do in Hatton Sri Lanka

A simple guide to the best places and activities in Hatton.

### Best Hiking Trails in Hatton

Discover the top trails with the best views.

### Adam's Peak Hiking Guide

Everything you need to know before climbing Adam's Peak.

### Hidden Waterfalls in Hatton

Explore some of the most beautiful waterfalls in the area.

Button text: **Read Our Blog**

------------------------------------------------------------------------

## Photo Gallery

See what your hiking adventure could look like.

Photos may include: - Tea plantation views - Mountain trails -
Waterfalls - Sunrise hikes - Forest paths

------------------------------------------------------------------------

## Ready for Your Hatton Adventure

Start your hiking journey today. Our guides are ready to show you the
best trails in Hatton.

Buttons: **Book a Hike** **Contact Us on WhatsApp**

------------------------------------------------------------------------

## Frequently Asked Questions

### Is hiking in Hatton safe?

Yes. Our guides know the trails and will guide you safely.

### What should I bring for a hike?

Comfortable shoes, water, sunscreen, and a light jacket.

### Are the hikes good for beginners?

Yes. We offer hikes for beginners and experienced hikers.

### Do you provide transport?

Yes. Transport can be arranged depending on the package.

### What is the best time to hike in Hatton?

Early morning is the best time because the weather is cool and the views
are clear.



Adam’s Peak
A world-renowned mountain sanctuary near Hatton, Adam’s Peak offers a refined blend of spiritual heritage, cool highland air, and unforgettable sunrise views.

Adisham Bungalow
A timeless colonial retreat in the hill country, Adisham Bungalow charms visitors with elegant architecture, peaceful gardens, and a distinctly heritage atmosphere.

Devon Falls
Set amid rolling tea estates, Devon Falls is a graceful natural landmark celebrated for its misty beauty and scenic hill country setting.

Laxapana Falls
One of Sri Lanka’s most striking waterfalls, Laxapana Falls captivates with its dramatic cascade, lush surroundings, and serene highland appeal.




Build a pixel-perfect desktop-only “Featured Properties” section in a Next.js app using React, TypeScript, and Tailwind CSS.

Goal:
Recreate a luxury hotel/property carousel section with a centered active card, partially visible adjacent cards, smooth infinite looping, and editorial-style typography.

Layout requirements:
- Full-width section on a very light gray / off-white background.
- Centered heading at the top:
  - Line 1: “Discover our best”
  - Line 2: “properties here”
- Heading should feel premium and minimal:
  - dark gray text
  - modern sans-serif
  - medium weight
  - tight line-height
  - centered
- Large spacing between heading and carousel.

Carousel requirements:
- Desktop version only.
- Horizontal looping slider with 5 visible cards at once:
  - 1 active card in the center
  - 2 partially visible cards on the left
  - 2 partially visible cards on the right
- The active center card is visually dominant:
  - slightly larger than neighboring cards
  - full opacity
  - subtle elevation
- Non-active cards:
  - slightly smaller
  - reduced opacity
  - visually recede into background
- Cards must have large rounded corners.
- Smooth animated transitions using transform and opacity.
- Infinite loop behavior is required:
  - the carousel must wrap seamlessly in both directions
  - example: the center card can be the first item in the data array, while the card immediately to its right can be the last item because of looping
- The loop should not visibly “jump” or reset.
- Support autoplay with slow movement, but also allow manual navigation.
- Pause autoplay on hover.
- Add drag / swipe support if possible, but desktop priority first.

Card design:
- Cards are portrait-oriented with image-only visible in the slider row.
- Images should fully cover the card with object-cover.
- No text overlay inside the cards.
- Active card width and height should be slightly larger than surrounding cards.
- Approximate visual balance:
  - center card around 280–320px wide and 360–430px tall
  - side cards slightly narrower and shorter
- Maintain elegant spacing between cards.

Active card content block:
- Under the slider, show the content for the active card only.
- Center the content block below the active card.
- Include:
  - property title
  - short luxury description
- Typography:
  - title medium or semibold
  - description smaller, muted gray, centered, max-width constrained
- The text below should update as the active card changes.

Behavior details:
- Carousel should feel premium, calm, and cinematic.
- Use spring-like or eased transitions.
- No harsh snapping.
- Keep motion subtle and polished.
- Maintain exact centered alignment of the active card.
- Cards should reposition based on relative index from active card.
- Use modular arithmetic to calculate visible neighbors in a true circular loop.

Implementation details:
- Create this as a reusable Next.js component.
- Use TypeScript.
- Use Tailwind CSS for styling.
- Do not use a generic basic slider appearance.
- Prefer custom positioning logic for a premium carousel effect.
- Structure the code cleanly with:
  - sample data array
  - active index state
  - autoplay effect
  - loop-safe index helpers
  - transform logic based on relative position
- Use Next.js Image component.
- Ensure the component is responsive enough to degrade gracefully, but optimize specifically for desktop.
- Avoid layout shift.
- Make the component production-quality.

Data shape:
Use an array like:
{
  id: string;
  title: string;
  description: string;
  image: string;
}

Visual style:
- premium travel / hospitality website
- airy composition
- luxury editorial aesthetic
- understated
- soft gray background
- balanced white space
- rounded image cards
- subtle motion
- elegant typography

Important logic requirement:
Implement true infinite looping. The visible cards should be derived relative to the active index using wrapped indexing, so neighboring cards may come from the end or beginning of the array without breaking layout.

Deliver:
- one complete React component
- include mock data
- include all Tailwind classes
- no placeholder pseudocode
- production-ready code