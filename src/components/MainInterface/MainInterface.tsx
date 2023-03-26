import React from 'react'
import styles from './mainInterface.module.scss'
import TitleAndIconComponent from './TitleAndIconComponent/TitleAndIconComponent'
import TutorialButtonComponent from './TutorialButtonComponent/TutorialButtonComponent'
import PlayButtonComponent from './PlayButtonComponent/PlayButtonComponent'
export default function MainInterface() {
  return (
    <div className={styles.mainInterfaceContainer}>
      <div className={styles.titleAndIconComponent}>
        <TitleAndIconComponent />
      </div>
      <div className={styles.joinRoomAndTutorialComponent}>
        <PlayButtonComponent />
        <PlayButtonComponent />
        <TutorialButtonComponent />
      </div>
    </div>
  )
}
