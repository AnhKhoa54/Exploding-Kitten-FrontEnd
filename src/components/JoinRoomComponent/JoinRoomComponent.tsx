import React from 'react'
import JoinOrHostGame from './JoinOrHostGame/JoinOrHostGame'
import BackButton from '../General/BackButton'
import styles from './joinRoomComponent.module.scss'

export default function JoinRoomComponent() {
  return (
    <div className={styles.joinRoomInterfaceContainer}>
      <div className={styles.backButtonContainer}>
        <BackButton />
      </div>
      <div className={styles.joinAndHostRoomContainer}>
        <JoinOrHostGame />
        <JoinOrHostGame />
      </div>
    </div>
  )
}
