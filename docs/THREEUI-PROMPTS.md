# ThreeUI — Prompt tích hợp exact-source (bộ nhớ dự án)

> Nguồn chính: `@designcodeio/threeui` (threeui.com). Bộ prompt này dùng lại được cho bất kỳ lần nâng cấp nào.

---

## 1. `<SylvaHero />` — Living Green

```md
# Integrate <SylvaHero /> from ThreeUI using its exact source

You are working in an existing application. Implement this component from the exact source
linked or included below. Do not recreate it from the preview, screenshot, description, or filename.

Component: `SylvaHero`
Runtime: Full HTML + DOM/CSS + JavaScript + Three.js
Source revision: `SHA-256 05f359ce157a`

Reference brief:
A living moss garden rendered live in WebGL — procedurally swept root geometry with
~130,000 instanced moss blades, liquid-metal WebGL2 buttons, and a landing butterfly
that reacts to the cursor.

## Current configured usage

```tsx
import { SylvaHero } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";

export function Scene() {
  return (
    <div className="shader-frame">
      <SylvaHero
        headingFont="lexend"
        bodyFont="lexend"
        headingWeight="300"
        bodyWeight="300"
        primaryColor="#ffffff"
        headingSize={72}
        bodySize={16}
        headingLetterSpacing={-0.020}
      />
    </div>
  );
}
```

## Exact implementation source

Canonical HTML: https://threeui.com/landing-pages/inner-green-3d.html
Complete registered source bundle: https://threeui.com/source-code/inner-green-landing-page.json

Required registered files:

- `src/shaders/landing-pages/LandingPages.tsx` — component · SHA-256 `4d379461ad00eb4de7900df312878035383de7e1ed4e13283b8143a2eea9d30a`
- `src/shaders/landing-pages/pageTypography.ts` — controls-source · SHA-256 `809cc65797d531cd3b3ca5a56815d55d24b3ee8d293e4e4bad6fdfe6c83244cc`
- `src/shaders/landing-pages/pageRecipes.ts` — controls-source · SHA-256 `c9d9849cc255bac2d1d938d088c50917f84916f1c516d2bbb27fcfd803523233`
- `src/shaders/landing-pages/LandingPageFrame.tsx` — frame-component · SHA-256 `61de2cc50888aac4ac5557420b07fa47ed3543bb57c1e0055fafdefa53dbaa78`
- `public/landing-pages/inner-green-3d.html` — canonical-source · SHA-256 `05f359ce157a`
- `src/shaders/threeui.css` — shared-style · SHA-256 `efe4447139f1358dd8e9be68edf6fa46cbefbd1de423a4d6c439ca61d2c8eccf`

Required binary assets:

| Path | Bytes | SHA-256 |
| --- | ---: | --- |
| `public/landing-pages/inner-green-assets/three.min.js` | 608081 | `8a5f7249903b54d30f79f708699d2fed2d6a1d0741a4cd41377d1f01bb5a2271` |
| `public/landing-pages/inner-green-assets/card-ethos.jpg` | — | `337627390f499b3ae272cec9e2f83c817694a82f42e1aa10a7b26a2c7d679dff` |
| `public/landing-pages/inner-green-assets/card-ecostove.jpg` | — | `70ce084084902bc502f00c366405b661ecdff90dee95d363b36a6e146829e433` |
| `public/landing-pages/inner-green-assets/lexend-latin.woff2` | — | `1ec8f6ee2750554b4bc59ff0b507d316a82a7ba37e0e5bebc41d3bd9b9faad46` |

## Implementation requirements

- Preserve the authored structure, styling, shaders, motion, interactions, responsive behavior, dependencies, and asset paths described by the source.
- Use the configured `<SylvaHero />` usage above, including the selected variant and props.
- Build directly in the destination project. Do not embed the ThreeUI documentation page and do not approximate the result from its rendered appearance.
- Fetch and read the complete source before editing. If the source cannot be retrieved, stop and report that instead of recreating it.
- After implementation, verify the rendered result and its interactions in the browser.
```

