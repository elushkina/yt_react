import React from "react";
import styles from "./Users.module.css";
import userPhotoDefault from "../../assets/images/9jFnvrCM-fk.jpg";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return  <>
        <div className={styles.page_numbers}>
            {pages.slice(0, 10).map(p => <div
                className={`${styles.number} ${props.currentPage === p && styles.selectedPage}`}
                onClick={(e) => {
                    props.onPageChanged(p)
                }}>{p}</div>
            )}
        </div>
        {
            props.users.map(u => <div className={styles.about} key={u.id}>
                <div>
                    <div>
                        <img className={styles.image} src={u.photos.small != null ? u.photos.small : userPhotoDefault}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </div>
                <div>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </div>
                </div>
            </div>)
        }
    </>
}

export default Users