import React from 'react'
import styles from './playButtonComponent.module.scss'

export default function PlayButtonComponent() {
  return (
    <div className={styles.playButtonContainer}>
      <div className={styles.mainComponent}>
        <div className={styles.iconComponent}>
          <img alt='' src='./background_icon.png'></img>
        </div>
        <div className={styles.textComponent}>
          <div className={styles.mainText}>PLAY WITH FRIENDS</div>
          <div className={styles.subText}>FACE-TO-FACE OR ONLINE</div>
        </div>
        <div className={styles.directBtnComponent}>
          <img alt='' src='./dirrect-icon.png'></img>
        </div>
      </div>
    </div>
  )
}
