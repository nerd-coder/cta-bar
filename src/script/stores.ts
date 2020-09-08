export default function useMobileScroll(area,elmPrev,elmAfter,btnBack,btnNext){
  const elmAfterX = elmAfter.getBoundingClientRect().x
  if(elmAfterX >= 300){
    btnNext.classList.remove("hide")
  }else{
    btnNext.classList.add("hide")
  }

  const options = {
    root: area,
    rootMargin: '10px',
    threshold: 1.0
  }

  const observer = new IntersectionObserver((entries, observer) => {
    let isDisplay = true
    for (const entry of entries) {
      entry.boundingClientRect.x <= 0? isDisplay = false : isDisplay = true
      if(isDisplay){
        btnBack.classList.add("hide")
        return
      }
      btnBack.classList.remove("hide")
    }
  }, options);
  
  observer.observe(elmPrev)
}

export const useMScroll = useMobileScroll
 