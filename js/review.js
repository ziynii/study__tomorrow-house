const reviewLikeButtonList = document.querySelectorAll(
  '.review-card-footer button'
)

const HELPFUL = '도움됨'
const NOT_HELPFUL = '도움이 돼요'
// const checkIcon = '<i class="ic-check" aria-hidden></i>'

function toggleReviewLikeButton() {
  const isLiked = this.classList.contains('btn-primary')
  const textElement = this.nextElementSibling
  const reviewCardFooter = this.parentNode

  if (isLiked) {
    this.innerHTML = NOT_HELPFUL
  } else {
    const checkIcon = document.createElement('i')
    checkIcon.classList.add('ic-check')
    checkIcon.setAttribute('aria-hidden', true)
    this.innerHTML = HELPFUL
    this.prepend(checkIcon)
  }

  if (textElement) {
    const countSpan = textElement.querySelector('span')
    const count = Number(countSpan.innerHTML.replaceAll(',', ''))

    let newCount = count
    if (isLiked) {
      newCount = newCount - 1
      if (newCount === 0) {
        reviewCardFooter.removeChild(textElement)
      }
      countSpan.innerHTML = newCount.toLocaleString()
    } else {
      newCount = newCount + 1
      countSpan.innerHTML = newCount.toLocaleString()
    }
  } else {
    if (!isLiked) {
      const newTextElement = document.createElement('p')
      newTextElement.innerHTML =
        '<strong><span>1</span>명</strong>에게 도움이 되었습니다.'
      reviewCardFooter.appendChild(newTextElement)
    }
  }

  this.classList.toggle('btn-primary')
  this.classList.toggle('btn-outlined')
}

reviewLikeButtonList.forEach((reviewLikeButton) => {
  reviewLikeButton.addEventListener('click', toggleReviewLikeButton)
})
