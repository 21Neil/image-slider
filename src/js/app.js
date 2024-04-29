import slidesController from './slidesController'
import timer from './timer'

const app = () => {
  const forwardBtn = document.querySelector('button.forward')
  const backBtn = document.querySelector('button.back')
  timer.start(slidesController.next, 5000)

  const forwardBtnOnClick = () => {
    slidesController.next()
    timer.reset(slidesController.next, 5000)
  }

  const backBtnOnClick = () => {
    slidesController.previous()
    timer.reset(slidesController.next, 5000)
  }

  forwardBtn.addEventListener('click', forwardBtnOnClick)
  backBtn.addEventListener('click', backBtnOnClick)
}

export default app