import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from "mongodb";

function Homepage(props) {
    return (
        <MeetupList meetups={props.meetups} />
    )
}

// updates data on every request
// export function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//     // running on server
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     };
// }

// getting data pre rendering on the server before it hits the client machine
export async function getStaticProps() {
    // fetch data from api or db

    const user = process.env.MONGO_USER
    const password = process.env.MONGO_PASSWORD
    const client = await MongoClient.connect(`mongodb+srv://${user}:${password}@cluster0.xj8nrk8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();
    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        // regenerate data every x seconds
        revalidate: 10
    };
}

export default Homepage;