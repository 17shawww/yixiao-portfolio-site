type MethodSketchProps = {
  kind: "research" | "product" | "interaction" | "prototype";
};

const svgProps = {
  "aria-hidden": true,
  focusable: false,
} as const;

export function HeroPortfolioMapSketch() {
  return (
    <svg viewBox="0 0 720 520" className="h-full w-full" {...svgProps}>
      <path className="sketch-wash sketch-wash-blush" d="M88 101c73-68 192-55 233 19 39 70-6 155-92 177-93 24-191-27-203-107-5-35 23-62 62-89Z" />
      <path className="sketch-wash sketch-wash-sage" d="M391 121c82-56 210-32 256 40 42 66 5 150-86 177-100 30-215-20-238-94-13-42 21-87 68-123Z" />
      <path className="sketch-wash sketch-wash-gray" d="M207 285c83-54 205-37 262 30 48 56 17 125-62 145-91 22-222-20-251-85-16-35 13-67 51-90Z" />

      <path className="sketch-line-soft" d="M202 158c61 2 111 22 150 59M349 219c50-42 103-61 159-58M281 305c-15-36-39-63-72-80M424 318c38-28 72-62 101-102" />
      <circle className="sketch-dot" cx="352" cy="219" r="5" />
      <path className="sketch-line" d="M318 196c20-18 50-18 70 2 18 19 17 49-3 67-22 20-57 17-73-8-12-20-9-44 6-61Z" />
      <path className="sketch-line-soft" d="M333 222h39M333 241h26M362 205c9 9 12 20 9 34" />

      <g>
        <path className="sketch-line" d="M91 87h112v126H91z" />
        <path className="sketch-line-soft" d="M112 119h61M112 143h45M112 167h68M112 190h37" />
        <path className="sketch-line" d="M127 70h55l14 17H113l14-17Z" />
        <path className="sketch-line" d="M218 113c21-13 42-13 63 0 14 9 16 28 2 38-21 15-50 8-62-16" />
        <path className="sketch-line-soft" d="M238 114c-3-14 3-25 18-33M258 81c12 6 19 16 20 30" />
      </g>

      <g>
        <path className="sketch-line" d="M451 72h98c13 0 23 10 23 23v178c0 13-10 23-23 23h-98c-13 0-23-10-23-23V95c0-13 10-23 23-23Z" />
        <path className="sketch-line-soft" d="M465 96h42M464 273h52" />
        <path className="sketch-line" d="M454 121h92v64h-92z" />
        <path className="sketch-line-soft" d="M469 170c16-22 32-27 50-10 8 7 13 3 20-5" />
        <path className="sketch-line" d="M585 127h76M585 155h51M585 183h68" />
        <path className="sketch-line-soft" d="M585 214c28-9 52-8 75 2M585 241h58" />
        <circle className="sketch-dot" cx="600" cy="267" r="5" />
        <circle className="sketch-dot" cx="624" cy="267" r="5" />
        <circle className="sketch-dot" cx="648" cy="267" r="5" />
      </g>

      <g>
        <path className="sketch-line" d="M64 373c42-7 72-23 91-48 24-31 61-47 111-42 34 4 52 20 67 43 15 23 42 34 82 34 15 0 24 7 26 20 2 12-5 22-19 27-88 29-204 29-349 2-17-3-20-17-9-36Z" />
        <path className="sketch-line-soft" d="M112 372c74 17 167 16 279-2M159 340c56 19 111 20 165 5" />
        <path className="sketch-line" d="M155 253l49-25 28 30-52 24-25-29ZM280 226l58 20-19 39-59-22 20-37ZM375 251l37 37-31 28-37-36 31-29Z" />
        <path className="sketch-line" d="M80 268c28-28 60-41 98-39M88 268l-2-28M88 268h30" />
        <path className="sketch-line-soft" d="M219 389c4 12 11 20 21 25M276 392c3 12 9 20 18 24" />
      </g>

      <g>
        <path className="sketch-line" d="M440 407c27-53 71-81 131-84 54-3 94 18 108 58 15 44-14 85-65 97-56 13-113-8-128-47-10-27 9-57 45-68 36-10 73 3 85 27 12 24-6 50-38 57-30 6-57-7-61-27-3-15 10-30 31-35" />
        <path className="sketch-line" d="M491 321c-7-23 5-38 34-44M510 301c5 13 3 27-8 42M528 294c-4 17-13 30-28 39" />
        <path className="sketch-line-soft" d="M643 326c-8 17-10 34-7 51M667 353c-17 6-30 17-38 31" />
        <circle className="sketch-dot" cx="548" cy="385" r="4" />
        <circle className="sketch-dot" cx="596" cy="446" r="4" />
      </g>
    </svg>
  );
}

