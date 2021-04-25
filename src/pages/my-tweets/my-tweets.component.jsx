import React, { useRef } from 'react';
import "./my-tweets.styles.css";
import imgProfileEmpty from '../../assets/images/profile.jpeg';
import imgProfile1 from '../../assets/images/profile-1.jpeg';
import imgProfile2 from '../../assets/images/profile-2.jpeg';
import imgProfile3 from '../../assets/images/profile-3.jpeg';
import imgProfile4 from '../../assets/images/profile-4.png';
import imgProfile5 from '../../assets/images/profile-5.jpeg';
import imgLikeWhite from '../../assets/images/like-white.png';
import imgLikeBlue from '../../assets/images/like-blue.png';
import imgReply from '../../assets/images/reply.png';
import imgTrash from '../../assets/images/icon_trash@2x.png';
import imgEdit from '../../assets/images/icon-edit.png';

export default function MyTweets(props) {

    const [allTweets, setAllTweets] = React.useState([
        {
            "tweet": "#HackWithInfy, the #codingcompetition for engineering students in India, is back with its fourth edition. Watch this video to know more about the opportunities it brings. Register at https://infy.com/31chPBP?twclid=11386070174013431808 #ForwardwithInfosys",
            "userTweetId": "John",
            "tweetId": 1,
            "like": 3,
            "isLiked": true,
            "reply": [
                {
                    "userId": "daviyu",
                    "replied": "wow",
                    "dateReplied": "2021-04-22T18:30:00.000+00:00"
                },
                {
                    "userId": "daviyu",
                    "replied": "wow",
                    "dateReplied": "2021-04-22T18:30:00.000+00:00"
                },
                {
                    "userId": "bud",
                    "replied": "wow",
                    "dateReplied": "2021-04-22T18:30:00.000+00:00"
                }
            ],
            "dateOfPost": "04-23-2021",
            "timeOfPost": "00:00:00"
        },
        {
            "tweet": "Eyes Less than 1 week left to get a great deal on assets you've been eyeballing during the Spring sale! Double exclamation mark DON'T FORGET: Use code SPRING2021 to get an extra 5% off of on-sale purchases of $100+ and 10% off on-sale purchases of $150+",
            "userTweetId": "Peter",
            "tweetId": 2,
            "like": 0,
            "reply": [
                {
                    "userId": "divya",
                    "replied": "wow superb",
                    "dateReplied": "2021-04-22T18:30:00.000+00:00"
                },
                {
                    "userId": "divya",
                    "replied": "wow superb",
                    "dateReplied": "2021-04-22T18:30:00.000+00:00"
                },
                {
                    "userId": "divya",
                    "replied": "wow superb",
                    "dateReplied": "2021-04-22T18:30:00.000+00:00"
                }
            ],
            "dateOfPost": "04-23-2021",
            "timeOfPost": "00:00:00"
        },
        {
            "tweet": "क्या निराश हुआ जाए? क्या हताश हुआ जाए? जीवन संघर्ष का नाम है और यह तो हमारे जीवन का सबसे बड़ा युद्ध है। विश्व युद्ध की तरह।   मुख्य लक्ष्य: सुरक्षित रहना।  जीवित रहना। सपरिवार। .",
            "userTweetId": "Saxena",
            "tweetId": 4,
            "like": 0,
            "reply": [
                {
                    "userId": "banda",
                    "replied": "hello",
                    "dateReplied": "2021-04-22T18:30:00.000+00:00"
                },
                {
                    "userId": "divya",
                    "replied": "nice",
                    "dateReplied": "2021-04-22T18:30:00.000+00:00"
                }
            ],
            "dateOfPost": "04-23-2021",
            "timeOfPost": "00:00:00"
        },
        {
            "tweet": "Professor Greene spread his wings while he brushed six fingers over his facial hair.You're right, this does pose a problem. The simulation will grind to a halt if they keep this up. Free #scifi short story.",
            "userTweetId": "Nazzer",
            "tweetId": 5,
            "like": 2,
            "reply": [
                {
                    "userId": "bud",
                    "replied": "wow",
                    "dateReplied": "2021-04-22T18:30:00.000+00:00"
                },
                {
                    "userId": "sow",
                    "replied": "how are you?",
                    "dateReplied": "2021-04-23T13:54:20.108+00:00"
                }
            ],
            "dateOfPost": "04-23-2021",
            "timeOfPost": "00:00:00"
        },
        {
            "tweet": "If peak demand is less than the medical oxygen available in India then the bottleneck is supply & failure of supply chain. Plus failure to wargame the magnitude of the crisis & extent of demand. If East has 15,000 MT oxygen then why don't we have trains/tankers to get it to Delhi",
            "userTweetId": "Sachin",
            "tweetId": 6,
            "like": 0,
            "reply": [],
            "dateOfPost": "04-23-2021",
            "timeOfPost": "19:25:10"
        }
    ])
    const onTweetClick = () => {

    }

    const generateTweets = () => {

        return allTweets.map((tweet, index) => {
            let imgSrcIndex = index % 5;
            let imgSrc = imgProfileEmpty;
            switch (imgSrcIndex) {
                case 1: imgSrc = imgProfile1;
                    break;
                case 2: imgSrc = imgProfile2;
                    break;
                case 3: imgSrc = imgProfile3;
                    break;
                case 4: imgSrc = imgProfile4;
                    break;
                case 0: imgSrc = imgProfile5;
                    break;

            }
            const date1 = new Date();
            const date2 = new Date(tweet.dateOfPost + " " + tweet.timeOfPost);
            const diffTime = Math.abs(date2 - date1);
            let diffDays = Math.ceil(diffTime / (1000 * 60));
            let units = "mins"
            if (diffDays > 60) {
                diffDays = (diffDays / 60).toFixed();
                units = "hours"
                if (diffDays > 24) {
                    diffDays = (diffDays / 24).toFixed();
                    units = diffDays > 1 ? "days" : "day"
                }
            }
            const onLikeClick = () => {
                let tweets = [...allTweets]
                tweets[index].like = tweets[index].isLiked ? parseInt(tweets[index].like) - 1 : parseInt(tweets[index].like) + 1;
                tweets[index].isLiked = !tweets[index].isLiked;
                setAllTweets(tweets);
            }

            const onReplyClick = () => {
                let tweets = [...allTweets]
                tweets[index].showReplies = !tweets[index].showReplies;
                setAllTweets(tweets);
            }

            const onDeleteClick = () => {
                let tweets = [...allTweets]
                tweets.splice(index, 1);
                setAllTweets(tweets)
            }

            const onEditClick = () => {
                let tweets = [...allTweets]
                tweets[index].isEditing = true
                setAllTweets(tweets)
            }
            const onEditChange = (e) => {
                let tweets = [...allTweets]
                console.log(e.target.value)
                tweets[index].tweet = e.target.value
                setAllTweets(tweets)
            }
            const onSaveClick = (e) => {
                let tweets = [...allTweets]
                tweets[index].isEditing = false
                setAllTweets(tweets)
            }
            return (
                <div className="shadow" style={{ width: "60%", marginLeft: "auto", marginRight: "auto", alignItems: "flex-start", display: "flex", flexDirection: "column", borderRadius: 10, marginBottom: 10 }}>
                    <div style={{ alignItems: "flex-start", display: "inline-flex", width: "100%", padding: 20, borderRadius: 10, borderWidth: 1 }}>
                        <img src={imgSrc} className="rounded-circle" height={40} width={40} style={{ marginRight: 20 }} />
                        <div style={{ width: "100%", justifyContent: "flex-start", display: "inline-flex", flexDirection: "column", alignItems: "flex-start" }}>
                            <div style={{ display: "inline-flex", justifyContent: "space-between", width: "100%" }}>
                                <p style={{ fontFamily: "Barlow-SemiBold", fontSize: 16, margin: 0 }}>{tweet.userTweetId} <span style={{ color: "GrayText", fontFamily: "OpenSans-Regular", fontSize: 12 }}>{diffDays} {units} ago</span></p>
                                <div style={{ marginBottom: 10 }}>
                                    <img className={"ml-4"} src={imgEdit} height={20} width={20} onClick={onEditClick} />
                                    <img className={"ml-4"} src={imgTrash} height={20} width={20} onClick={onDeleteClick} />
                                </div>

                            </div>
                            {
                                tweet.isEditing ?
                                    <div style={{ width: "100%", display: "inline-flex", alignItems: "center", justifyContent:"center" }}>
                                        <textarea placeholder={"Edit Tweet"} value={tweet.tweet} multiple={4} style={{ width: "80%", borderWidth: 0, resize: "none", padding: 10, marginRight: 20 }} maxLength={144} onChange={onEditChange} />
                                        <button style={{ borderWidth: 0, backgroundColor: "#1DA1F2", color: "white", width: 100, padding: 5, borderRadius: 20, marginRight: 30 }} onClick={onSaveClick}>Save</button>
                                    </div> :
                                    <p style={{ borderWidth: 0, fontFamily: "OpenSans-Regular", fontSize: 16, textAlign: "justify" }}>{tweet.tweet}</p>
                            }
                        </div>

                    </div>
                    <div style={{ display: "inline-flex", marginLeft: 20 }}>
                        <img className={"ml-2"} src={tweet.isLiked ? imgLikeBlue : imgLikeWhite} height={30} width={30} onClick={onLikeClick} />
                        <p className={"ml-2 mt-1"}>{tweet.like}</p>
                        <img className={"ml-4"} src={imgReply} height={30} width={30} onClick={onReplyClick} />
                        <p className={"ml-2 mt-1"}>{tweet.reply.length}</p>
                    </div>
                    <div style={{ width: "100%" }}>
                        {
                            tweet.showReplies &&
                            <>
                                <div>
                                    {
                                        tweet.reply.map((reply, rIndex) => {
                                            let imgSrcIndex = rIndex % 5;
                                            let imgSrc = imgProfileEmpty;
                                            switch (imgSrcIndex) {
                                                case 1: imgSrc = imgProfile1;
                                                    break;
                                                case 2: imgSrc = imgProfile2;
                                                    break;
                                                case 3: imgSrc = imgProfile3;
                                                    break;
                                                case 4: imgSrc = imgProfile4;
                                                    break;
                                                case 0: imgSrc = imgProfile5;
                                                    break;

                                            }
                                            const replydate1 = new Date();
                                            const replydate2 = new Date(reply.dateReplied);
                                            const replydiffTime = Math.abs(replydate2 - replydate1);
                                            let replydiffDays = Math.ceil(replydiffTime / (1000 * 60));
                                            let units = "mins"
                                            if (replydiffDays > 60) {
                                                replydiffDays = (replydiffDays / 60).toFixed();
                                                units = "hours"
                                                if (replydiffDays > 24) {
                                                    replydiffDays = (replydiffDays / 24).toFixed();
                                                    units = "days"
                                                }
                                            }
                                            return (
                                                <div style={{ alignItems: "flex-start", display: "inline-flex", width: "100%", padding: 10, borderRadius: 10, borderWidth: 1, marginLeft: 30 }}>
                                                    <img src={imgSrc} className="rounded-circle" height={30} width={30} style={{ marginRight: 20 }} />
                                                    <div style={{ width: "100%", justifyContent: "flex-start", display: "inline-flex", flexDirection: "column", alignItems: "flex-start" }}>
                                                        <p style={{ fontFamily: "Barlow-SemiBold", fontSize: 16, margin: 0 }}>{reply.userId} <span style={{ color: "GrayText", fontFamily: "OpenSans-Regular", fontSize: 12 }}>{replydiffDays} {units} ago</span></p>
                                                        <p style={{ borderWidth: 0, }}>{reply.replied}</p>
                                                    </div>

                                                </div>
                                            )
                                        })}
                                </div>
                                <div className="shadow" style={{ alignItems: "flex-start", display: "flex", flexDirection: "column", borderRadius: 10, margin: 30, marginTop: 0, }}>
                                    <p style={{ marginLeft: 20, marginTop: 20, fontSize: 12, fontFamily: "OpenSans-Regular" }}>You are replying to <span style={{ color: "#1DA1F2" }}>{tweet.userTweetId}</span> </p>
                                    <div style={{ alignItems: "flex-start", display: "inline-flex", width: "100%", borderRadius: 10, borderWidth: 1, marginLeft: 30 }}>
                                        <img src={imgProfileEmpty} className="rounded-circle" height={30} width={30} style={{ marginRight: 20 }} />
                                        <textarea placeholder={"Tweet your reply"} multiple={4} style={{ width: "80%", height: 50, borderWidth: 0, resize: "none", padding: 10, fontSize: 16 }} maxLength={144} />
                                    </div>
                                    <div style={{ display: "inline-flex", alignItems: "flex-end", justifyContent: "flex-end", width: "100%" }}>
                                        <button style={{ borderWidth: 0, marginTop: 10, backgroundColor: "#1DA1F2", color: "white", width: 100, padding: 10, borderRadius: 20, marginBottom: 20, marginRight: 30 }} onClick={onTweetClick}>Tweet</button>
                                    </div>
                                </div>
                            </>
                        }

                    </div>

                </div >
            )
        })
    }
    return (
        <>
            <div className={"h-100"}>
                <div>
                    {
                        generateTweets()
                    }
                </div>

            </div>
        </>
    )

}
