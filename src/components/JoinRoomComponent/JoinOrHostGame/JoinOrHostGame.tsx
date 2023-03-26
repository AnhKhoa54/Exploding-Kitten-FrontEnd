import React from 'react'
import styles from './joinOrHostGame.module.scss'
export default function JoinOrHostGame() {
  return (
    <div className={styles.joinAndHostRoomComponent}>
      <div className={styles.header}>
        <div className={styles.mainText}>JOIN A GAME</div>
        <div className={styles.subText}>(on the Internet)</div>
      </div>
      <div className={styles.contents}>
        <div className={styles.logo}>
          <img alt='' src='./background_icon.png' />
        </div>
        <div className={styles.information}>
          <div className={styles.text}>USE A GAME CODE TO JOIN A FRIEND'S GAME</div>
          <div className={styles.button}>ENTER CODE</div>
        </div>
      </div>
    </div>
  )
}
