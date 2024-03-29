const html = document.querySelector("html"),
  body = document.querySelector("body"),
  lightLogo = document.querySelectorAll(".light-logo"),
  darkLogo = document.querySelectorAll(".dark-logo"),
  updateDiv = (e) => {
    $(e).load(`${window.location.href} ${e}`);
  },
  showAlert = (e) => {
    $(e).removeClass("hidden"),
      setTimeout(() => {
        $(e).addClass("hidden");
      }, 3e3);
  },
  toggleSearchBox = () => {
    const e = document.querySelector("[searchBox]");
    e.classList.contains("hidden") ? (e.classList.remove("hidden"), e.classList.add("flex")) : (e.classList.add("hidden"), e.classList.remove("flex"));
  },
  toggleDarkMode = () => {
    const e = document.querySelectorAll("[dark-mode-icon]");
    "true" === localStorage.getItem("darkMode")
      ? (localStorage.setItem("darkMode", "false"),
        html.classList.remove("dark"),
        e.forEach((e) => {
          e.innerHTML = '<svg class="svg-inline--fa fa-moon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="moon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z"></path></svg>';
        }),
        lightLogo.forEach((e) => {
          e.classList.remove("hidden");
        }),
        darkLogo.forEach((e) => {
          e.classList.add("hidden");
        }))
      : (localStorage.setItem("darkMode", "true"),
        html.classList.add("dark"),
        e.forEach((e) => {
          e.innerHTML = '<svg class="svg-inline--fa fa-sun" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sun" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 159.1c-53.02 0-95.1 42.98-95.1 95.1S202.1 351.1 256 351.1s95.1-42.98 95.1-95.1S309 159.1 256 159.1zM509.3 347L446.1 255.1l63.15-91.01c6.332-9.125 1.104-21.74-9.826-23.72l-109-19.7l-19.7-109c-1.975-10.93-14.59-16.16-23.72-9.824L256 65.89L164.1 2.736c-9.125-6.332-21.74-1.107-23.72 9.824L121.6 121.6L12.56 141.3C1.633 143.2-3.596 155.9 2.736 164.1L65.89 256l-63.15 91.01c-6.332 9.125-1.105 21.74 9.824 23.72l109 19.7l19.7 109c1.975 10.93 14.59 16.16 23.72 9.824L256 446.1l91.01 63.15c9.127 6.334 21.75 1.107 23.72-9.822l19.7-109l109-19.7C510.4 368.8 515.6 356.1 509.3 347zM256 383.1c-70.69 0-127.1-57.31-127.1-127.1c0-70.69 57.31-127.1 127.1-127.1s127.1 57.3 127.1 127.1C383.1 326.7 326.7 383.1 256 383.1z"></path></svg>';
        }),
        lightLogo.forEach((e) => {
          e.classList.add("hidden");
        }),
        darkLogo.forEach((e) => {
          e.classList.remove("hidden");
        }));
  },
  initDarkMode = () => {
    const e = document.querySelectorAll("[dark-mode-icon]");
    localStorage.getItem("darkMode") || localStorage.setItem("darkMode", "false"),
      "true" === localStorage.getItem("darkMode")
        ? (html.classList.add("dark"),
          e.forEach((e) => {
            e.innerHTML = '<svg class="svg-inline--fa fa-sun" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sun" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 159.1c-53.02 0-95.1 42.98-95.1 95.1S202.1 351.1 256 351.1s95.1-42.98 95.1-95.1S309 159.1 256 159.1zM509.3 347L446.1 255.1l63.15-91.01c6.332-9.125 1.104-21.74-9.826-23.72l-109-19.7l-19.7-109c-1.975-10.93-14.59-16.16-23.72-9.824L256 65.89L164.1 2.736c-9.125-6.332-21.74-1.107-23.72 9.824L121.6 121.6L12.56 141.3C1.633 143.2-3.596 155.9 2.736 164.1L65.89 256l-63.15 91.01c-6.332 9.125-1.105 21.74 9.824 23.72l109 19.7l19.7 109c1.975 10.93 14.59 16.16 23.72 9.824L256 446.1l91.01 63.15c9.127 6.334 21.75 1.107 23.72-9.822l19.7-109l109-19.7C510.4 368.8 515.6 356.1 509.3 347zM256 383.1c-70.69 0-127.1-57.31-127.1-127.1c0-70.69 57.31-127.1 127.1-127.1s127.1 57.3 127.1 127.1C383.1 326.7 326.7 383.1 256 383.1z"></path></svg>';
          }),
          lightLogo.forEach((e) => {
            e.classList.add("hidden");
          }),
          darkLogo.forEach((e) => {
            e.classList.remove("hidden");
          }))
        : (html.classList.remove("dark"),
          e.forEach((e) => {
            e.innerHTML = '<svg class="svg-inline--fa fa-moon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="moon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z"></path></svg>';
          }),
          lightLogo.forEach((e) => {
            e.classList.remove("hidden");
          }),
          darkLogo.forEach((e) => {
            e.classList.add("hidden");
          }));
  };