export function AboutDeskSketch() {
  return (
    <svg viewBox="0 0 420 320" className="h-full w-full" {...svgProps}>
      <path className="sketch-wash sketch-wash-gray" d="M105 83c49-51 141-51 178 1 35 49 13 124-52 151-70 29-157-5-170-61-8-34 16-63 44-91Z" />
      <path className="sketch-line" d="M87 216c69 11 164 13 265 1" />
      <path className="sketch-line" d="M140 126h100l19 74H121l19-74Z" />
      <path className="sketch-line-soft" d="M151 143h76M156 162h53M160 181h68" />
      <path className="sketch-line" d="M273 154c25-9 47 1 55 21 6 15-2 29-18 35-19 7-42-3-49-21-6-15 0-29 12-35Z" />
      <path className="sketch-line-soft" d="M289 151c9-23 25-39 50-46M319 128c6-18 19-32 38-41M292 151c-4-18-11-32-24-43" />
      <path className="sketch-line" d="M75 226c12 20 38 31 78 32M247 226c22 22 51 33 89 33" />
      <path className="sketch-line-soft" d="M116 90c-1-23 13-40 40-50M156 40c18 14 28 31 30 52" />
    </svg>
  );
}

export function MethodSketch({ kind }: MethodSketchProps) {
  if (kind === "research") {
    return (
      <svg viewBox="0 0 120 96" className="h-full w-full" {...svgProps}>
        <path className="sketch-wash sketch-wash-blush" d="M31 28c19-19 54-21 69-1 15 19 3 47-24 55-29 9-63-7-67-30-2-11 8-18 22-24Z" />
        <path className="sketch-line" d="M25 22h52c5 0 8 3 8 8v45c0 5-3 8-8 8H25c-5 0-8-3-8-8V30c0-5 3-8 8-8Z" />
        <path className="sketch-line-soft" d="M31 38h37M31 51h29M31 64h34" />
        <path className="sketch-line" d="M77 70l22 14M93 75c8-10 8-24-1-33-10-10-27-8-34 3" />
      </svg>
    );
  }

  if (kind === "product") {
    return (
      <svg viewBox="0 0 120 96" className="h-full w-full" {...svgProps}>
        <path className="sketch-wash sketch-wash-sage" d="M29 47c2-28 32-46 59-35 23 9 31 39 15 58-18 21-58 25-75 5-7-9-6-18 1-28Z" />
        <path className="sketch-line" d="M26 68c21-36 45-47 73-54" />
        <path className="sketch-line" d="M31 67c14 3 26 0 37-8M56 45c10 8 22 12 37 12" />
        <path className="sketch-line-soft" d="M47 73c5 6 13 9 24 8M75 23c8 4 13 10 16 19" />
        <circle className="sketch-dot" cx="29" cy="68" r="4" />
        <circle className="sketch-dot" cx="99" cy="14" r="4" />
      </svg>
    );
  }

  if (kind === "interaction") {
    return (
      <svg viewBox="0 0 120 96" className="h-full w-full" {...svgProps}>
        <path className="sketch-wash sketch-wash-gray" d="M25 22c22-20 66-17 78 7 11 22-8 49-40 54-31 4-58-11-61-34-1-11 8-19 23-27Z" />
        <path className="sketch-line" d="M18 24h32v24H18zM71 14h32v24H71zM64 59h36v24H64z" />
        <path className="sketch-line" d="M50 36c12-1 19-4 21-11M44 48c7 13 14 17 22 23" />
        <path className="sketch-line-soft" d="M27 35h14M80 25h14M74 71h17" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 120 96" className="h-full w-full" {...svgProps}>
      <path className="sketch-wash sketch-wash-blush" d="M20 51c-1-30 31-53 61-44 26 8 38 42 20 64-20 24-64 23-79 1-4-7-3-14-2-21Z" />
      <path className="sketch-line" d="M34 19h54c5 0 9 4 9 9v40c0 5-4 9-9 9H34c-5 0-9-4-9-9V28c0-5 4-9 9-9Z" />
      <path className="sketch-line-soft" d="M39 36h26M39 49h38M39 62h18" />
      <path className="sketch-line" d="M77 73l8 14M37 73l-8 14M74 38l10 9-10 9" />
    </svg>
  );
}

export function LexFlowSketch() {
  return (
    <svg viewBox="0 0 560 360" className="h-full w-full" {...svgProps}>
      <path className="sketch-wash sketch-wash-sage" d="M101 72c80-61 236-53 310 22 63 64 35 153-55 191-101 43-254 6-303-74-26-42 3-94 48-139Z" />
      <path className="sketch-line" d="M224 58h112l27 31H197l27-31Z" />
      <path className="sketch-line" d="M211 89h140M232 89v80M280 89v80M328 89v80M198 169h165" />
      <path className="sketch-line-soft" d="M217 188h126M238 205h83M252 222h57" />

      <path className="sketch-line" d="M61 76h96v122H61zM397 77h102v122H397z" />
      <path className="sketch-line-soft" d="M80 104h54M80 126h39M80 150h58M415 105h59M415 129h43M415 153h56" />
      <path className="sketch-line" d="M86 224h78v50H86zM188 224h78v50h-78zM290 224h78v50h-78zM392 224h78v50h-78z" />
      <path className="sketch-line-soft" d="M101 244h45M204 244h43M306 244h46M408 244h43" />
      <path className="sketch-line-soft" d="M101 258h25M204 258h31M306 258h22M408 258h27" />
      <path className="sketch-line" d="M103 213c12-11 29-11 41 0M205 213c13-11 30-11 43 0M306 213c12-11 29-11 42 0M410 213c12-11 28-11 40 0" />
      <path className="sketch-line" d="M164 137c28-16 57-16 88 0M308 137c30-16 60-16 90 0M126 198c20 16 53 24 100 26M334 224c49-2 84-12 106-29" />
      <path className="sketch-line" d="M474 118c18 0 29 10 29 28 0 17-11 27-29 27" />
      <path className="sketch-line-soft" d="M492 124c-18 18-36 32-55 43M438 124c20 17 37 32 51 46" />
      <path className="sketch-line-soft" d="M132 303h296" />
      <circle className="sketch-dot" cx="164" cy="303" r="4" />
      <circle className="sketch-dot" cx="239" cy="303" r="4" />
      <circle className="sketch-dot" cx="314" cy="303" r="4" />
      <circle className="sketch-dot" cx="389" cy="303" r="4" />
      <path className="sketch-line-soft" d="M162 317h42M237 317h50M312 317h45M387 317h38" />

      <path className="sketch-line" d="M84 303c52-28 94-23 126 17M476 300c-48-24-86-17-113 18" />
      <path className="sketch-line-soft" d="M98 305c12 19 30 31 56 36M461 303c-19 18-38 29-58 34" />
      <path className="sketch-line" d="M279 292c-17-21-17-43 0-64 17 21 17 43 0 64Z" />
      <path className="sketch-line-soft" d="M260 246h38M252 263h56M258 280h44" />
      <circle className="sketch-dot" cx="280" cy="137" r="5" />
      <circle className="sketch-dot" cx="280" cy="224" r="5" />
      <circle className="sketch-dot" cx="280" cy="292" r="5" />
    </svg>
  );
}

export function CapsoSketch() {
  return (
    <svg viewBox="0 0 560 360" className="h-full w-full" {...svgProps}>
      <path className="sketch-wash sketch-wash-blush" d="M122 70c75-60 198-50 251 18 47 60 22 142-63 177-94 39-217 4-252-70-19-40 18-87 64-125Z" />
      <path className="sketch-wash sketch-wash-gray" d="M328 91c60-39 139-24 164 28 23 49-15 105-77 115-66 11-127-28-127-81 0-25 16-45 40-62Z" />
      <path className="sketch-line" d="M168 43h145c17 0 31 14 31 31v240c0 17-14 31-31 31H168c-17 0-31-14-31-31V74c0-17 14-31 31-31Z" />
      <path className="sketch-line-soft" d="M194 68h80M200 322h83" />
      <path className="sketch-line" d="M166 101h149v86H166z" />
      <path className="sketch-line-soft" d="M181 166c20-28 41-35 62-19 10 8 17 17 30 5 11-10 20-16 32-10" />
      <circle className="sketch-dot" cx="201" cy="126" r="8" />
      <path className="sketch-line" d="M166 215h64M166 244h112M166 273h82" />
      <path className="sketch-line-soft" d="M264 215l30-11M273 235l35-8M258 265l30 11" />
      <path className="sketch-line" d="M292 202c17-12 37-12 59 0 13 8 15 25 3 35-17 14-43 9-53-10" />
      <path className="sketch-line-soft" d="M312 203c-2-12 4-22 17-29M330 174c10 6 16 14 16 26" />
      <path className="sketch-line" d="M277 283l20-16 12 15-20 16-12-15Z" />
      <path className="sketch-line-soft" d="M281 279l12 14M297 267l12-10" />

      <path className="sketch-line" d="M384 95h112c12 0 21 9 21 21v56c0 12-9 21-21 21h-87l-29 27 8-27h-4c-12 0-21-9-21-21v-56c0-12 9-21 21-21Z" />
      <path className="sketch-line-soft" d="M389 125h82M389 148h63M389 171h92" />
      <text className="sketch-label" x="473" y="127">AI</text>
      <path className="sketch-line" d="M375 255c35-15 73-15 114 0M375 286c26 9 57 9 94 0" />
      <path className="sketch-line-soft" d="M396 231c4 12 10 20 20 24M450 230c3 12 10 21 20 26" />
      <circle className="sketch-dot" cx="387" cy="321" r="5" />
      <circle className="sketch-dot" cx="425" cy="321" r="5" />
      <circle className="sketch-dot" cx="463" cy="321" r="5" />
    </svg>
  );
}

export function ShoeSketch() {
  return (
    <svg viewBox="0 0 560 360" className="h-full w-full" {...svgProps}>
      <path className="sketch-wash sketch-wash-gray" d="M94 99c85-66 249-59 324 10 68 62 44 146-45 180-102 39-269 4-322-71-30-43 0-84 43-119Z" />
      <path className="sketch-line" d="M63 227c48-10 86-30 113-61 30-35 74-53 130-48 43 4 70 23 88 56 15 27 42 41 82 42 22 1 37 10 42 27 4 15-6 29-25 35-112 33-253 34-419 4-19-3-24-20-11-55Z" />
      <path className="sketch-line-soft" d="M115 233c95 22 218 20 364-3M167 195c61 25 125 29 190 11M218 155c16 23 40 37 73 41M318 143c27 17 47 39 59 66" />
      <path className="sketch-line" d="M120 273c9 25 31 39 66 44M220 284c7 25 26 38 58 40M327 285c4 22 18 35 44 38" />

      <path className="sketch-line" d="M158 61l62-31 35 36-65 31-32-36ZM300 34l70 23-24 48-72-25 26-46ZM425 84l48 45-38 36-48-45 38-36Z" />
      <path className="sketch-line-soft" d="M181 48l50 45M313 56l50 18M404 111l43 38" />
      <path className="sketch-line" d="M88 75c34-36 76-53 127-52M96 75l-3-36M96 75l40-1" />
      <path className="sketch-line-soft" d="M88 75c27 10 48 26 62 49M96 75c20-15 44-25 73-29" />

      <path className="sketch-line" d="M431 37c23-10 45-6 63 12M463 28c-1 25-8 47-22 65M489 47c-18 11-37 19-58 23" />
      <path className="sketch-line" d="M454 315c-10-17-9-33 4-49 13 16 14 32 4 49Z" />
      <path className="sketch-line-soft" d="M440 286h34M446 301h22" />
      <circle className="sketch-dot" cx="192" cy="260" r="4" />
      <circle className="sketch-dot" cx="248" cy="267" r="4" />
      <circle className="sketch-dot" cx="307" cy="268" r="4" />
    </svg>
  );
}

export function GardenSketch() {
  return (
    <svg viewBox="0 0 560 360" className="h-full w-full" {...svgProps}>
      <path className="sketch-wash sketch-wash-sage" d="M115 61c100-58 253-34 322 45 61 70 35 159-58 193-106 39-259-10-307-95-28-50-8-104 43-143Z" />
      <path className="sketch-line" d="M75 190c46-83 119-127 217-131 87-4 153 34 174 96 24 71-28 133-114 149-93 17-188-24-205-89-13-50 24-98 90-112 61-13 124 12 141 58 15 42-20 79-76 86-49 6-94-18-98-51-4-26 20-50 58-54" />
      <path className="sketch-line-soft" d="M70 255c77 42 172 57 286 45M111 109c42-24 91-38 147-43M401 95c36 18 63 45 80 81" />
      <path className="sketch-line" d="M102 88c-9-32 8-53 51-62M130 61c9 19 6 38-10 57M153 52c-5 23-17 41-37 54" />
      <path className="sketch-line" d="M436 250c36-12 65-9 86 11M466 235c-16 19-23 41-22 65M494 245c-17 14-34 25-53 33" />
      <path className="sketch-line-soft" d="M55 162c20 12 39 16 56 14M443 65c-15 23-20 48-15 74M492 122c-26 10-46 25-60 47" />
      <path className="sketch-line" d="M160 295c28-11 55-11 81 0M179 279c-9 17-13 35-10 54M221 279c-17 13-35 23-55 29" />
      <path className="sketch-line-soft" d="M260 159c18-24 38-35 61-33M271 176c25-1 47 5 67 18M333 221c24 12 50 14 78 5" />
      <path className="sketch-line-soft" d="M248 117c-9-15-9-29 0-42M271 120c-5-18-1-34 13-49M297 124c-2-15 4-28 18-40" />
      <path className="sketch-line" d="M238 244c17-10 35-10 52 0M238 260c17 10 35 10 52 0M238 244c-5 5-5 11 0 16M290 244c5 5 5 11 0 16" />
      <path className="sketch-line-soft" d="M352 140c10-18 25-28 45-31M373 127c4 13 1 25-9 38M395 119c-8 15-19 26-33 34" />
      <circle className="sketch-dot" cx="265" cy="148" r="5" />
      <circle className="sketch-dot" cx="312" cy="216" r="5" />
      <circle className="sketch-dot" cx="377" cy="285" r="5" />
      <circle className="sketch-dot" cx="206" cy="196" r="5" />
    </svg>
  );
}

export function ContactSketch() {
  return (
    <svg viewBox="0 0 420 320" className="h-full w-full" {...svgProps}>
      <path className="sketch-wash sketch-wash-blush" d="M102 89c54-51 149-50 199 0 48 48 31 123-35 155-76 37-180 4-208-62-16-36 11-67 44-93Z" />
      <path className="sketch-line" d="M85 114h238c11 0 20 9 20 20v129c0 11-9 20-20 20H85c-11 0-20-9-20-20V134c0-11 9-20 20-20Z" />
      <path className="sketch-line" d="M69 124l132 95 139-95" />
      <path className="sketch-line-soft" d="M69 274l101-83M341 274l-105-82" />
      <path className="sketch-line" d="M312 87c18-41 42-57 74-48M346 56c-1 25-8 48-20 69M374 48c-15 15-31 27-48 36" />
      <path className="sketch-line-soft" d="M125 78c19-18 43-29 72-31M134 62c-3 18-2 33 4 45" />
    </svg>
  );
}