---

## 2. `<MengToSketchbookLandingPage />` — Cuốn sổ tay

```md
# Integrate <MengToSketchbookLandingPage /> from ThreeUI using its exact source

You are working in an existing application. Implement this component from the exact source
linked or included below. Do not recreate it from the preview, screenshot, description, or filename.

Component: `MengToSketchbookLandingPage`
Runtime: Full HTML + DOM/CSS + JavaScript
Source revision: `SHA-256 e0330548b1ac`

Reference brief:
A tactile personal portfolio built as a Singapore sketchbook, with nine illustrated plates,
curled page turns, a draggable magnifying glass, zoom controls, a botanical paper atmosphere,
and an editorial index.

## Current configured usage

```tsx
import { MengToSketchbookLandingPage } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";

export function Scene() {
  return (
    <div className="shader-frame">
      <MengToSketchbookLandingPage
        headingFont="instrument-serif"
        bodyFont="newsreader"
        headingWeight="400"
        bodyWeight="400"
        primaryColor="#2b2721"
        headingSize={30}
        bodySize={20}
        headingLetterSpacing={0.010}
      />
    </div>
  );
}
```

## Exact implementation source

Canonical HTML: https://threeui.com/landing-pages/meng-to-sketchbook.html
Complete registered source bundle: https://threeui.com/source-code/meng-to-sketchbook-landing-page.json

Required registered files:

- `src/shaders/landing-pages/LandingPages.tsx` — component · SHA-256 `4d379461ad00eb4de7900df312878035383de7e1ed4e13283b8143a2eea9d30a`
- `src/shaders/landing-pages/pageTypography.ts` — controls-source · SHA-256 `809cc65797d531cd3b3ca5a56815d55d24b3ee8d293e4e4bad6fdfe6c83244cc`
- `src/shaders/landing-pages/pageRecipes.ts` — controls-source · SHA-256 `c9d9849cc255bac2d1d938d088c50917f84916f1c516d2bbb27fcfd803523233`
- `src/shaders/landing-pages/LandingPageFrame.tsx` — frame-component · SHA-256 `61de2cc50888aac4ac5557420b07fa47ed3543bb57c1e0055fafdefa53dbaa78`
- `public/landing-pages/meng-to-sketchbook.html` — canonical-source · SHA-256 `e0330548b1ac905cf1b81698163ffa29f8a3a8c39b8d39f9b71ba5b9255b6dd1`
- `src/shaders/threeui.css` — shared-style · SHA-256 `efe4447139f1358dd8e9be68edf6fa46cbefbd1de423a4d6c439ca61d2c8eccf`

Required binary assets:

| Path | Bytes | SHA-256 |
| --- | ---: | --- |
| `public/landing-pages/meng-to-sketchbook/bg-wash.jpg` | 250415 | `3e8bbb177216bcb41ddc75cdaca38f732b9cd7ff4aaa409921623356072eb1f6` |
| `public/landing-pages/meng-to-sketchbook/bloom.png` | 239231 | `7786aef42d10f1fbeca055b3ed14f51a47cb2a390b360eae92119f046989943e` |
| `public/landing-pages/meng-to-sketchbook/botanic-gardens.png` | 822127 | `48ab10869e7afd4519cdc78d62625cd529bd3b2b5ff1c3c2789a8d721733da15` |
| `public/landing-pages/meng-to-sketchbook/botany-left.png` | 133820 | `b3ed9e8613ba8826a5e137a5f8ad4bd21b6e7a544bc25e6184891079eae0470c` |
| `public/landing-pages/meng-to-sketchbook/botany-right.png` | 376050 | `608025a35b8697b536e9ac668e51476c79072d1efb4a04316c068073f51cf655` |
| `public/landing-pages/meng-to-sketchbook/buddha-tooth.png` | 792335 | `cf73e3fffd80a4c81b18ac83dfdba266c9f5c51e6a66047068a39c2885bc388a` |
| `public/landing-pages/meng-to-sketchbook/divider.png` | 170548 | `ef8ed266a6ee6f2f6fb8f235657d9ea9e4d57af6d84e75e4e81373de9d3632bb` |
| `public/landing-pages/meng-to-sketchbook/gardens-by-the-bay.png` | 844878 | `cf1d629d6a72d8cd4a98158fac44e9093a12e55257b43adcdaa07ae3ffbad7d3` |
| `public/landing-pages/meng-to-sketchbook/instrument-serif-italic.woff2` | 15684 | `6ee678c33f388dd7ba59700ebea635deb98821baafd817b09891f7927177f702` |
| `public/landing-pages/meng-to-sketchbook/instrument-serif.woff2` | 15040 | `60c06664b5a95c7de6cc3e00d1f9034d78bd1e40b564016b241674449a067d4d` |
| `public/landing-pages/meng-to-sketchbook/joo-chiat.png` | 796739 | `a46701ba26b5ee31fc6484a12d908cb25d70baea92dec3013260c516e1157a0b` |
| `public/landing-pages/meng-to-sketchbook/lau-pa-sat.png` | 872602 | `bb020724a54e6dbf72c19bc2a8113393aae43408da2bcada4a62b53eeb3b0ddb` |
| `public/landing-pages/meng-to-sketchbook/marina-bay-sands.png` | 781481 | `c9cb4423072d69c4177833fa3f92923ce50ab7b395a257349793de3840b88608` |
| `public/landing-pages/meng-to-sketchbook/marina-bay-skyline.png` | 804832 | `1cebb237d910a1429ff4f17f78efac059094c001629a579b598843eb0bdf363f` |
| `public/landing-pages/meng-to-sketchbook/merlion.png` | 815697 | `bf5082288e212f62b2e15af766364d79e30050528a7ad48a020aa46d59d4666a` |
| `public/landing-pages/meng-to-sketchbook/newsreader.woff2` | 131848 | `01817351be3edfc1714fe6d60ddea6a22a169a5ebd033b50c7f9495e5d9c386a` |
| `public/landing-pages/meng-to-sketchbook/singapore-river.png` | 744018 | `a3fc9cf2be0e3ce4b4630df6897d856ca49c6aca48f66a82e910367328bf667b` |

## Implementation requirements

- Preserve the authored structure, styling, shaders, motion, interactions, responsive behavior, dependencies, and asset paths described by the source.
- Use the configured `<MengToSketchbookLandingPage />` usage above, including the selected variant and props.
- Build directly in the destination project. Do not embed the ThreeUI documentation page and do not approximate the result from its rendered appearance.
- Fetch and read the complete source before editing. If the source cannot be retrieved, stop and report that instead of recreating it.
- After implementation, verify the rendered result and its interactions in the browser.
```

