import { HttpGet, HttpPost, HttpDelete } from "../../services/api-services";
import { BASE_URI, BASE_TWEET_URL } from "../../constants/endpoints";

export const likeTweet = async (data) => {
    try {
        let credentials = "Bearer " + localStorage.getItem("token");
        let headers = {
            "Authorization": credentials
        }
        let apiUrl = BASE_URI + BASE_TWEET_URL + "/like" ;
        await HttpPost(apiUrl, data)
    } catch (e) {
        throw e;
    }

}

export const fetchMyTweets = async (loginId) => {
    try {
        let credentials = "Bearer " + localStorage.getItem("token");
        let apiUrl = BASE_URI + BASE_TWEET_URL + "/" + loginId;
        let headers = {
            "Authorization": credentials
        }
        let response = await HttpGet(apiUrl, {}, headers)
        // let response = {
        //     data: {
        //         tweetsDto: [
        //             {
        //                 "tweet": "#HackWithInfy, the #codingcompetition for engineering students in India, is back with its fourth edition. Watch this video to know more about the opportunities it brings. Register at https://infy.com/31chPBP?twclid=11386070174013431808 #ForwardwithInfosys",
        //                 "userTweetId": "John",
        //                 "tweetId": 1,
        //                 "like": 3,
        //                 "reply": [
        //                     {
        //                         "userId": "daviyu",
        //                         "replied": "wow",
        //                         "dateReplied": "2021-04-22T18:30:00.000+00:00"
        //                     },
        //                     {
        //                         "userId": "daviyu",
        //                         "replied": "wow",
        //                         "dateReplied": "2021-04-22T18:30:00.000+00:00"
        //                     },
        //                     {
        //                         "userId": "bud",
        //                         "replied": "wow",
        //                         "dateReplied": "2021-04-22T18:30:00.000+00:00"
        //                     }
        //                 ],
        //                 "dateOfPost": "04-23-2021",
        //                 "timeOfPost": "00:00:00"
        //             },
        //             {
        //                 "tweet": "Eyes Less than 1 week left to get a great deal on assets you've been eyeballing during the Spring sale! Double exclamation mark DON'T FORGET: Use code SPRING2021 to get an extra 5% off of on-sale purchases of $100+ and 10% off on-sale purchases of $150+",
        //                 "userTweetId": "Peter",
        //                 "tweetId": 2,
        //                 "like": 0,
        //                 "reply": [
        //                     {
        //                         "userId": "divya",
        //                         "replied": "wow superb",
        //                         "dateReplied": "2021-04-22T18:30:00.000+00:00"
        //                     },
        //                     {
        //                         "userId": "divya",
        //                         "replied": "wow superb",
        //                         "dateReplied": "2021-04-22T18:30:00.000+00:00"
        //                     },
        //                     {
        //                         "userId": "divya",
        //                         "replied": "wow superb",
        //                         "dateReplied": "2021-04-22T18:30:00.000+00:00"
        //                     }
        //                 ],
        //                 "dateOfPost": "04-23-2021",
        //                 "timeOfPost": "00:00:00"
        //             },
        //             {
        //                 "tweet": "क्या निराश हुआ जाए? क्या हताश हुआ जाए? जीवन संघर्ष का नाम है और यह तो हमारे जीवन का सबसे बड़ा युद्ध है। विश्व युद्ध की तरह।   मुख्य लक्ष्य: सुरक्षित रहना।  जीवित रहना। सपरिवार। .",
        //                 "userTweetId": "Saxena",
        //                 "tweetId": 4,
        //                 "like": 0,
        //                 "reply": [
        //                     {
        //                         "userId": "banda",
        //                         "replied": "hello",
        //                         "dateReplied": "2021-04-22T18:30:00.000+00:00"
        //                     },
        //                     {
        //                         "userId": "divya",
        //                         "replied": "nice",
        //                         "dateReplied": "2021-04-22T18:30:00.000+00:00"
        //                     }
        //                 ],
        //                 "dateOfPost": "04-23-2021",
        //                 "timeOfPost": "00:00:00"
        //             },
        //             {
        //                 "tweet": "Professor Greene spread his wings while he brushed six fingers over his facial hair.You're right, this does pose a problem. The simulation will grind to a halt if they keep this up. Free #scifi short story.",
        //                 "userTweetId": "Nazzer",
        //                 "tweetId": 5,
        //                 "like": 2,
        //                 "reply": [
        //                     {
        //                         "userId": "bud",
        //                         "replied": "wow",
        //                         "dateReplied": "2021-04-22T18:30:00.000+00:00"
        //                     },
        //                     {
        //                         "userId": "sow",
        //                         "replied": "how are you?",
        //                         "dateReplied": "2021-04-23T13:54:20.108+00:00"
        //                     }
        //                 ],
        //                 "dateOfPost": "04-23-2021",
        //                 "timeOfPost": "00:00:00"
        //             },
        //             {
        //                 "tweet": "If peak demand is less than the medical oxygen available in India then the bottleneck is supply & failure of supply chain. Plus failure to wargame the magnitude of the crisis & extent of demand. If East has 15,000 MT oxygen then why don't we have trains/tankers to get it to Delhi",
        //                 "userTweetId": "Sachin",
        //                 "tweetId": 6,
        //                 "like": 0,
        //                 "reply": [],
        //                 "dateOfPost": "04-23-2021",
        //                 "timeOfPost": "19:25:10"
        //             }
        //         ]
        //     }
        // }
        return response.data.tweetsDto;
    } catch (e) {
        throw e;
    }
}

export const deleteTweet = async (loginId, tweetId) => {
    try {
        let credentials = "Bearer " + localStorage.getItem("token");
        let apiUrl = BASE_URI + BASE_TWEET_URL + "/" + loginId + "/delete/" + tweetId;
        let headers = {
            "Authorization": credentials
        }
       await HttpDelete(apiUrl, {}, headers)
        
    } catch (e) {
        throw e;
    }
}

export const updateTweet = async (data) => {
    try {
        let credentials = "Bearer " + localStorage.getItem("token");
        let apiUrl = BASE_URI + BASE_TWEET_URL + "/update";
        let headers = {
            "Authorization": credentials
        }
       await HttpPost(apiUrl, data, headers)
        
    } catch (e) {
        throw e;
    }
}

