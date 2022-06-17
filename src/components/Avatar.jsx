import styles from './Avatar.module.css'

export function Avatar ({imageAddress, hasBorder=true}){
  return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={imageAddress} alt="" />
  )
}