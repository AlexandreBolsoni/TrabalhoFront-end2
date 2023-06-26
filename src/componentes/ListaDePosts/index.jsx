/*
import { Link } from 'react-router-dom'
import MenuLink from '../MenuLink'
*/
import styles from './ListaDePosts.module.css'
import posts from '../../json/posts.json'
import PostLink from '../PostLink'

export default function ListaDePosts() {


    return (
        <div className={styles.ListaDePosts}>
           {posts.map(item => <PostLink key={item.slug} post={item} />)}
        </div>
    )
  }
  