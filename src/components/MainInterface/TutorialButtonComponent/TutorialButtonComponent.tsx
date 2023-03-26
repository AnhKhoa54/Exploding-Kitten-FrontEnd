import React from 'react'
import styles from './tutorialButtonComponent.module.scss'
export default function TutorialButtonComponent() {
  return (
    <div className={styles.tutorialButtonContainer}>
      <div className={styles.mainComponent}>
        <div className={styles.iconComponent}>
          <img alt='' src='./background_icon.png'></img>
        </div>
        <div className={styles.textComponent}>
          <div className={styles.mainText}>TUTORIAL</div>
          <div className={styles.subText}>LEARN THE ROPES</div>
        </div>
      </div>
    </div>
  )
}
