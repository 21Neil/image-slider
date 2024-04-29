const slidesController = (() => {
  const slidesContainer = document.querySelector('.slides-container')
  let left = 0

  const next = () => {
    if (left === -3000) {
      first()
      dotController.first()
      return;
    }

    left -= 750
    slidesContainer.style.left = `${left}px`
    dotController.next()
  }

  const previous = () => {
    if (left === 0) {
      last()
      dotController.last()
      return;
    }

    left += 750
    slidesContainer.style.left = `${left}px`
    dotController.previous()
  }

  const first = () => {
    left = 0
    slidesContainer.style.left = `${left}px`
  }

  const last = () => {
    left = -3000
    slidesContainer.style.left = `${left}px`
  }

  
  
  return { next, previous }
})()

const dotController = (() => {
  let currentIndex = 1
  
  const removePrevClass = () => {
    const previousDot = document.querySelector(`.dot:nth-child(${currentIndex})`)
    previousDot.classList.remove('current')
  }
  
  const addCurrentClass = () => {
    const currentDot = document.querySelector(`.dot:nth-child(${currentIndex})`)
    currentDot.classList.add('current')
  }
  
  const next = () => {
    removePrevClass()
    currentIndex += 1
    addCurrentClass()
  }
  
  const previous = () => {
    removePrevClass()
    currentIndex -= 1
    addCurrentClass()
  }
  
  const first = () => {
    removePrevClass()
    currentIndex = 1
    addCurrentClass()
  }
  
  const last = () => {
    removePrevClass()
    currentIndex = 5
    addCurrentClass()
  }
  
  return { next, previous, first, last }
})()

export default slidesController