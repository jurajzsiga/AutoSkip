MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

const appWrapper = $("#appMountPoint")[0]
console.log('here', appWrapper)

let observer = new MutationObserver(function (mutation, observer) {
  $(appWrapper).find("a[aria-label='Skip Intro']").each(function (index) {
    $(this)[0].click()
  })
})

observer.observe(appWrapper, {
  subtree: true,
  attributes: false,
  childList: true
})
