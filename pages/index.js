import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'First Meetup',
        image: 'https://nt.global.ssl.fastly.net/binaries/content/gallery/website/national/regions/sussex/places/bodiam-castle/library/summer/bridge-over-the-moat-bodiam-castle-east-sussex-165000.jpg',
        address: 'Somewhere',
        description: 'Something'
    },
    {
        id: 'm2',
        title: 'Second Meetup',
        image: 'https://nt.global.ssl.fastly.net/binaries/content/gallery/website/national/regions/sussex/places/bodiam-castle/library/summer/bridge-over-the-moat-bodiam-castle-east-sussex-165000.jpg',
        address: 'Somewhere',
        description: 'Something'
    },
    {
        id: 'm3',
        title: 'Third Meetup',
        image: 'https://nt.global.ssl.fastly.net/binaries/content/gallery/website/national/regions/sussex/places/bodiam-castle/library/summer/bridge-over-the-moat-bodiam-castle-east-sussex-165000.jpg',
        address: 'Somewhere',
        description: 'Something'
    }
]

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
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        // regenerate data every x seconds
        revalidate: 10
    };
}

export default Homepage;