initDarkMode();
const autoActiveMenu = () => {
  const e = window.location.href;
  document.querySelectorAll(".nav-link").forEach((t) => {
    t.getAttribute("href") === e && t.classList.add("active");
  });
};
autoActiveMenu();
const toggleMobileNav = () => {
    const e = document.querySelector("[mobileNav]"),
      t = document.querySelector("[navLinks]"),
      a = document.querySelector("[navOverlay]");
    t.classList.contains("-left-[384px]") ? (e.classList.remove("invisible"), e.classList.remove("opacity-0"), t.classList.remove("-left-[384px]"), t.classList.add("left-0"), a.classList.remove("hidden")) : (e.classList.add("invisible"), e.classList.add("opacity-0"), t.classList.add("-left-[384px]"), t.classList.remove("left-0"), a.classList.add("hidden"));
  },
  expandDescription = () => {
    const e = document.querySelector("[expand-description]"),
      t = document.querySelector("[expand-button]");
    e.classList.contains("active") ? (e.classList.remove("active"), (t.innerHTML = '<svg class="svg-inline--fa fa-circle-plus mr-2 text-lg" aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M232 344V280H168C154.7 280 144 269.3 144 256C144 242.7 154.7 232 168 232H232V168C232 154.7 242.7 144 256 144C269.3 144 280 154.7 280 168V232H344C357.3 232 368 242.7 368 256C368 269.3 357.3 280 344 280H280V344C280 357.3 269.3 368 256 368C242.7 368 232 357.3 232 344zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path></svg> Expand Description')) : (e.classList.add("active"), (t.innerHTML = '<svg class="svg-inline--fa fa-circle-minus mr-2 text-lg" aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle-minus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M344 232C357.3 232 368 242.7 368 256C368 269.3 357.3 280 344 280H168C154.7 280 144 269.3 144 256C144 242.7 154.7 232 168 232H344zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path></svg> Collapse Description'));
  },
  expandFAQ = (e) => {
    const t = document.querySelector(`[faq-${e}]`),
      a = document.querySelector(`[faq-icon-${e}]`);
    t.classList.contains("hidden") ? (t.classList.remove("hidden"), (a.innerHTML = '<svg class="w-4 h-4" width="18" height="10" viewbox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.18267 9.00018C0.910673 9.26818 0.473672 9.26818 0.203672 9.00018C-0.0663284 8.73218 -0.0673279 8.29918 0.203672 8.03118L8.11167 0.201183C8.38167 -0.0668173 8.81867 -0.0668173 9.09067 0.201183L16.9987 8.03118C17.2687 8.29918 17.2687 8.73218 16.9987 9.00018C16.7277 9.26818 16.2897 9.26818 16.0197 9.00018L8.60067 1.85918L1.18267 9.00018Z" fill="#00c35e"></path></svg>')) : (t.classList.add("hidden"), (a.innerHTML = '<svg class="w-4 h-4" width="18" height="10" viewbox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.0185 0.999999C16.2905 0.732 16.7275 0.732 16.9975 0.999999C17.2675 1.268 17.2685 1.701 16.9975 1.969L9.0895 9.799C8.8195 10.067 8.3825 10.067 8.1105 9.799L0.2025 1.969C-0.0675004 1.701 -0.0675004 1.268 0.2025 1C0.4735 0.732 0.9115 0.732 1.1815 1L8.6005 8.141L16.0185 0.999999Z" fill="#00c35e"></path></svg>'));
  };

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[show-download-item]").forEach((a) => {
    a.addEventListener("click", (d) => {
      let b = d.target.getAttribute("data-download-id"),
        a = document.querySelector(`#download${b}`),
        c = document.querySelector(`#downloadIcon${b}`);
      document.querySelectorAll(".downloadLink").forEach((a) => {
        a.classList.contains("active") && a.classList.replace("active", "non-active");
      }),
        document.querySelectorAll(".downloadIcon").forEach((a) => {
          a.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="width: 16px; height: 16px;" fill="#7e7e7e"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" /></svg>';
        }),
        a.classList.contains("active") ? (a.classList.replace("active", "non-active"), (c.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="width: 16px; height: 16px;" fill="#7e7e7e"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" /></svg>')) : (a.classList.replace("non-active", "active"), (c.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="width: 16px; height: 16px;" fill="#7e7e7e"><path d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"/></svg>'));
    });
  });
});

