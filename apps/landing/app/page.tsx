import React from 'react';
import { Button } from '@repo/ui';

export default function Hero() {
  return (
    <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')]">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        {/* Announcement Banner */}
        <div className="flex justify-center">
          <a href="https://github.com/imprakharshukla/rapid" className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:border-neutral-600 dark:text-neutral-200">
            Alpha Released
            <span className="px-1 inline-flex justify-center items-center gap-x-2 rounded-full font-semibold text-sm text-muted-foreground">
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </span>
          </a>
        </div>
        {/* End Announcement Banner */}

        {/* Title */}
        <div className="mt-5 max-w-2xl text-center mx-auto">
          <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
            Build
            <span className="bg-clip-text bg-primary text-transparent">Rapidly</span>
          </h1>
        </div>
        {/* End Title */}

        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="text-lg text-gray-600 dark:text-neutral-400">
            A starter template using NextJS and ExpressJS with complete end-to-end typesafety with TS-Rest contract. It also uses ui/shadcn for components and you can add more apps and packages using Turborepo.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-8 gap-3 flex justify-center">
          <a href="https://rapiddemo.prakhar.codes">
            <Button className='text-white'>Demo</Button>
          </a>
          <a href="https://rapiddocs.prakhar.codes">
            <Button variant={"outline"}>Documentation</Button>
          </a>
        </div>
        {/* End Buttons */}


        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
              <div className="space-y-6 lg:space-y-10">
                <div className="flex">
                  <svg role="img" viewBox="0 0 24 24" width={40} className='text-muted-foreground' fill='currentColor' xmlns="http://www.w3.org/2000/svg"><title>Next.js</title><path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" /></svg>
                  <div className="ms-5 sm:ms-8">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                      NextJS
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-neutral-400">
                      We choose our teams carefully. Our people are the secret to great work.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <svg role="img" width={50} className='text-muted-foreground' fill='currentColor' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Tailwind CSS</title><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" /></svg>
                  <div className="ms-5 sm:ms-8">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                      TailwindCSS
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-neutral-400">
                      Benefit from automatic updates to all boards any time you need to make a change to your website.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <svg role="img" width={40} className='text-muted-foreground' fill='currentColor' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Express</title><path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" /></svg>
                  <div className="ms-5 sm:ms-8">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                      ExpressJS
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-neutral-400">
                      We've user tested our own process by shipping over 1k products for clients.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 lg:space-y-10">
                <div className="flex">
                  <svg role="img" width={30} className='text-muted-foreground' fill='currentColor' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Prisma</title><path d="M21.8068 18.2848L13.5528.7565c-.207-.4382-.639-.7273-1.1286-.7541-.5023-.0293-.9523.213-1.2062.6253L2.266 15.1271c-.2773.4518-.2718 1.0091.0158 1.4555l4.3759 6.7786c.2608.4046.7127.6388 1.1823.6388.1332 0 .267-.0188.3987-.0577l12.7019-3.7568c.3891-.1151.7072-.3904.8737-.7553s.1633-.7828-.0075-1.1454zm-1.8481.7519L9.1814 22.2242c-.3292.0975-.6448-.1873-.5756-.5194l3.8501-18.4386c.072-.3448.5486-.3996.699-.0803l7.1288 15.138c.1344.2856-.019.6224-.325.7128z" /></svg>
                  <div className="ms-5 sm:ms-8">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                      Prisma
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-neutral-400">
                      We stay lean and help your product do one thing well.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <svg width={70} className='text-muted-foreground' fill='currentColor' xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 116 115" fill="none">
                    <g clip-path="url(#clip0_13_20)">
                      <rect width="70" height="70" rx="26" />
                      <path d="M62.487 59.9566L95.1166 60.1262L95.1493 53.8212L62.5198 53.6517L62.487 59.9566ZM62.5863 40.8469L95.2159 41.0164L95.2493 34.5815L62.6197 34.412L62.5863 40.8469ZM62.4168 73.4765L95.0463 73.646L95.0129 80.0809L62.3833 79.9114L62.4168 73.4765Z" fill="currentColor" />
                      <path d="M46.06 64.92C52.3 62.58 55.875 57.51 55.875 50.555C55.875 40.545 48.595 34.5 36.7 34.5H18.5V40.935H36.44C44.305 40.935 48.4 44.445 48.4 50.555C48.4 56.6 44.305 60.175 36.44 60.175H18.5V80H25.91V66.48H36.7C37.48 66.48 38.325 66.48 39.04 66.415L48.595 80H56.655L46.06 64.92Z" fill="currentColor" />
                    </g>
                    <defs>
                      <clipPath id="clip0_13_20">
                        <rect width="116" height="115" fill="currentColor" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="ms-5 sm:ms-8">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                      TS-Rest
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-neutral-400">
                      We actively pursue the right balance between functionality and aesthetics.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <svg role="img" width={60} className='text-muted-foreground' fill='currentColor' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WebAuthn</title><path d="M15.2872 3.641a8.407 8.407 0 00-8.05 7.593h.55a7.805 7.805 0 012.24-4.713 5.825 5.825 0 00.923.695c-.608 1.177-.98 2.556-1.082 4.018h.135c.105-1.467.485-2.819 1.065-3.947.745.434 1.623.754 2.577.94a27.83 27.83 0 00-.25 3.763h-.847v.135h.847c.003 1.334.09 2.617.25 3.764-.954.185-1.832.506-2.577.94a9.997 9.997 0 01-.978-3.137h-.137c.164 1.16.502 2.25.997 3.208a5.825 5.825 0 00-.924.695 7.805 7.805 0 01-2.255-4.875h-.55a8.407 8.407 0 0016.779-.675 8.398 8.398 0 00-.689-3.333 8.407 8.407 0 00-8.025-5.072zm.315.546c.155 0 .31.005.464.014.365.34.708 1.07.983 2.114a16.518 16.518 0 01.357 1.79 10.173 10.173 0 01-1.804.16 10.173 10.173 0 01-1.805-.16 16.519 16.519 0 01.357-1.79c.275-1.045.618-1.775.983-2.114a7.97 7.97 0 01.465-.014zm-.665.028c-.345.392-.658 1.093-.913 2.065a16.639 16.639 0 00-.36 1.8c-.939-.183-1.802-.498-2.533-.926.686-1.283 1.635-2.264 2.73-2.775a7.874 7.874 0 011.076-.164zm1.33 0a7.856 7.856 0 011.084.168c1.092.513 2.037 1.492 2.721 2.771-.73.428-1.594.743-2.533.927a16.64 16.64 0 00-.36-1.8c-.255-.972-.568-1.673-.912-2.066zm-2.972.314c-.655.407-1.257.989-1.776 1.73a8.166 8.166 0 00-.506.825 5.69 5.69 0 01-.89-.67 7.814 7.814 0 013.172-1.885zm4.624.006a7.862 7.862 0 013.164 1.877 5.692 5.692 0 01-.893.672 8.166 8.166 0 00-.506-.825c-.516-.738-1.115-1.318-1.765-1.724zm3.26 1.985a7.858 7.858 0 011.638 2.419 7.802 7.802 0 01.642 3.051h-2.095c-.01-1.74-.398-3.396-1.11-4.774a5.823 5.823 0 00.925-.696zm-1.044.767c.68 1.32 1.084 2.945 1.094 4.703h-3.42a27.863 27.863 0 00-.25-3.763c.953-.186 1.832-.506 2.576-.94zm-6.357.965a10.299 10.299 0 001.824.16 10.299 10.299 0 001.823-.16c.16 1.138.246 2.413.25 3.738h-1.179a1.03 1.03 0 01-.093.135h1.27a27.71 27.71 0 01-.248 3.739 10.397 10.397 0 00-3.647 0 27.733 27.733 0 01-.248-3.739h1.294a.99.99 0 01-.09-.135h-1.204c.003-1.325.088-2.6.248-3.738zm-11.22 1.129a2.585 2.585 0 00-2.547 2.35c-.142 1.541 1.064 2.842 2.566 2.842 1.26 0 2.312-.917 2.533-2.124h4.44v.972h.946v-.972h.837v1.431h.945v-2.376h-7.168a2.586 2.586 0 00-2.552-2.123zm-.058.965a1.639 1.639 0 011.707 1.637 1.64 1.64 0 01-1.639 1.638 1.639 1.639 0 01-.068-3.275zm13.09.388a.75.75 0 00-.345 1.404l-.383 1.958h1.5l-.383-1.958a.75.75 0 00.384-.654.75.75 0 00-.773-.75zm2.218 1.391h3.421c-.01 1.758-.415 3.384-1.094 4.704-.744-.434-1.623-.755-2.577-.94a27.81 27.81 0 00.25-3.764zm3.556 0h2.095a7.805 7.805 0 01-2.28 5.47 5.825 5.825 0 00-.925-.696c.712-1.378 1.1-3.033 1.11-4.774zm-5.52 3.703a10.284 10.284 0 011.562.156 16.518 16.518 0 01-.357 1.791c-.275 1.045-.618 1.774-.982 2.114a7.972 7.972 0 01-.93 0c-.365-.34-.708-1.07-.983-2.114a16.519 16.519 0 01-.357-1.79 10.284 10.284 0 012.048-.157zm1.695.181c.94.184 1.803.5 2.533.926-.686 1.284-1.635 2.265-2.73 2.776a7.874 7.874 0 01-1.075.164c.344-.393.657-1.094.913-2.065a16.64 16.64 0 00.36-1.8zm-3.874 0a16.648 16.648 0 00.36 1.8c.254.973.567 1.674.912 2.066a7.873 7.873 0 01-1.075-.164c-1.096-.511-2.045-1.492-2.73-2.775.73-.428 1.593-.743 2.533-.927zm-2.652.997a8.16 8.16 0 00.506.825c.52.741 1.121 1.323 1.776 1.73a7.814 7.814 0 01-3.174-1.884 5.694 5.694 0 01.892-.67zm9.178 0a5.694 5.694 0 01.891.67 7.814 7.814 0 01-3.173 1.885c.654-.407 1.256-.989 1.775-1.73a8.16 8.16 0 00.507-.825z" /></svg>
                  <div className="ms-5 sm:ms-8">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">
                      Auth.js (Next-Auth)
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-neutral-400">
                      From boarding passes to movie tickets, there's pretty much nothing you can't store with Preline.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div >
    </div >
  );
}
