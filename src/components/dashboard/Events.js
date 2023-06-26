import React from 'react'
import { EventImg } from '../../assets/images/logos';
import { User1, User2 } from '../../assets/images/users';

const Events = () => {
    const events = [
        {
            id: 1,
            name: 'Design review',
            time: '9:00 AM — 10:hvvv AM',
            eventImg : EventImg,
            users: [
                User1,
                User2,
            ]
        },
        {
            id:2,
            name: 'Design review',
            time: '9:00 AM — 10:hvvv AM',
            eventImg : EventImg,
            users: [
                User1,
                User2
            ]
        },
        {
            id: 3,
            name: 'Design review',
            time: '9:00 AM — 10:hvvv AM',
            eventImg : EventImg,
            users: [
                User1,
                User2
            ]
        }
    ]
  return (
    <div className="pieChart p-3 mt-2">
        <h3>Coming Events</h3>
          {events.map(event => (
            <div key={event.id} className="evetsList d-flex px-2 py-3">
               <div>
                <img src={event.eventImg} />
               </div>
               <div className="mx-3 eventUserInfo">
                 <h6>{event.name}</h6>
                 <p>{event.time}</p>
                 {event?.users?.map(user => (
                    <img key={user} className="rounded-circle" src={user} alt="user" />
                 ))}
               </div>
            </div>
          ))}
    </div>
  )
}

export default Events