const closeAlert = () => {
    document.querySelectorAll("[alert-box]").forEach((e) => {
      e.classList.add("hidden");
    });
  },
  replyComment = (e, t) => {
    document.getElementById("comment" + t).innerHTML = '<form action="" method="POST" class="p-5"><div class="-m-3 flex flex-wrap"><div class="lg:w-4/12 sm:w-6/12 w-full p-3 relative"><label for="full-name" class="leading-7 text-sm text-gray-600 dark:text-gray-100 font-lato">Full Name</label><input type="text" id="full-name" name="full-name" class="w-full px-3 py-2 border dark:border-gray-600 focus:ring-green-500 focus:ring-2 outline-none focus:border-transparent rounded-lg font-poppins bg-white dark:bg-gray-800 dark:text-white" required=""></div><div class="lg:w-4/12 sm:w-6/12 w-full p-3 relative"><label for="email" class="leading-7 text-sm text-gray-600 dark:text-gray-100 font-lato">Email Address</label><input type="text" id="email" name="email" class="w-full px-3 py-2 border dark:border-gray-600 focus:ring-green-500 focus:ring-2 outline-none focus:border-transparent rounded-lg font-poppins bg-white dark:bg-gray-800 dark:text-white" required=""></div><div class="lg:w-4/12 sm:w-6/12 w-full p-3 relative"><label for="website" class="leading-7 text-sm text-gray-600 dark:text-gray-100 font-lato">Website (Optional)</label><input type="url" id="website" name="website" class="w-full px-3 py-2 border dark:border-gray-600 focus:ring-green-500 focus:ring-2 outline-none focus:border-transparent rounded-lg font-poppins bg-white dark:bg-gray-800 dark:text-white"></div><div class="w-full p-3"><label for="message" class="leading-7 text-sm text-gray-600 dark:text-gray-100 font-lato">Message</label><textarea rows="5" minlength="5" id="message" name="message" class="w-full px-3 py-2 border dark:border-gray-600 focus:ring-green-500 focus:ring-2 outline-none focus:border-transparent rounded-lg font-poppins bg-white dark:bg-gray-800 dark:text-white" required=""></textarea></div></div><input type="hidden" name="parent" value="' + t + '"><button class="btn mt-3" name="post-comment" type="submit" style="border-radius: 8px;">Post Comment</button></form>';
  },
  toggleToc = () => {
    const e = document.querySelector("[table-of-contents]");
    e.classList.contains("hidden") ? e.classList.replace("hidden", "block") : e.classList.replace("block", "hidden");
  },
  doSearch = () => {
    let e;
    document.querySelectorAll("[search-input]").forEach((t) => {
      "" != t.value && (e = t.value);
    }),
      null != e && (window.location.href = `${baseUrl}search/${e}`);
  },
  removeFooterAd = () => {
    document.querySelector("#footer-ad").classList.add("hidden");
  },
  toggleSubCategories = (e) => {
    const t = document.querySelector("[sub-categories]"),
      a = document.querySelector("[toggle-sub-category-btn]");
    t.classList.contains("max-h-0") ? (t.classList.replace("max-h-0", "max-h-[5000px]"), (a.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="25px" height="25px"><path fill="currentColor" d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"/></svg>')) : (t.classList.replace("max-h-[5000px]", "max-h-0"), (a.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="25px" height="25px"><path fill="currentColor" d="M169.4 278.6C175.6 284.9 183.8 288 192 288s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0L192 210.8L54.63 73.38c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L169.4 278.6zM329.4 265.4L192 402.8L54.63 265.4c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25l160 160C175.6 476.9 183.8 480 192 480s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25S341.9 252.9 329.4 265.4z"/></svg>'));
  };
document.addEventListener("keyup", function (e) {
  if (13 === e.keyCode) {
    let e;
    document.querySelectorAll("[search-input]").forEach((t) => {
      "" != t.value && (e = t.value);
    }),
      null != e && doSearch();
  }
});

window.addEventListener("scroll", function () {
  var backToTop = document.getElementById("back-to-top");
  if (document.documentElement.scrollTop > 700) {
    backToTop.classList.add("show");
    backToTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  } else {
    backToTop.classList.remove("show");
  }
});
/*  $(document).ready(function () {
    const e = $("#rateYo"),
      t = e.data("rating"),
      a = e.data("post-id");
    e.rateYo({ rating: t, starWidth: "30px", normalFill: "#dce1e5", ratedFill: "#58db85", spacing: "5px", fullStar: !0, starSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">\x3c!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg>' }).on("rateyo.set", function (e, t) {
      if (localStorage.getItem("rating") == a) return void showAlert("#you-already-rated");
      const o = t.rating;
      $.ajax({
        url: baseUrl + "ajax",
        type: "post",
        data: { update_rating: !0, post_id: a, user_rating: o },
        success: function (e) {
          var t;
          1 == e && (localStorage.setItem("rating", a), (t = "#rating-wrapper"), $(t).load(`${window.location.href} ${t}`), showAlert("#you-have-rated"));
        },
      });
    }),
      $("#load-more-comments").on("click", function () {
        let e = $("#comment_offset");
        e.val(Number(e.val()) + 20),
          $.ajax({
            url: baseUrl + "ajax",
            type: "post",
            data: { load_more_comments: !0, offset: e.val(), post_id: $("#post_id").val() },
            success: function (e) {
              e.length > 0 ? $("#more-comments").before(e) : $("#load-more-comments").remove();
            },
          });
      });
  }); */

document.addEventListener("DOMContentLoaded", function () {
  const languageToggle = document.querySelector(".language-toggle");
  const languageList = document.querySelector(".language-list");

  languageToggle.addEventListener("click", () => {
    languageList.classList.toggle("show");
  });

  const languageTogglem = document.querySelector(".language-mtoggle");
  const languageListm = document.querySelector(".language-mlist");

  languageTogglem.addEventListener("click", () => {
    languageListm.classList.toggle("show");
  });
});
