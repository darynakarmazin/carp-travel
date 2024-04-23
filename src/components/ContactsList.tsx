function ContactsList() {
  return (
    <ul className="flex flex-col items-end gap-6 md:flex-row md: md:gap-[90px] md:align-top xl:w-1/2 xl:flex-col xl:gap-32 xl:pr-[200px]">
      <div className="flex flex-col gap-6 items-end xl:gap-16">
        <li className="flex gap-5">
          <div className="flex flex-col">
            <a
              className="text-[14px] leading-6 md:text-base xl:text-[18px] xl:leading-[24px]"
              href="tel:+380981234567"
            >
              +38 (098) 12 34 567
            </a>
            <a
              className="text-[14px] leading-6 md:text-base xl:text-[18px] xl:leading-[24px]"
              href="tel:+380731234567"
            >
              +38 (073) 12 34 567
            </a>
          </div>
          <p className="text-[12px] leading-5 font-extralight w-[81px]">
            Phone number
          </p>
        </li>
        <li className="flex gap-5">
          <a
            className="text-[14px] leading-6 md:text-base xl:text-[18px] xl:leading-[24px]"
            href="mailto:support@carptravel.com"
          >
            support@carptravel.com
          </a>
          <p className="text-[12px] leading-5 font-extralight w-[81px]">
            E-mail
          </p>
        </li>
      </div>
      <li className="flex gap-5 xl:flex-row-reverse">
        <p className="text-[12px] leading-5 font-extralight xl:w-[81px]">
          Follow us
        </p>
        <ul className="flex flex-col w-[81px] text-[14px] leading-6 md:text-base xl:text-[18px] xl:leading-[24px] xl:text-end">
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              youtube
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              tiktok
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default ContactsList;
