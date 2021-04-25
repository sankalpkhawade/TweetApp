import React, { useRef } from 'react';
import "./all-users.styles.css";
import imgProfileEmpty from '../../assets/images/profile.jpeg';
import imgProfile1 from '../../assets/images/profile-1.jpeg';
import imgProfile2 from '../../assets/images/profile-2.jpeg';
import imgProfile3 from '../../assets/images/profile-3.jpeg';
import imgProfile4 from '../../assets/images/profile-4.png';
import imgProfile5 from '../../assets/images/profile-5.jpeg';
import imgEmail from '../../assets/images/email.png';
import imgPhone from '../../assets/images/phone.png';

export default function MyTweets(props) {

    const [allUsers, setAllUsers] = React.useState([
        {
            "loginId": "finny",
            "firstName": "finny",
            "lastName": "gathala",
            "emailId": "finnylaurence@gmail.com",
            "password": "$2a$10$CLWpoE7Z1kBkisoFvAVOgu4MJr/7qDvmRvo/HNGfIF8kWJG4jcM62",
            "contactNumber": "9603340903",
            "loggedIn": true
        },
        {
            "loginId": "budamkay",
            "firstName": "bud",
            "lastName": "mkay",
            "emailId": "bud@gmail.com",
            "password": "$2a$10$E9tRoQKF7AlEopLCKIebVOtKaHsno5eB3ZkyOMyaYcz9ghnbm/azG",
            "contactNumber": "9999",
            "loggedIn": false
        },
        {
            "loginId": "fudamkay",
            "firstName": "bud",
            "lastName": "mkay",
            "emailId": "fud@gmail.com",
            "password": "$2a$10$KNJsigty8NaOJBl7NpkHRu8eZBIEiGuI0bq5wXoDGwLusVORJiuW6",
            "contactNumber": "9999",
            "loggedIn": false
        },
        {
            "loginId": "klaus",
            "firstName": "klaus",
            "lastName": "klaus",
            "emailId": "klaus@gmail.com",
            "password": "$2a$10$1Uoh.7efpGHAy6z5nsV7cOSPduYtMc70c/dn4h06yzMLYz/5ZK.q6",
            "contactNumber": "99999",
            "loggedIn": true
        },
        {
            "loginId": "mini",
            "firstName": "mini",
            "lastName": "mini",
            "emailId": "mini@gmail.com",
            "password": "$2a$10$CWvGKmSp13NcnzoaSkxhTu4GRNProa2aXPwc2bXl4ya45aD051Cv.",
            "contactNumber": "9999",
            "loggedIn": true
        }
    ])
    const onTweetClick = () => {

    }

    const generateTweets = () => {

        return allUsers.map((tweet, index) => {
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

            return (
                <div className="shadow" style={{ width: "60%", marginLeft: "auto", marginRight: "auto", alignItems: "flex-start", display: "flex", flexDirection: "column", borderRadius: 10, marginBottom: 10 }}>
                    <div style={{ alignItems: "flex-start", display: "inline-flex", width: "100%", padding: 20, borderRadius: 10, borderWidth: 1 }}>
                        <img src={imgSrc} className="rounded-circle" height={40} width={40} style={{ marginRight: 20 }} />
                        <div style={{ width: "100%", justifyContent: "flex-start", display: "inline-flex", flexDirection: "column", alignItems: "flex-start" }}>
                            <div style={{ display: "inline-flex", justifyContent: "space-between", width: "100%" }}>
                                <p style={{ fontFamily: "Barlow-SemiBold", fontSize: 16, margin: 0 }}>{tweet.firstName} {tweet.lastName} <span style={{ color: "GrayText", fontFamily: "OpenSans-Regular", fontSize: 12 }}>@{tweet.loginId}</span></p>
                            </div>
                            <div style={{flexDirection:"row", display:"inline-flex", alignItems:"center", marginTop: 10}}>
                                <img src={imgEmail} height={20} width={20} style={{marginRight:5}}/>
                                <p style={{marginRight:10, marginBottom: 0}}>{tweet.emailId} </p>
                                <img src={imgPhone} height={20} width={20} style={{marginRight:5}}/>
                                <p style={{marginRight:5,  marginBottom: 0}}>{tweet.contactNumber}</p>
                            </div>
                        </div>
                    </div>

                </div>
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
