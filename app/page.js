import styles from './page.module.css'

//this file represend how to add styles to our pages and components in nextjs

export default function Home() {
  return (
   <>
    <div className={styles.home}>
    This is the home page
    </div>
   </> 
  )
}
