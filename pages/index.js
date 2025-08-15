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

function Homepage() {
    return (
        <MeetupList meetups={DUMMY_MEETUPS} />
    )
}

export default Homepage;