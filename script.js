var arr = [
  {
    dp: "https://plus.unsplash.com/premium_photo-1664015982598-283bcdc9cae8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVufGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1657533987073-764666d9b47d?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8ODg2MjU0M3x8ZW58MHx8fHx8",
  },

  {
    dp: "https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVufGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1555744038-d0bf77748106?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8NDMwNDkyNXx8ZW58MHx8fHx8",
  },

  {
    dp: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1508965100846-ae68ffb96445?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTY0Mzk3OXx8ZW58MHx8fHx8",
  },

  {
    dp: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1642572633246-48e0eb22c50e?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTU1MDYwMXx8ZW58MHx8fHx8",
  },

  {
    dp: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVufGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1566191142644-9b5c6e45f344?w=294&dpr=2&h=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8NDY5NzI3Mnx8ZW58MHx8fHx8",
  },
];

var storiyan = document.querySelector(".storiyan");

var clutter = "";
arr.forEach(function (elem, idx) {
  clutter += `<div class="story">
  <img id="${idx}" src="${elem.dp}" alt="" />
</div>`;
});

storiyan.innerHTML = clutter;
storiyan.addEventListener("click", function (dets) {
  document.querySelector(".full-screen").style.display = "block";
  document.querySelector(".full-screen").style.backgroundImage = `url(${
    arr[dets.target.id].story
  })`;

  setTimeout(function () {
    document.querySelector(".full-screen").style.display = "none";
  }, 3000);
});
