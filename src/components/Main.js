import React from 'react'
import heart from '../images/icons8-heart-16.png'
export default function Main(props) {
    // let img1 = {
    //     "id": "VWcPlbHglYc",
    //     "slug": "VWcPlbHglYc",
    //     "created_at": "2017-06-11T21:17:03Z",
    //     "updated_at": "2023-10-17T16:01:31Z",
    //     "promoted_at": "2017-06-12T10:24:27Z",
    //     "width": 5472,
    //     "height": 3648,
    //     "color": "#d9d9d9",
    //     "blur_hash": "LTKeG.00Rj%3%ND%oLxuWAaxaeof",
    //     "description": "Office",
    //     "alt_description": "turned off laptop computer on top of brown wooden table",
    //     "breadcrumbs": [],
    //     "urls": {
    //         "raw": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHwxfHxvZmZpY2V8ZW58MHx8fHwxNjk3NjIxNTQwfDA&ixlib=rb-4.0.3",
    //         "full": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHwxfHxvZmZpY2V8ZW58MHx8fHwxNjk3NjIxNTQwfDA&ixlib=rb-4.0.3&q=85",
    //         "regular": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHwxfHxvZmZpY2V8ZW58MHx8fHwxNjk3NjIxNTQwfDA&ixlib=rb-4.0.3&q=80&w=1080",
    //         "small": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHwxfHxvZmZpY2V8ZW58MHx8fHwxNjk3NjIxNTQwfDA&ixlib=rb-4.0.3&q=80&w=400",
    //         "thumb": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHwxfHxvZmZpY2V8ZW58MHx8fHwxNjk3NjIxNTQwfDA&ixlib=rb-4.0.3&q=80&w=200",
    //         "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1497215728101-856f4ea42174"
    //     },
    //     "links": {
    //         "self": "https://api.unsplash.com/photos/VWcPlbHglYc",
    //         "html": "https://unsplash.com/photos/VWcPlbHglYc",
    //         "download": "https://unsplash.com/photos/VWcPlbHglYc/download?ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHwxfHxvZmZpY2V8ZW58MHx8fHwxNjk3NjIxNTQwfDA",
    //         "download_location": "https://api.unsplash.com/photos/VWcPlbHglYc/download?ixid=M3w1MTcxMTd8MHwxfHNlYXJjaHwxfHxvZmZpY2V8ZW58MHx8fHwxNjk3NjIxNTQwfDA"
    //     },
    //     "likes": 3215,
    //     "liked_by_user": false,
    //     "current_user_collections": [],
    //     "sponsorship": null,
    //     "topic_submissions": {
    //         "business-work": {
    //             "status": "approved",
    //             "approved_on": "2020-04-06T14:20:15Z"
    //         }
    //     },
    //     "user": {
    //         "id": "zJgeEcvxc0o",
    //         "updated_at": "2023-09-27T04:14:52Z",
    //         "username": "alesiaskaz",
    //         "name": "Alesia Kaz",
    //         "first_name": "Alesia",
    //         "last_name": "Kaz",
    //         "twitter_username": null,
    //         "portfolio_url": "http://saltnstreets.com",
    //         "bio": "Ottawa-based photographer who loves adventures.\r\n Gear: Canon 6D 85mm, 35 mm;            Leica Q2",
    //         "location": "Ottawa",
    //         "links": {
    //             "self": "https://api.unsplash.com/users/alesiaskaz",
    //             "html": "https://unsplash.com/@alesiaskaz",
    //             "photos": "https://api.unsplash.com/users/alesiaskaz/photos",
    //             "likes": "https://api.unsplash.com/users/alesiaskaz/likes",
    //             "portfolio": "https://api.unsplash.com/users/alesiaskaz/portfolio",
    //             "following": "https://api.unsplash.com/users/alesiaskaz/following",
    //             "followers": "https://api.unsplash.com/users/alesiaskaz/followers"
    //         },
    //         "profile_image": {
    //             "small": "https://images.unsplash.com/profile-1596578750003-cc29df35976eimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    //             "medium": "https://images.unsplash.com/profile-1596578750003-cc29df35976eimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
    //             "large": "https://images.unsplash.com/profile-1596578750003-cc29df35976eimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
    //         },
    //         "instagram_username": "saltnstreets",
    //         "total_collections": 9,
    //         "total_likes": 39,
    //         "total_photos": 60,
    //         "accepted_tos": true,
    //         "for_hire": true,
    //         "social": {
    //             "instagram_username": "saltnstreets",
    //             "portfolio_url": "http://saltnstreets.com",
    //             "twitter_username": null,
    //             "paypal_email": null
    //         }
    //     },
    //     "tags": [
    //         {
    //             "type": "search",
    //             "title": "business"
    //         },
    //         {
    //             "type": "search",
    //             "title": "work"
    //         },
    //         {
    //             "type": "search",
    //             "title": "interior"
    //         }
    //     ]
    // }
    return (
        <div className={`container`} id='main'>
            <div className="card-columns">
                {
                    props.items.results&&props.items.results.map((elem) => {
                        return <div key={elem.id}>
                            <div className="modal fade" id={`key${elem.id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-lg">
                                    <div className="modal-content">
                                        <div className="modal-header container">
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="modalImage container">
                                                <img src={elem.urls.regular} alt="" />
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <div className="imageDetails">
                                                <img src={elem.user.profile_image.medium} className='mx-3' alt="" />
                                                <p>
                                                    <span><b>{elem.user.name}</b></span>
                                                    <br />
                                                    <span>{elem.likes} <img src={heart} alt="" className='mx-2' /></span>
                                                    <span>Created at : {elem.created_at}</span>
                                                </p>
                                            </div>
                                            <button type="button" className="btn btn-primary">Download</button>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`card m-2 ${props.mode==='dark'?'bg-dark text-light':'bg-light text-dark'}`} >
                                <img className="card-img-top" src={elem.urls.small} alt="Card image cap" data-bs-toggle="modal" data-bs-target={`#key${elem.id}`} />
                                <div className="card-body container d-flex">
                                    <div>
                                        <img src={elem.user.profile_image.small} alt="" className='profileImage1' />
                                        <span className='userName'>{elem.user.name}</span>
                                    </div>
                                    <div className='sideLike'>
                                        <img src={heart} alt="" srcset="" className='likebutton' />
                                        <span className='likes'>{elem.likes}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
