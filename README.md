# CarpTravel Travel Agency Landing Page.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Available Scripts

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Product Requirements Document

https://docs.google.com/document/d/1151CuhKx_g0fAW0HM67-bqe7ci8XYj3k/edit?usp=sharing&ouid=117880436410937102712&rtpof=true&sd=true

## Figma markup Document

https://www.figma.com/file/2nHaXyrwQxqXLYmPUGQuP1/CarpTravel---%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%B5-%D0%B7%D0%B0%D0%B2%D0%B4%D0%B0%D0%BD%D0%BD%D1%8F?type=design&node-id=348-14&mode=design&t=B9qCuPIHJd7lZpso-0

## Learn More

The layout is adaptive and cross-browser - mobile from 360px to 480px
(responsive layout), tablet - 768px, desktop - 1280px. Used the Mobile first
approach. For formation, used Prettier. Used custom fonts. Deployed on vercel.com.

![Og-image](https://github.com/darynakarmazin/carp-travel/raw/main/src/og-image/og-image.png)

# Lighthouse report

![Lighthouse](https://github.com/darynakarmazin/carp-travel/raw/main/src/og-image/lighthouse-report.png)

Technology stack [Next.js (using app router), Tailwind CSS, Typescript, Git, react-hooks, react-scroll, Swiper, react-hook-form]

#Header & Hero (Home)

1. React-scroll is used for smooth navigation through sections.
2. Not fixed. Contains logo and navigation menu.
   ![Header](https://github.com/darynakarmazin/carp-travel/raw/main/src/og-image/header-hero.png)

#About (Who we are)

![About](https://github.com/darynakarmazin/carp-travel/raw/main/src/og-image/about.png)

#Services (We offer)

1. A slider with different background images has been implemented. Swiper is used.
   ![Services](https://github.com/darynakarmazin/carp-travel/raw/main/src/og-image/services.png)

#Career (Choose us)

1. Provided form validation using react-hook-form and Tailwind CSS to style validation errors.
   ![Career](https://github.com/darynakarmazin/carp-travel/raw/main/src/og-image/сareer.png)

#Gallery (Our gallery)

1. Developed image slider. Clicking or dragging causes one slide to be scrolled.
   (Used swiper library).
   ![Gallery](https://github.com/darynakarmazin/carp-travel/raw/main/src/og-image/gallery.png)

#Contacts (Contact us)

1. Provided form validation using react-hook-form and Tailwind CSS to style validation errors.
   ![Contacts](https://github.com/darynakarmazin/carp-travel/raw/main/src/og-image/contacts.png)
