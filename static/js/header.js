var header = `<nav class="sticky top-0 z-50 container px-5 mx-auto bg-white dark:bg-[#273d52]" style="border-radius: 0 0rem 2rem 2rem; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05)">
<div class="flex justify-between items-center flex-wrap">
  <button aria-label="Toggle navigation bar" class="md:hidden block bg-green-100 text-green-500 w-10 h-10 rounded-xl mx-4 ml-0 dark:bg-[#273d52] dark:text-gray-100" onclick="toggleMobileNav()">
    <svg class="svg-inline--fa fa-bars" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg>
      <path fill="currentColor" d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"></path>
    </svg>
  </button>
  <div class="logo py-3">
    <a href="" aria-label="GETMODSAPK - Your Destination for Modded APKs and Premium Android Apps!">
      <img src="static/picture/5bb1dc30f3610ed9f9aec3061f32adc2.svg" alt class="h-[40px] w-[164px] sm:h-[45px] sm:w-[184px] md:h-[50px] md:w-[205px] light-logo" />
      <img src="static/picture/getmodsapk-dark-logo-mobile.svg" alt class="h-[40px] w-[164px] sm:h-[45px] sm:w-[184px] md:h-[50px] md:w-[205px] hidden dark-logo" />
    </a>
  </div>
  <ul class="md:block hidden">
    <li class="nav-item" style="--color: #0085ff">
      <a href="index.html" class="nav-link">
        <div class="icon" style="--tw-gradient-from: #85b6ff; --tw-gradient-to: #0085ff; --tw-shadow-color: #85b6ff">
          <svg class="svg-inline--fa fa-house" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="house" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg>
            <path fill="currentColor" d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"></path>
          </svg>
        </div>
        Home
      </a>
    </li>
    <li class="nav-item" style="--color: #ff0000">
      <a href="games.html" class="nav-link">
        <div class="icon" style="--tw-gradient-from: #ff8585; --tw-gradient-to: #ff0000; --tw-shadow-color: #ff8585">
          <svg class="svg-inline--fa fa-gamepad-modern" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gamepad-modern" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg>
            <path fill="currentColor" d="M640 384.2c0-5.257-.4576-10.6-1.406-15.98l-33.38-211.6C591.4 77.96 522 32 319.1 32C119 32 48.71 77.46 34.78 156.6l-33.38 211.6c-.9487 5.383-1.406 10.72-1.406 15.98c0 51.89 44.58 95.81 101.5 95.81c49.69 0 93.78-30.06 109.5-74.64l7.5-21.36h203l7.5 21.36c15.72 44.58 59.81 74.64 109.5 74.64C595.4 479.1 640 436.1 640 384.2zM247.1 248l-31.96-.0098L215.1 280c0 13.2-10.78 24-23.98 24c-13.2 0-24.02-10.8-24.02-24l.0367-32.01L135.1 248c-13.2 0-23.98-10.8-23.98-24c0-13.2 10.77-24 23.98-24l32.04-.011L167.1 168c0-13.2 10.82-24 24.02-24c13.2 0 23.98 10.8 23.98 24l.0368 31.99L247.1 200c13.2 0 24.02 10.8 24.02 24C271.1 237.2 261.2 248 247.1 248zM432 311.1c-22.09 0-40-17.92-40-40c0-22.08 17.91-40 40-40s40 17.92 40 40C472 294.1 454.1 311.1 432 311.1zM496 215.1c-22.09 0-40-17.92-40-40c0-22.08 17.91-40 40-40s40 17.92 40 40C536 198.1 518.1 215.1 496 215.1z"></path>
          </svg>
        </div>
        Games
      </a>
    </li>
    <li class="nav-item" style="--color: #ad00ff">
      <a href="games.html" class="nav-link">
        <div class="icon" style="--tw-gradient-from: #df85ff; --tw-gradient-to: #ad00ff; --tw-shadow-color: #df85ff">
          <svg class="svg-inline--fa fa-shapes" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shapes" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg>
            <path fill="currentColor" d="M411.4 175.5C417.4 185.4 417.5 197.7 411.8 207.8C406.2 217.8 395.5 223.1 384 223.1H192C180.5 223.1 169.8 217.8 164.2 207.8C158.5 197.7 158.6 185.4 164.6 175.5L260.6 15.54C266.3 5.897 276.8 0 288 0C299.2 0 309.7 5.898 315.4 15.54L411.4 175.5zM288 312C288 289.9 305.9 272 328 272H472C494.1 272 512 289.9 512 312V456C512 478.1 494.1 496 472 496H328C305.9 496 288 478.1 288 456V312zM0 384C0 313.3 57.31 256 128 256C198.7 256 256 313.3 256 384C256 454.7 198.7 512 128 512C57.31 512 0 454.7 0 384z"></path>
          </svg>
        </div>
        Apps
      </a>
    </li>
    <li class="nav-item" style="--color: #ff9900">
      <a href="new.html" class="nav-link">
        <div class="icon" style="--tw-gradient-from: #ffc785; --tw-gradient-to: #ff9900; --tw-shadow-color: #ffc785">
          <svg class="svg-inline--fa fa-newspaper" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="newspaper" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg>
            <path fill="currentColor" d="M480 32H128C110.3 32 96 46.33 96 64v336C96 408.8 88.84 416 80 416S64 408.8 64 400V96H32C14.33 96 0 110.3 0 128v288c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V64C512 46.33 497.7 32 480 32zM272 416h-96C167.2 416 160 408.8 160 400C160 391.2 167.2 384 176 384h96c8.836 0 16 7.162 16 16C288 408.8 280.8 416 272 416zM272 320h-96C167.2 320 160 312.8 160 304C160 295.2 167.2 288 176 288h96C280.8 288 288 295.2 288 304C288 312.8 280.8 320 272 320zM432 416h-96c-8.836 0-16-7.164-16-16c0-8.838 7.164-16 16-16h96c8.836 0 16 7.162 16 16C448 408.8 440.8 416 432 416zM432 320h-96C327.2 320 320 312.8 320 304C320 295.2 327.2 288 336 288h96C440.8 288 448 295.2 448 304C448 312.8 440.8 320 432 320zM448 208C448 216.8 440.8 224 432 224h-256C167.2 224 160 216.8 160 208v-96C160 103.2 167.2 96 176 96h256C440.8 96 448 103.2 448 112V208z"></path>
          </svg>
        </div>
        News
      </a>
    </li>
    <li class="nav-item" style="--color: #a19494">
      <a href="topic.html" class="nav-link">
        <div class="icon" style="--tw-gradient-from: #a19494; --tw-gradient-to: #766e6e; --tw-shadow-color: #a19494">
          <svg class="svg-inline--fa fa-messages" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="messages" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
            <path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
          </svg>
        </div>
        Topics
      </a>
    </li>
    <!--<li class="nav-item" style="--color: #14c300">
      <a href="FAQ.html" class="nav-link">
        <div class="icon" style="--tw-gradient-from: #16d300; --tw-gradient-to: #14c300; --tw-shadow-color: #16d300">
          <svg class="svg-inline--fa fa-messages" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="messages" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg>
            <path fill="currentColor" d="M416 256V63.1C416 28.75 387.3 0 352 0H64C28.75 0 0 28.75 0 63.1v192C0 291.2 28.75 320 64 320l32 .0106v54.25c0 7.998 9.125 12.62 15.5 7.875l82.75-62.12L352 319.9C387.3 320 416 291.2 416 256zM576 128H448v128c0 52.87-43.13 95.99-96 95.99l-96 .0013v31.98c0 35.25 28.75 63.1 63.1 63.1l125.8-.0073l82.75 62.12C534.9 514.8 544 510.2 544 502.2v-54.24h32c35.25 0 64-28.75 64-63.1V191.1C640 156.7 611.3 128 576 128z"></path>
          </svg>
        </div>
        FAQ
      </a>
    </li>-->
  </ul>
  <ul class="md:block hidden">
    <li class="nav-item" style="margin-right: 0; --color: #ff2e00">
      <button aria-label="Toggle Dark Mode" title="Toggle Dark Mode" class="nav-link" onclick="toggleDarkMode()">
        <div class="icon" style="margin-right: 0; --tw-gradient-from: #ffa985; --tw-gradient-to: #ff2e00; --tw-shadow-color: #ffa985" dark-mode-icon>
          <svg class="svg-inline--fa fa-moon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="moon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg>
            <path fill="currentColor" d="M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z"></path>
          </svg>
        </div>
      </button>
    </li>
    <li class="nav-item" style="--color: #2400ff">
      <button aria-label="Toggle Search" title="Toggle Search" class="nav-link" onclick="toggleSearchBox()">
        <div class="icon" style="margin-right: 0; --tw-gradient-from: #9d85ff; --tw-gradient-to: #2400ff; --tw-shadow-color: #9d85ff">
          <svg class="svg-inline--fa fa-magnifying-glass" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="magnifying-glass" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg>
            <path fill="currentColor" d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"></path>
          </svg>
        </div>
      </button>
    </li>
  </ul>
  <button aria-label="Toggle search box" class="md:hidden block bg-green-100 text-green-500 w-10 h-10 rounded-xl mx-4 mr-0 dark:bg-[#273d52] dark:text-gray-100" onclick="toggleSearchBox()">
    <svg class="svg-inline--fa fa-magnifying-glass" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="magnifying-glass" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg>
      <path fill="currentColor" d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"></path>
    </svg>
  </button>
</div>
</nav>
<div class="fixed w-full top-0 h-full z-50 invisible opacity-0 transition-all" mobileNav>
      <div class="backdrop-blur fixed w-full h-full hidden transition-all" style="background-color: rgba(0, 0, 0, 0.3)" navOverlay></div>
      <ul class="mobile-nav-links fixed max-w-[384px] transition-all -left-[384px] w-full overflow-auto p-5 top-0 h-full rounded-r-[24px] bg-white dark:bg-[#172b3d]" navLinks>
        <div class="mb-3 flex justify-end">
          <button aria-label="Toogle navigation bar" class="bg-green-100 text-green-500 text-xl w-[40px] h-[40px] rounded-full dark:bg-[#273d52] dark:text-gray-100" onclick="toggleMobileNav()">
            <svg class="svg-inline--fa fa-xmark" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg>
              <path fill="currentColor" d="M315.3 411.3c-6.253 6.253-16.37 6.253-22.63 0L160 278.6l-132.7 132.7c-6.253 6.253-16.37 6.253-22.63 0c-6.253-6.253-6.253-16.37 0-22.63L137.4 256L4.69 123.3c-6.253-6.253-6.253-16.37 0-22.63c6.253-6.253 16.37-6.253 22.63 0L160 233.4l132.7-132.7c6.253-6.253 16.37-6.253 22.63 0c6.253 6.253 6.253 16.37 0 22.63L182.6 256l132.7 132.7C321.6 394.9 321.6 405.1 315.3 411.3z"></path>
            </svg>
          </button>
        </div>

        <div class="mb-4">
          <label for="mobileSearch" class="block w-full text-gray-600 font-lato text-center mb-2 uppercase text-sm dark:text-gray-300">Search</label>
          <div class="relative">
            <input type="text" id="mobileSearch" class="bg-white dark:bg-[#273d52] dark:border-gray-700 dark:text-gray-100 border px-4 py-2 rounded-full outline-none w-full block font-poppins focus:shadow-lg transition" placeholder="I want to find..." search-input />
            <button class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-700" onclick="doSearch()">
              <svg class="svg-inline--fa fa-magnifying-glass" aria-hidden="true" focusable="false" data-prefix="far" data-icon="magnifying-glass" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg>
                <path fill="currentColor" d="M504.1 471l-134-134C399.1 301.5 415.1 256.8 415.1 208c0-114.9-93.13-208-208-208S-.0002 93.13-.0002 208S93.12 416 207.1 416c48.79 0 93.55-16.91 129-45.04l134 134C475.7 509.7 481.9 512 488 512s12.28-2.344 16.97-7.031C514.3 495.6 514.3 480.4 504.1 471zM48 208c0-88.22 71.78-160 160-160s160 71.78 160 160s-71.78 160-160 160S48 296.2 48 208z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="flex flex-wrap">
          <li class="nav-item block w-1/2 p-1 mr-0" style="--color: #0085ff">
            <a href="idnex.html" class="text-center nav-link block w-full bg-[#85B6FF20] rounded-2xl p-3">
              <div class="mb-2">
                <div class="icon" style="margin-right: 0; --tw-gradient-from: #85b6ff; --tw-gradient-to: #0085ff; --tw-shadow-color: #85b6ff">
                  <svg class="svg-inline--fa fa-house" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="house" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg>
                    <path fill="currentColor" d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"></path>
                  </svg>
                </div>
              </div>
              Home
            </a>
          </li>
          <li class="nav-item block w-1/2 p-1 mr-0" style="--color: #ff0000">
            <a href="games.html" class="nav-link block w-full text-center bg-[#FF858520] rounded-2xl p-3">
              <div class="mb-2">
                <div class="icon" style="margin-right: 0; --tw-gradient-from: #ff8585; --tw-gradient-to: #ff0000; --tw-shadow-color: #ff8585">
                  <svg class="svg-inline--fa fa-gamepad-modern" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gamepad-modern" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg>
                    <path fill="currentColor" d="M640 384.2c0-5.257-.4576-10.6-1.406-15.98l-33.38-211.6C591.4 77.96 522 32 319.1 32C119 32 48.71 77.46 34.78 156.6l-33.38 211.6c-.9487 5.383-1.406 10.72-1.406 15.98c0 51.89 44.58 95.81 101.5 95.81c49.69 0 93.78-30.06 109.5-74.64l7.5-21.36h203l7.5 21.36c15.72 44.58 59.81 74.64 109.5 74.64C595.4 479.1 640 436.1 640 384.2zM247.1 248l-31.96-.0098L215.1 280c0 13.2-10.78 24-23.98 24c-13.2 0-24.02-10.8-24.02-24l.0367-32.01L135.1 248c-13.2 0-23.98-10.8-23.98-24c0-13.2 10.77-24 23.98-24l32.04-.011L167.1 168c0-13.2 10.82-24 24.02-24c13.2 0 23.98 10.8 23.98 24l.0368 31.99L247.1 200c13.2 0 24.02 10.8 24.02 24C271.1 237.2 261.2 248 247.1 248zM432 311.1c-22.09 0-40-17.92-40-40c0-22.08 17.91-40 40-40s40 17.92 40 40C472 294.1 454.1 311.1 432 311.1zM496 215.1c-22.09 0-40-17.92-40-40c0-22.08 17.91-40 40-40s40 17.92 40 40C536 198.1 518.1 215.1 496 215.1z"></path>
                  </svg>
                </div>
              </div>
              Games
            </a>
          </li>
          <li class="nav-item block w-1/2 p-1 mr-0" style="--color: #ad00ff">
            <a href="games.html" class="nav-link block w-full text-center bg-[#DF85FF20] rounded-2xl p-3">
              <div class="mb-2">
                <div class="icon" style="margin-right: 0; --tw-gradient-from: #df85ff; --tw-gradient-to: #ad00ff; --tw-shadow-color: #df85ff">
                  <svg class="svg-inline--fa fa-shapes" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shapes" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg>
                    <path fill="currentColor" d="M411.4 175.5C417.4 185.4 417.5 197.7 411.8 207.8C406.2 217.8 395.5 223.1 384 223.1H192C180.5 223.1 169.8 217.8 164.2 207.8C158.5 197.7 158.6 185.4 164.6 175.5L260.6 15.54C266.3 5.897 276.8 0 288 0C299.2 0 309.7 5.898 315.4 15.54L411.4 175.5zM288 312C288 289.9 305.9 272 328 272H472C494.1 272 512 289.9 512 312V456C512 478.1 494.1 496 472 496H328C305.9 496 288 478.1 288 456V312zM0 384C0 313.3 57.31 256 128 256C198.7 256 256 313.3 256 384C256 454.7 198.7 512 128 512C57.31 512 0 454.7 0 384z"></path>
                  </svg>
                </div>
              </div>
              Apps
            </a>
          </li>
          <li class="nav-item block w-1/2 p-1 mr-0" style="--color: #ff9900">
            <a href="new.html" class="nav-link block w-full text-center bg-[#FFC78520] rounded-2xl p-3">
              <div class="mb-2">
                <div class="icon" style="margin-right: 0; --tw-gradient-from: #ffc785; --tw-gradient-to: #ff9900; --tw-shadow-color: #ffc785">
                  <svg class="svg-inline--fa fa-newspaper" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="newspaper" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg>
                    <path fill="currentColor" d="M480 32H128C110.3 32 96 46.33 96 64v336C96 408.8 88.84 416 80 416S64 408.8 64 400V96H32C14.33 96 0 110.3 0 128v288c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V64C512 46.33 497.7 32 480 32zM272 416h-96C167.2 416 160 408.8 160 400C160 391.2 167.2 384 176 384h96c8.836 0 16 7.162 16 16C288 408.8 280.8 416 272 416zM272 320h-96C167.2 320 160 312.8 160 304C160 295.2 167.2 288 176 288h96C280.8 288 288 295.2 288 304C288 312.8 280.8 320 272 320zM432 416h-96c-8.836 0-16-7.164-16-16c0-8.838 7.164-16 16-16h96c8.836 0 16 7.162 16 16C448 408.8 440.8 416 432 416zM432 320h-96C327.2 320 320 312.8 320 304C320 295.2 327.2 288 336 288h96C440.8 288 448 295.2 448 304C448 312.8 440.8 320 432 320zM448 208C448 216.8 440.8 224 432 224h-256C167.2 224 160 216.8 160 208v-96C160 103.2 167.2 96 176 96h256C440.8 96 448 103.2 448 112V208z"></path>
                  </svg>
                </div>
              </div>
              News
            </a>
          </li>
          <li class="nav-item block w-1/2 p-1 mr-0" style="--color: #ff9900">
            <a href="topic.html" class="nav-link block w-full text-center bg-[#4F4B4620] rounded-2xl p-3">
              <div class="mb-2">
                <div class="icon" style="margin-right: 0; --tw-gradient-from: #a19494; --tw-gradient-to: #766e6e; --tw-shadow-color: #a19494">
                  <svg class="svg-inline--fa fa-newspaper" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="newspaper" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg>
                    <path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
                  </svg>
                </div>
              </div>
              Topics
            </a>
          </li>
          <li class="nav-item block w-1/2 p-1 mr-0" style="--color: #14c300">
            <a href="FAQ.html" class="nav-link block w-full text-center bg-[#16d30020] rounded-2xl p-3">
              <div class="mb-2">
                <div class="icon" style="margin-right: 0; --tw-gradient-from: #16d300; --tw-gradient-to: #14c300; --tw-shadow-color: #16d300">
                  <svg class="svg-inline--fa fa-messages" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="messages" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg>
                    <path fill="currentColor" d="M416 256V63.1C416 28.75 387.3 0 352 0H64C28.75 0 0 28.75 0 63.1v192C0 291.2 28.75 320 64 320l32 .0106v54.25c0 7.998 9.125 12.62 15.5 7.875l82.75-62.12L352 319.9C387.3 320 416 291.2 416 256zM576 128H448v128c0 52.87-43.13 95.99-96 95.99l-96 .0013v31.98c0 35.25 28.75 63.1 63.1 63.1l125.8-.0073l82.75 62.12C534.9 514.8 544 510.2 544 502.2v-54.24h32c35.25 0 64-28.75 64-63.1V191.1C640 156.7 611.3 128 576 128z"></path>
                  </svg>
                </div>
              </div>
              FAQ
            </a>
          </li>
          <li class="nav-item block w-1/2 p-1 mr-0" style="--color: #14c300">
            <button aria-label="Toggle Dark Mode" title="Toggle Dark Mode" class="nav-link block w-full text-center bg-[#FFA98520] rounded-2xl p-3" onclick="toggleDarkMode()">
              <div class="mb-2">
                <div class="icon" style="margin-right: 0; --tw-gradient-from: #ffa985; --tw-gradient-to: #ff2e00; --tw-shadow-color: #ffa985" dark-mode-icon>
                  <svg class="svg-inline--fa fa-moon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="moon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg>
                    <path fill="currentColor" d="M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z"></path>
                  </svg>
                </div>
              </div>
              Dark Mode
            </button>
          </li>
        </div>
      </ul>
    </div>

    <div class="w-full h-full bg-white dark:bg-[#172b3d] backdrop-blur-xl z-50 fixed top-0 left-0 justify-center items-center py-16 hidden" searchBox>
      <div class="max-w-[700px] w-full md:px-0 px-4 -mt-[180px]">
        <h2 class="sm:text-[48px] text-left text-[30px] block mb-1 font-bold text-gray-600 dark:text-white font-lato">
          <center>Search here</center>
        </h2>
        <center><p class="text-gray-500 text-lg mb-10 font-poppins dark:text-gray-300">Search here your favourite games or applications to download it instantly.</p></center>
        <div class="relative">
          <span class="absolute left-8 top-1/2 -translate-y-1/2 text-xl text-white">
            <svg class="svg-inline--fa fa-magnifying-glass" aria-hidden="true" focusable="false" data-prefix="far" data-icon="magnifying-glass" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg>
              <path fill="currentColor" d="M504.1 471l-134-134C399.1 301.5 415.1 256.8 415.1 208c0-114.9-93.13-208-208-208S-.0002 93.13-.0002 208S93.12 416 207.1 416c48.79 0 93.55-16.91 129-45.04l134 134C475.7 509.7 481.9 512 488 512s12.28-2.344 16.97-7.031C514.3 495.6 514.3 480.4 504.1 471zM48 208c0-88.22 71.78-160 160-160s160 71.78 160 160s-71.78 160-160 160S48 296.2 48 208z"></path>
            </svg>
          </span>
          <input type="text" class="bg-green-500 h-[80px] w-full outline-none shadow-xl pl-[70px] pr-[130px] text-xl text-white placeholder:text-gray-100 font-lato rounded-full" placeholder="Type here..." search-input />
          <button class="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-green-500 h-[60px] transition bg-white rounded-full w-[100px] shadow-lg uppercase" onclick="doSearch()">Go</button>
        </div>
      </div>
      <button class="absolute right-5 top-5 bg-green-100 text-green-500 text-xl w-[50px] h-[50px] rounded-full dark:bg-[#273d52] dark:text-gray-100" onclick="toggleSearchBox()">
        <svg class="svg-inline--fa fa-xmark" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg>
          <path fill="currentColor" d="M315.3 411.3c-6.253 6.253-16.37 6.253-22.63 0L160 278.6l-132.7 132.7c-6.253 6.253-16.37 6.253-22.63 0c-6.253-6.253-6.253-16.37 0-22.63L137.4 256L4.69 123.3c-6.253-6.253-6.253-16.37 0-22.63c6.253-6.253 16.37-6.253 22.63 0L160 233.4l132.7-132.7c6.253-6.253 16.37-6.253 22.63 0c6.253 6.253 6.253 16.37 0 22.63L182.6 256l132.7 132.7C321.6 394.9 321.6 405.1 315.3 411.3z"></path>
        </svg>
      </button>
    </div>`;
