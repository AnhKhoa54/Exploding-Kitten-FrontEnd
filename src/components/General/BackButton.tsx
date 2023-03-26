import React from 'react'
import styles from './backButton.module.scss'
export default function BackButton() {
  return (
    <div className={styles.backButtonContainer}>
      <img alt='Turrn back' src='./turn-back-icon.png' />
    </div>
  )
}