---

## 3. `<KageLandingPage />` — Chùa đêm

```md
# Integrate <KageLandingPage /> from ThreeUI using its exact source

You are working in an existing application. Implement this component from the exact source
linked or included below. Do not recreate it from the preview, screenshot, description, or filename.

Component: `KageLandingPage`
Runtime: Full HTML + DOM/CSS + Three.js
Source revision: `SHA-256 c8e06b90397a`

Reference brief:
The complete authored Kage temple experience, preserved as an interactive full-page document
with its original navigation, scroll scenes, and local Three.js world.

## Current configured usage

```tsx
import { KageLandingPage } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";

export function Scene() {
  return (
    <div className="shader-frame">
      <KageLandingPage
        headingFont="onest"
        bodyFont="onest"
        headingWeight="400"
        bodyWeight="300"
        primaryColor="#e0231c"
        headingSize={46}
        bodySize={17}
        headingLetterSpacing={-0.012}
      />
    </div>
  );
}
```

## Exact implementation source

Canonical HTML: https://threeui.com/landing-pages/kage.html
Complete registered source bundle: https://threeui.com/source-code/kage-landing-page.json

Required registered files:

- `src/shaders/landing-pages/LandingPages.tsx` — component · SHA-256 `4d379461ad00eb4de7900df312878035383de7e1ed4e13283b8143a2eea9d30a`
- `src/shaders/landing-pages/pageTypography.ts` — controls-source · SHA-256 `809cc65797d531cd3b3ca5a56815d55d24b3ee8d293e4e4bad6fdfe6c83244cc`
- `src/shaders/landing-pages/pageRecipes.ts` — controls-source · SHA-256 `c9d9849cc255bac2d1d938d088c50917f84916f1c516d2bbb27fcfd803523233`
- `src/shaders/landing-pages/LandingPageFrame.tsx` — frame-component · SHA-256 `61de2cc50888aac4ac5557420b07fa47ed3543bb57c1e0055fafdefa53dbaa78`
- `public/landing-pages/kage.html` — canonical-source · SHA-256 `c8e06b90397ac246baf0ab6f32f5f6b570acc6fe03c7009f711b579fb72d9f49`
- `public/landing-pages/secret-pathways-assets/fonts.css` — font-source · SHA-256 `985f85a904a4096f92c06552b06f42a45973ac004af4780d68f18af65ddcc1b0`
- `public/landing-pages/secret-pathways-assets/three.min.js` — three-runtime · SHA-256 `8a5f7249903b54d30f79f708699d2fed2d6a1d0741a4cd41377d1f01bb5a2271`
- `src/shaders/threeui.css` — shared-style · SHA-256 `efe4447139f1358dd8e9be68edf6fa46cbefbd1de423a4d6c439ca61d2c8eccf`

Required binary assets:

| Path | Bytes | SHA-256 |
| --- | ---: | --- |
| `public/landing-pages/secret-pathways-assets/generated/kage-sanmon-preview.webp` | 186398 | `23937f8c8350c55730c3bd17066a250548b2d29aad0e6ffb96218c1354b6db43` |
| `public/landing-pages/secret-pathways-assets/generated/kage-approach.webp` | 180064 | `39ff338936097e1bde0c4eadcf09805b9890862703186e67314942de7e0bc36c` |
| `public/landing-pages/secret-pathways-assets/generated/kage-lantern-court.webp` | 197940 | `c0a6ff7da1cd6909d66e2f3f690b0d524a693e01d2222ab846d0074a90f47471` |
| `public/landing-pages/secret-pathways-assets/generated/kage-moonwater.webp` | 102234 | `b8c8060c51c87a103bae619b3a4cc8b8b80632649d83f1f2c2299051e7f9b400` |
| `public/landing-pages/secret-pathways-assets/foreground/png/temple-wall.webp` | 86466 | `41c00f017e4ecf2147ee468d74da955bb4e2dad773f75a575022842eaf7609ce` |
| `public/landing-pages/secret-pathways-assets/foreground/png/pine-tree.webp` | 195918 | `79b233716d067bbc64c1507f79e4a30ba5f445995158c78562cc5b81f607ede7` |
| `public/landing-pages/secret-pathways-assets/foreground/png/tall-grass.webp` | 351644 | `8db0b5fbd160a7225391a6283a99681e346e205f24191031657285ef85ef12d2` |
| `public/landing-pages/secret-pathways-assets/foreground/png/sakura-branch.webp` | 252528 | `48564194d40496090dbf3bba2a68785cf91fafb655dc8d43ac16f6678aff196d` |
| `public/landing-pages/secret-pathways-assets/foreground/png/maple-leaves.webp` | 178208 | `35a90fec62c1a6bbfbbe73cd5d7b1acb889e80546d404182ef9a45fe417b531f` |
| `public/landing-pages/secret-pathways-assets/foreground/png/stone-lantern.webp` | 150108 | `d5f3c881bc9d92b72eaaff2b709614d66e21a19e14025d2b9b16a15ab52df3bc` |
| `public/landing-pages/secret-pathways-assets/foreground/png/garden-bush.webp` | 286406 | `707e2516ebc0108041fe0ddc26d8bff0a69dc9700641f837765018b64e9ff15e` |
| `public/landing-pages/secret-pathways-assets/foreground/png/basalt-stones.webp` | 167866 | `150f1c87e181d651c318168c271bb65c9c8abac6dea6f2421fdd081c5b740471` |
| `public/landing-pages/secret-pathways-assets/foreground/png/hill.webp` | 84142 | `ffba816244bcba98e4e33c6ee56165edfe4048db4af122ef3f5822180a85edbc` |
| `public/landing-pages/secret-pathways-assets/foreground/png/shrine-ruins.webp` | 145814 | `77006e58f2066e6fa9bfc504df396db49b1c7977858fa52d34dd2dad5feced77` |

## Implementation requirements

- Preserve the authored structure, styling, shaders, motion, interactions, responsive behavior, dependencies, and asset paths described by the source.
- Use the configured `<KageLandingPage />` usage above, including the selected variant and props.
- Build directly in the destination project. Do not embed the ThreeUI documentation page and do not approximate the result from its rendered appearance.
- Fetch and read the complete source before editing. If the source cannot be retrieved, stop and report that instead of recreating it.
- After implementation, verify the rendered result and its interactions in the browser.
```

