import React, {useState} from 'react';
import style from './Comment.module.scss';
import LinkShop from './LinkShop';
import {AiFillStar} from 'react-icons/ai';
import {FiCheckCircle} from 'react-icons/fi';

export interface comment {
   name?: name;
   date: Date;
   rate?: number;
   picture?: picture;
   commentText?: string;
   verified?: boolean;
   key?: string | number;
}
interface name {
   first: string;
   last: string;
   title: string;
}
interface picture {
   large: string;
   medium: string;
   thumbnail: string;
}

function Comment(props: {comment: comment}) {
   let leg = props.comment.commentText;
   const [open, setOpen] = useState(leg ? leg.length : 0 < 340);
   return (
      <div className={style.comment} key={props.comment.key}>
         <div className={style.commentUser}>
            <div className={style.commentIMG} style={{backgroundImage: `url(${props.comment.picture?.medium})`}} />
            <h3>
               {`${props.comment.name?.first} ${props.comment.name?.last}`}
               {props.comment.rate && (
                  <span>
                     {props.comment.rate} <AiFillStar className={'star'} />
                  </span>
               )}
            </h3>
            <h4>{props.comment.date && `${props.comment.date?.getDate()} / ${props.comment.date.getMonth()} / ${props.comment.date.getFullYear()}`}</h4>
            {props.comment.verified && (
               <p>
                  Verified Owners
                  <FiCheckCircle />
               </p>
            )}
         </div>
         {props.comment.commentText && (
            <div>
               <div style={{maxHeight: open ? 'inherit' : 76}}>{props.comment.commentText}</div>
               {!open && (
                  <LinkShop blue onClick={() => setOpen(true)}>
                     Read More...
                  </LinkShop>
               )}
            </div>
         )}
      </div>
   );
}
export default React.memo(Comment);
