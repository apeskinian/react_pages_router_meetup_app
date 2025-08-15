import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
    return (
        <>
            <MeetupDetail
                image='https://nt.global.ssl.fastly.net/binaries/content/gallery/website/national/regions/sussex/places/bodiam-castle/library/summer/bridge-over-the-moat-bodiam-castle-east-sussex-165000.jpg'
                title='First Meetup'
                address='Somewhere'
                description='Something'
            />
        </>
    )
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            { params: {
                meetupId: 'm1'
            } },
            { params: {
                meetupId: 'm2'
            } },
            { params: {
                meetupId: 'm3'
            } }
        ]
    };
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId

    return {
        props: {
            meetupData: {
                image: 'https://nt.global.ssl.fastly.net/binaries/content/gallery/website/national/regions/sussex/places/bodiam-castle/library/summer/bridge-over-the-moat-bodiam-castle-east-sussex-165000.jpg',
                id: meetupId,
                title: 'First Meetup',
                address: 'Somewhere',
                description: 'Something'
            }
        }
    }
}

export default MeetupDetails;