---

## 4. Cách tải source (đã test chạy, không cần tài khoản trả phí)

```bash
# 1. Canonical HTML (nguồn chân lý)
curl -sL https://threeui.com/landing-pages/<name>.html -o _tmp.html

# 2. Bundle JSON (chứa files[] + assets[] kèm sha256)
curl -sL https://threeui.com/source-code/<name>-landing-page.json -o _tmp.json

# 3. Binary assets nằm trên jsDelivr — BẮT BUỘC có đoạn /landing-pages/
curl -sL -o out.png \
  "https://cdn.jsdelivr.net/npm/@designcodeio/threeui@1.2.0/lib-dist/assets/landing-pages/<rel-path>"

# 4. Liệt kê toàn bộ path trong package
curl -sL "https://data.jsdelivr.com/v1/packages/npm/@designcodeio/threeui@1.2.0?structure=flat"
```

Verify SHA-256 từng file trước khi ship:

```bash
# Windows PowerShell
Get-FileHash -Algorithm SHA256 file.png
```

Sau khi tải, **đổi toàn bộ URL Supabase về đường dẫn local**:

```
https://ublctyddhtbgaersvxxb.supabase.co/storage/v1/object/public/threeui-media/scene-images/<id>/<file>
→ assets/<file>
```

Và re-point 2 dòng quan trọng:

