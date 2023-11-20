import { useState } from "react"

const Form = () => {
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [phoneType, setPhoneType] = useState("")
    const [staff, setStaff] = useState("")
    const [bio, setBio] = useState("")
    const [notifications, setNotifications] = useState(false)

    const handleChange = (e) => {
        if (e.target.id === 'email') {
            const newEmail = (e.target.value)
            setEmail(newEmail)
        }
        if (e.target.id === 'name') {
            const newName = (e.target.value)
            setName(newName)
        }
        if(e.target.id === 'phonenumber') {
            const newPhoneNumber = (e.target.value)
            setPhoneNumber(newPhoneNumber)
        }
        if(e.target.id === 'phonetype') {
            const newType = (e.target.value)
            setPhoneType(newType)
        }
        if (e.target.id === 'staff') {
            const newStaff = (e.target.value)
            setStaff(newStaff)
        }
        if (e.target.id === 'bio') {
            const newBio = (e.target.value)
            setBio(newBio)
        }
        if (e.target.id === 'notifications') {
            const newNotifications = (!notifications)
            setNotifications(newNotifications)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.notifications.checked)
    }
    return (
        <>
           <form onSubmit={handleSubmit}>
                <input type="text" placeholder="name" value={name} onChange={handleChange} id="name"/>
                <input type="text" placeholder="email" value={email} onChange={handleChange} id="email" />
                <input type="text" placeholder="phonenumber" value={phoneNumber} onChange={handleChange} id="phonenumber"/>
                <select value={phoneType} id="phonetype" onChange={handleChange}>
                    <option value="" disabled>type</option>
                    <option value="Home">Home</option>
                    <option value="Work">Work</option>
                    <option value="Mobile">Mobile</option>
                </select>
                <input type="radio" name="staff" id="staff" value='Instructor' onChange={handleChange}/>Instructor
                <input type="radio" name="staff" id="staff" value='Student' onChange={handleChange}/>Student
                <textarea placeholder="bio" id="bio" cols="30" rows="10" value={bio} onChange={handleChange}></textarea>
                <input type="checkbox" id="notifications" checked={notifications} onChange={handleChange} />Get notifications?
                <button>Submit</button>
           </form>
        </>
    )
}

export default Form
