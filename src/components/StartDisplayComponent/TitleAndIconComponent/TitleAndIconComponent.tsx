import React from 'react'
import styles from './titleAndIconComponent.module.scss'
export default function TitleAndIconComponent() {
  return (
    <div className={styles.titleAndIconContainer}>
      <div className={styles.explodingText}>EXPLODING</div>
      <div className={styles.kittensText}>KITTENS</div>
      <div className={styles.icon}>
        <img alt='Background_Icon' src='./background_icon.png'></img>
      </div>
    </div>
  )
}