```html
<link rel="stylesheet" href="assets/fonts.css">      <!-- thay secret-pathways-assets/fonts.css -->
<script src="assets/three.min.js"></script>          <!-- thay secret-pathways-assets/three.min.js -->
```

---

## 5. Bài học đã rút ra (đừng phạm lại)

| Vấn đề | Cách xử lý |
| --- | --- |
| Bundle JSON `files[]` của HTML lớn có `content` **rỗng** | HTML phải tải từ canonical URL, đó mới là source of truth |
| Bundle JSON chỉ cho TSX/CSS controls-source | Dùng để hiểu prop surface, **không cần** khi deploy HTML tĩnh |
| `fonts.css` đã base64-inline woff2 (Onest 300/400/500/700, NotoJP, Wordmark) | Copy 1 file là đủ, không tải font riêng |
| Tuyệt đối không dựng lại từ screenshot | Fetch source → verify hash → chỉ Việt hoá text |
| Khi Việt hoá | Chỉ thay chuỗi hiển thị (title, meta, nav, heading, caption, bio). Giữ nguyên class/ID/`data-*`/CSS custom property/JS logic — motion code bám vào chúng |
| Nâng cấp kiểu "hành trình nhiều chương" | Giữ nguyên 100% hero cũ (`git diff --stat` chỉ ra markup nav mới), thêm folder anh em `chapter-2/index.html` + `chapter-2/assets/` |
| Deploy | GitHub Pages **legacy** (`build_type=legacy`, branch `main`, path `/`) deploy static repo không cần build — nhanh nhất, zero-config |
| Push `.github/workflows/*.yml` | Token OAuth phải có scope `workflow`, nếu không bị reject: *"refusing to allow an OAuth App to create or update workflow"*. Cách chữa: giữ legacy Pages, hoặc tự add workflow trong GitHub UI |
| Vercel | Thêm `vercel.json` với `cleanUrls` + `Cache-Control` dài hạn cho `/assets/*` → repo import là chạy (Framework Preset: Other, no build command, output `.`) |

