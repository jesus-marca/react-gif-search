import styles from './GifItem.module.scss'
export const GifItem = ({title,url}) => {
  return (
    <div className={styles.card}>
     <img src={url} alt="" />
     <p>{title}</p>
    </div>
  )
}

// export default GifItem
