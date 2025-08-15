import NewMeetupForm from '../../components/meetups/NewMeetupForm'

function NewMeetup() {
    function addMeetupHandler(enteredData) {
        console.log(enteredData);
    }

    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    )
}

export default NewMeetup;