---

## 6. Nguồn 3D UI miễn phí (không cần tiền)

### Landing page template (HTML tĩnh, không cần build)

| Tên | Link | Ghi chú |
| --- | --- | --- |
| **ThreeUI** (đang dùng) | https://threeui.com/landing-pages/ | Có sẵn prompt exact-source |
| **VOLT Arc** | https://github.com/MiddleSugar7000/volt-arc-landing-page-template | MIT, 1 file HTML + GSAP + Lenis + Three.js procedural, không cần model/texture |
| **Lumen** | https://github.com/MiddleSugar7000/lumen-saas-landing-page-template | MIT, scene liquid-chrome → 11.000 particle → globe, 13 section |
| **Dioramas** | https://github.com/blendi-remade/dioramas | MIT, 20 ví dụ 3D cinematic (diorama tặng quà rất hợp), có `Florae` 200k particle, `Still Water` koi pond, `Kōen` bonsai 4 mùa |

### Component registry (copy source vào repo)

| Tên | Link | Ghi chú |
| --- | --- | --- |
| **canvas-ui** | https://github.com/davidhdev/canvas-ui | 35 hiệu ứng WebGL/WebGPU, MIT + Commons Clause, hỗ trợ vanilla/React/Vue |
| **atelier-ui** | https://github.com/whatisjery/atelier-ui | MIT, React Three Fiber + Motion, shadcn-style registry |
| **facet** | https://github.com/elberacasa/facet | MIT, 30 component R3F: `image-particles`, `silk-cloth`, `god-rays`, `portal`, `hero-blob`, `wave-grid`, `grass-field` |
| **Pixel** | https://github.com/Devsethi3/Pixel | MIT, 10 shader background (ocean-wave, aurora-dream, cosmic-dust…) |
| **shadersmith-r3f** | https://github.com/qinflan/shadersmith-r3f | Animated gradient shader |

### Asset + kỹ thuật

| Nguồn | Link | License |
| --- | --- | --- |
| Three.js examples | https://threejs.org/examples/ | MIT |
| Khronos glTF Sample Assets | https://github.com/KhronosGroup/glTF-Sample-Assets | Khronos |
| Poly Haven | https://polyhaven.com/ | CC0 |
| Codrops scroll animation | https://github.com/codrops/RotatingOnScrollAnimations | MIT |

> **Lưu ý bản quyền:** Canvas-UI dùng **MIT + Commons Clause** — dùng thoải mái trong dự án của bạn, chỉ cấm bán lại chính thư viện. VOLT Arc / Lumen / Dioramas / atelier-ui / facet / Pixel đều **MIT** (giữ dòng license notice). ThreeUI là nguồn có điều kiện riêng — ưu tiên dùng các nguồn MIT cho phần thêm về sau.
